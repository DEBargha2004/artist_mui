import { Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "@/styles/modules/Artwork.module.scss";

const ArtworkMedia = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      // sx={{ backgroundColor: "blueviolet" }}
      component="section"
      className={styles.media}
    >
      {/* ArtworkMedia */}

      <Stack className={styles.stackContainer} sx={{ backgroundColor: "cyan" }} spacing={2}>
        <Container className={styles.imageContainer} component="div" maxWidth={false} disableGutters>
          <Image
            style={{
              // objectFit: "fill",
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              // height: "100%",
              // width: "100%",
            }}
            src="https://cdna.artstation.com/p/assets/images/images/012/900/510/large/filippo-ubertino-straussimmaginefinale2low.jpg?1537103896"
            alt="image"
            width={1537}
            height={700}
            // objectFit="fill"
            quality={90}
            layout="responsive"
            // fill
            // className={`${image}`}
          />
        </Container>
        <Container className={styles.imageContainer} component="div" maxWidth={false} disableGutters>
          <Image
            style={{
              // objectFit: "fill",
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              // height: "100%",
              // width: "100%",
            }}
            src="https://cdnb.artstation.com/p/assets/images/images/012/909/259/large/filippo-ubertino-straussimmaginefinale1low.jpg?1537138914"
            alt="image"
            width={1537}
            height={700}
            // objectFit="fill"
            quality={90}
            layout="responsive"
            // fill
            // className={`${image}`}
          />
        </Container>
        <Container className={styles.imageContainer} component="div" maxWidth={false} disableGutters>
          <Image
            style={{
              // objectFit: "fill",
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              // height: "100%",
              // width: "100%",
            }}
            src="https://cdna.artstation.com/p/assets/images/images/012/900/672/large/filippo-ubertino-straussimmaginefinale3low.jpg?1537104491"
            alt="image"
            width={1537}
            height={700}
            // objectFit="fill"
            quality={90}
            layout="responsive"
            // fill
            // className={`${image}`}
          />
        </Container>
        <Container className={styles.imageContainer} component="div" maxWidth={false} disableGutters>
          <Image
            style={{
              // objectFit: "fill",
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              // height: "100%",
              // width: "100%",
            }}
            src="https://cdna.artstation.com/p/assets/images/images/012/902/020/large/filippo-ubertino-straussimmaginefinale4low.jpg?1537109137"
            alt="image"
            width={1537}
            height={700}
            // objectFit="fill"
            quality={90}
            layout="responsive"
            // fill
            // className={`${image}`}
          />
        </Container>
        <Container className={styles.imageContainer} component="div" maxWidth={false} disableGutters>
          <Image
            style={{
              // objectFit: "fill",
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              // height: "100%",
              // width: "100%",
            }}
            src="https://cdna.artstation.com/p/assets/images/images/012/902/756/large/filippo-ubertino-straussimmaginefinale5low.jpg?1537111847"
            alt="image"
            width={1537}
            height={700}
            // objectFit="fill"
            quality={90}
            layout="responsive"
            // fill
            // className={`${image}`}
          />
        </Container>
      </Stack>
    </Container>
  );
};

export default ArtworkMedia;
