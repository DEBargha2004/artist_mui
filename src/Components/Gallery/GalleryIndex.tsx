import { Container } from "@mui/material";
import React from "react";
import GalleryBanner from "./GalleryComponents/GalleryBanner";
import ProfileArtworks from "../Profile/ProfileComponents/ProfileArtworks";

const GalleryIndex = () => {
  return (
    <Container component="section" maxWidth={false} disableGutters>
      <Container maxWidth={false} disableGutters>
        <GalleryBanner />
      </Container>
      <Container
        sx={{ backgroundColor: "#181A20" }}
        maxWidth={false}
        disableGutters
      >
        <ProfileArtworks />
      </Container>
    </Container>
  );
};

export default GalleryIndex;
