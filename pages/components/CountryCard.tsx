import React from "react";

interface CountryCardProps {
  country: {
    alphaCode: string;
    countryImage: string;
    name: string;
  };
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div
      key={country.alphaCode}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-4 shadow rounded"
    >
      <img
        src={country.countryImage}
        alt={country.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <p className="text-gray-600">{country.alphaCode}</p>
      <h2 className="text-2xl text-black font-bold">{country.name}</h2>
    </div>
  );
};

export default CountryCard;
