"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import React from "react";

const GalleryBanner = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginLeft: 0,
    width: "90%",
    marginInline: "auto",
    [theme.breakpoints.up("lg")]: {
      //   marginLeft: theme.spacing(1),
        width: "50%",
    },
    [theme.breakpoints.up("xl")]: {
        //   marginLeft: theme.spacing(1),
          width: "40%",
      },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box sx={{ textAlign: "center", margin: "3rem 0rem" }}>
        <Typography fontSize={52} fontWeight={700}>
          Showcase & Discover Creative Work
        </Typography>
        <Typography fontSize={20}>
          for Concept Art , Visual Effects , Short Films and more.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", margin: "3rem 0rem" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <Box sx={{ textAlign: "center", margin: "3rem 0rem" }}>
        <Button variant="contained">Post Artwork</Button>
      </Box>
    </>
  );
};

export default GalleryBanner;
