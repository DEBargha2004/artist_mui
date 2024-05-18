"use client";
import { Box, Container, Tab, Tabs } from "@mui/material";
import React from "react";
import ProfileDetails from "./ProfileComponents/ProfileDetails";
import ProfileOptions from "./ProfileComponents/ProfileOptions";
import ProfileArtworks from "./ProfileComponents/ProfileArtworks";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import ProfileFollower from "./ProfileComponents/ProfileFollower";
import ProfileJobs from "./ProfileComponents/ProfileJobs";
import ProfileAbout from "./ProfileComponents/ProfileAbout";

const ProfileIndex = () => {
  const [value, setValue] = React.useState<any>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  const HandleProfileView = () => {
    switch (value) {
      case 0:
        return <ProfileArtworks />;
      case 1:
        return <ProfileJobs />;
        case 2:
        return <ProfileAbout />;
      case "Follow":
        return <ProfileFollower />;
      // case 2:
      //   return <SearchArtists />;
      // case 3:
      //   // return <SearchCompanies />;
      //   return <SearchArtists />;
      default:
        <ProfileArtworks />;
    }
  };
  return (
    <Container component="section" maxWidth={false} disableGutters>
      <Container maxWidth={false} disableGutters>
        <ProfileDetails setValue={setValue} />
      </Container>
      <Container maxWidth={false} disableGutters>
        {/* <ProfileOptions /> */}
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            sx={{ maxHeight: "4rem" }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab
              sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              icon={<GridViewIcon />}
              label="Posts"
            />
            <Tab
              sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              icon={<BusinessCenterIcon />}
              label="Jobs"
            />
            <Tab
              sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              icon={<PersonIcon />}
              label="About"
            />
          </Tabs>
        </Box>
      </Container>
      <Container
        sx={{ backgroundColor: "#181A20" }}
        maxWidth={false}
        disableGutters
      >
        {/* <ProfileArtworks /> */}
        {/* <ProfileFollower /> */}
        {/* <ProfileJobs /> */}
        <HandleProfileView />
      </Container>
    </Container>
  );
};

export default ProfileIndex;
