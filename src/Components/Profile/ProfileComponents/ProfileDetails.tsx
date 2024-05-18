import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "@/styles/modules/Profile.module.scss";

const ProfileDetails = ({setValue}: {setValue: any}) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        // sx={{
        //   // backgroundColor: "rebeccapurple",
        //   maxHeight: "30rem",
        //   overflow: "hidden",
        // }}
        // position="relative"
        className={styles.profileBanner}
      >
        <div
          style={
            {
              // backgroundColor: "palegoldenrod",
              // width: "2000",
              // height: "400",
            }
          }
        >
          <Image
            src="https://cdnb.artstation.com/p/users/covers/000/134/037/default/558a2bac8d36d538b892f063d7df4d0c.jpg"
            width={1914}
            height={375}
            style={{ objectFit: "cover" }}
            alt="images/profile"
            quality={100}
            priority={true}
            // layout="responsive"
            // fill={true}
            
          />
        </div>

        <div
          style={{
            // backgroundColor: "burlywood",
            // position: "relative",
            // bottom: "7.5rem",
            // textAlign: "center",
          }}
          className={styles.profileAvatar}
        >
          {/* <div> */}
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid white",
                // backgroundColor: "lavender",
                // backgroundColor: "burlywood",
                // position: "relative",
                // bottom: "5rem",ss
                textAlign: "center",
              }}
              src="https://cdnb.artstation.com/p/assets/images/images/074/076/619/large/cat-beachcatsqwm2.jpg?1711145606"
              width={200}
              height={200}
              alt="images/profile"
              priority={true}
              layout="responsive"
            />
          {/* </div> */}
        </div>
      </Box>
      {/* Profile Info  */}
      <Box className={styles.profileInfo}>
        <Stack>
          <h1>Abigail Salvator</h1>
          <small>3D Animator</small>
          <p>
            <span>
              <LocationOnIcon />
            </span>
            <span>Florida, USA</span>
          </p>
        </Stack>
      </Box>

      <Box className={styles.profileStatContainer}>
        <Stack className={styles.profileFollow}>
          <div>
            <p>256</p>
            <span>Posts</span>
          </div>
          <hr />
          <div onClick={() => setValue("Follow")}>
            <p>100</p>
            <span>Followers</span>
          </div>
          <hr />
          <div onClick={() => setValue("Follow")}>
            <p>45</p>
            <span>Following</span>
          </div>
        </Stack>
        <Stack className={styles.profileButtons}>
          <button>Follow</button>
          <button>Message</button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfileDetails;
