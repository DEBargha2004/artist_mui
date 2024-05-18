import { Container } from "@mui/material";
import styles from "@/styles/modules/Profile.module.scss";
import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import data from "../../../../public/data/artists.json";
import Image from "next/image";

const ProfileFollower = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.followerContainer}
    >
      {data?.data?.map((follower) => (
        <div key={follower?.id} className={styles.followerCard}>
          <div className={styles.followerAvatar}>
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
              src={follower?.large_avatar_url}
              alt="artist"
              layout="responsive"
              width={72}
              height={72}
            />
          </div>
          <div className={styles.followerContent}>
            <div className={styles.followerDetails}>
              <div>
                <p>{follower?.full_name}</p>
                <span>{follower?.headline}</span>
              </div>
              <div>
                <PersonAddAlt1Icon />
              </div>
            </div>
            <div className={styles.followerArtworks}>
              {follower?.sample_projects?.slice(0, 3)?.map((post) => (
                <div key={post?.id}>
                  <Image
                    src={post?.smaller_square_cover_url}
                    alt="posts"
                    layout="responsive"
                    width={72}
                    height={72}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ProfileFollower;
