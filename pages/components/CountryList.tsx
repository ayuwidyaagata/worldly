import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

type Country = {
  name: string;
  alphaCode: string;
  countryImage: string;
};

const CountryList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Navbar />
      <div className="w-full max-w-4xl px-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* Todo: Integrate country list */}
      </div>
    </div>
  );
};

export default CountryList;
