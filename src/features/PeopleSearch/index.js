import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePeopleSearch} from "../hooks/usePeopleSearch";
import {PeopleSearchWrapper, SearchIconWrapper, StyledSearchIcon} from "./styled";

export const PeopleSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { searchResults } = usePeopleSearch(searchQuery);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    try {
      if (value.trim()) {
        navigate(`/person?query=${encodeURIComponent(value)}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred while searching for people:", error);
    }
  };

  return (
    <PeopleSearchWrapper>
      <StyledSearchIcon />
      <SearchIconWrapper
        type="text"
        placeholder="Search for people..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </PeopleSearchWrapper>
  );
};