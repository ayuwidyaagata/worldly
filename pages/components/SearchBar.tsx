import { FC } from "react";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="🔎 Search by country name"
        className="w-full px-4 py-3 rounded-full text-black"
      />
    </div>
  );
};

export default SearchBar;
