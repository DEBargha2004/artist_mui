"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import data from "../../../../public/data/projects.json";
import styles from "@/styles/modules/Gallery.module.scss";

type ImageData = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

const ProfileArtworks = () => {
  // const [images, setImages] = useState<ImageData[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const getImageList = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list");
  //   setImages(response?.data);
  //   setIsLoading(false);

  //   // const fetchedData = response.data;
  // };

  // useEffect(() => {
  //   getImageList();
  // }, []);
  return (
    <div className={styles.myGallery}>
      {data?.data.map((image) => (
        <div key={image.id}>
          <Image
            src={image.smaller_square_cover_url}
            alt={image.title}
            width={240}
            height={240}
            style={{
              objectFit: "cover",
              margin: "0px",
              padding: "0px",
              borderRadius: "0.5rem",
              paddingInline: '4px',
              // maxHeight: '240px',
              // maxWidth: '240px'
            }}
            layout="responsive"
          />
        </div>
      ))}
    </div>
    // <Container maxWidth={false} disableGutters sx={{margin: "0px"}}>
    //   {isLoading ? (
    //     <h1>Loading...</h1>
    //   ) : (
    //     <Container maxWidth={false} disableGutters sx={{ display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(235px, 1fr))", justifyContent: "center", alignItems: "center"}}>
    //       {images.map((item) => (
    //         <Box sx={{ overflow: 'hidden', verticalAlign: "middle", backgroundColor: "red"}} key={item?.id}>
    //         <Image
    //         //   key={item?.id}
    //           // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //           src={`${item?.download_url}`}
    //           alt={item?.author}
    //           loading="lazy"
    //           height={240}
    //           width={240}
    //           style={{objectFit: "cover", margin: "0px", padding: "0px"}}
    //         />
    //         </Box>
    //       ))}
    //     </Container>
    //   )}
    // </Container>
  );
};

export default ProfileArtworks;
