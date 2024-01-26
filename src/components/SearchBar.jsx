import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputGroup my={4}>
      <Input placeholder="Search for products..." value={searchTerm} onChange={handleInputChange} />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleSearch}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
