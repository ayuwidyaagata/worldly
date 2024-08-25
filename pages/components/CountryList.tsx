import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import axios from "axios";
import CountryCard from "./CountryCard";
import FloatingTopButton from "./FloatingTopButton";
import Loading from "./Loading";

type Country = {
  name: string;
  alphaCode: string;
  countryImage: string;
};

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const proxyUrl = "https://proxy.cors.sh/";
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/locations/countries`;
        const response = await axios.get(proxyUrl + apiUrl);

        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (err) {
        setError("Failed to load countries. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, countries]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Navbar />
      <div className="w-full max-w-4xl px-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {filteredCountries.slice(0, visibleCount).map((country) => (
              <CountryCard key={country.alphaCode} country={country} />
            ))}
          </div>
          {visibleCount < filteredCountries.length && (
            <button
              onClick={handleLoadMore}
              className="my-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              Load More
            </button>
          )}
        </>
      )}
      <FloatingTopButton />
    </div>
  );
};

export default CountryList;
