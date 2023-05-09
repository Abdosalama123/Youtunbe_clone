//to learn any thing about any component in material UI check the component API from the website
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  //searchTerm to mange the search resualt
  const [searchTerm, setSearchTerm] = useState("");

  //when submit go to the page of searchTerm to load the data
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        mr: { sm: 5 },
        boxShadow: "none",
        pl: 2,
        borderRadius: 20,
        border: "1 solid #e3e3e3",
      }}
    >
      {/* input search */}
      <input
        className={"search-bar"}
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>


      {/* icon search */}
      <IconButton sx={{ color: "red", p: "10px" }} type="submit">
        <Search></Search>
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
