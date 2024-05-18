"use client";

import styles from "@/styles/modules/Search.module.scss";
import { Box, Container, Tab, Tabs } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBanner = ({value, setValue}: {value: number, setValue: any}) => {
  // const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.bannerContainer}
    >
      <Box className={styles.searchBar}>
        <label>
          <SearchIcon />
          <input type="search" placeholder="Search" />
        </label>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
      </Box>
      <Box className={styles.searchTabs}>
        <Tabs
          // sx={{ maxHeight: "4rem" }}
          value={value}
          onChange={handleChange}
          // centered
        >
          <Tab
            sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            // icon={<GridViewIcon />}
            label="Gallery"
          />
          <Tab
            sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            // icon={<PersonIcon />}
            label="Jobs"
          />
          <Tab
            sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            // icon={<BusinessCenterIcon />}
            label="Artists"
          />
          <Tab
            sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            // icon={<PersonIcon />}
            label="Companies"
          />
        </Tabs>
      </Box>
    </Container>
  );
};

export default SearchBanner;
