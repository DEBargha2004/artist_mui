"use client";

import { Container } from "@mui/material";
import styles from "@/styles/modules/Search.module.scss";
import Image from "next/image";
import data from "../../../../public/data/projects.json";
import { useEffect, useState } from "react";

const SearchArtworks = () => {
  // const [projects, setProjects] = useState({});

  // const data = {
  //   query: "car",
  //   page: 1,
  //   per_page: 50,
  //   sorting: "relevance",
  //   pro_first: "1",
  //   filters: [],
  //   additional_fields: [],
  // };

  // const getArtstationProjects = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.artstation.com/api/v2/search/projects.json",
  //       {
  //         method: "Post",
  //         mode: "no-cors",
  //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //         // credentials: "same-origin",
  //         // referrerPolicy: "no-referrer",
  //         // Origin: "https://www.artstation.com",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`API request failed with status ${response.status}`);
  //     }

  //     const responseJson = await response.json(); // Parse the JSON response
  //     console.log("my artsation response", responseJson);

  //     // setProjects(responseJson);
  //     // return responseJson; //
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     throw error; // Re-throw the error for further handling (optional)
  //   }
  // };

  // useEffect(() => {
  //   getArtstationProjects();
  //   // .then((responseData) => {
  //   //   console.log("API response:", responseData);
  //   // })
  //   // .catch((error) => {
  //   //   console.error("Error processing data:", error);
  //   // });
  // }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.artworkContainer}
    >
      <p>{data?.total_count} Results</p>
      <div className={styles.artworkWrapper}>
        {data?.data?.map((image) => (
          <div key={image.id}>
            <Image
              src={image?.smaller_square_cover_url}
              alt={image?.title}
              width={240}
              height={240}
              style={{
                objectFit: "cover",
                margin: "0px",
                padding: "0px",
                borderRadius: "0.5rem",
                paddingInline: "4px",
                // maxHeight: '240px',
                // maxWidth: '240px'
              }}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SearchArtworks;
