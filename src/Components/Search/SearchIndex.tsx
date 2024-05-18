"use client";

import React, { useState } from "react";
import SearchBanner from "./SearchComponents/SearchBanner";
import SearchFilters from "./SearchComponents/SearchFilters";
import SearchArtworks from "./SearchComponents/SearchArtworks";
import SearchArtists from "./SearchComponents/SearchArtists";
import SearchJobs from "./SearchComponents/SearchJobs";
import SearchCompanies from "./SearchComponents/SearchCompanies";

const SearchIndex = () => {
  const [value, setValue] = useState(0);

  const HandleSearchView = () => {
    switch (value) {
      case 0:
        return <SearchArtworks />;
      case 1:
        return <SearchJobs />;
      case 2: 
        return <SearchArtists />;
      case 3:
        // return <SearchCompanies />;
        return <SearchArtists />;
      default:
        <SearchArtworks />;
    }
  };

  return (
    <>
      <SearchBanner value={value} setValue={setValue} />
      <SearchFilters value={value} />

      <HandleSearchView />
      {/* <SearchArtworks />
      <SearchArtists /> */}
    </>
  );
};

export default SearchIndex;
