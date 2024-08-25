import React from "react";

interface CountryCardProps {
  country: {
    alphaCode: string;
    countryImage: string;
    name: string;
  };
}

const CountryCard = ({ country }: CountryCardProps) => {
  const {
    alphaCode = "Unknown",
    countryImage,
    name = "Unknown Country",
  } = country || {};

  const defaultImage = "/default-image.png";
  return (
    <div
      key={alphaCode}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-4 shadow rounded"
    >
      <img
        src={countryImage || defaultImage}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <p className="text-white bg-lime-500 w-fit p-1 px-3 rounded-xl">
        {alphaCode}
      </p>
      <h2 className="text-2xl text-black font-bold mt-1">{name}</h2>
    </div>
  );
};

export default CountryCard;
