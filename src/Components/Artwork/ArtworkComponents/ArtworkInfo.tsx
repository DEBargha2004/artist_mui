import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "@/styles/modules/Artwork.module.scss";
import Image from "next/image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ArtworkInfo = () => {
  return (
    <Container
      className={styles.infoContainer}
      maxWidth={false}
      disableGutters
      // sx={{ backgroundColor: "olivedrab" }}
      component="section"
    >
      {/* Post Details stack  */}

      <Stack className={styles.stackContainer}>
        {/* Author Info & Follow button  */}
        <Box className={styles.author}>
          {/* Avatar  */}
          <div>
            <Image
              src="https://cdna.artstation.com/p/users/avatars/000/007/574/medium/399b8c27d0ff0bd15514d5ca8aeb7145.jpg?1627221371"
              alt="avatar"
              width={72}
              height={72}
              style={{ borderRadius: "50%" }}
            />
          </div>
          {/* name  */}
          <div>
            <p>Andrew Averkin</p>
            <span>Senior Art Manager at NVIDIA</span>
            <Button variant="outlined" size="small">
              <PersonAddIcon />
              Follow
            </Button>
          </div>

          <div>
            <MoreVertIcon />
            <CloseIcon />
          </div>
        </Box>

        {/* Action buttons  */}
        <Box className={styles.actionButtons}>
          <Button>
            <ThumbUpIcon />
            Like
          </Button>
          <Button>
            <BookmarkIcon />
            Save
          </Button>
        </Box>

        {/* Ad Box  */}
        <Box className={styles.adBox}>
          <p>Ad by Artist Marketplace</p>
          <Image
            src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/016/035/20181002091628/thumbnail/ArtstationMarketplace_01.jpg?1538489772"
            alt="ad"
            layout="responsive"
            width={200}
            height={200}
          />
        </Box>

        {/* Post title, description & time */}
        <Box className={styles.titleInfo}>
          <h1>Someday</h1>
          <p>
            I want to share a side project I was working on during my vacation.
            I started this project just for fun, to keep my hands busy with some
            art and to learn new things in Unreal Engine. But it turned out to
            be something that looks like a small game called
            &apos;Someday.&apos;
          </p>
          <span>Posted 11 hours ago</span>
        </Box>

        {/* Post Stats - like, views and comments */}
        <Box className={styles.postStats}>
          <p>
            <span>
              <ThumbUpIcon />
            </span>
            <span>266</span>
          </p>
          <p>
            <span>
              <VisibilityIcon />
            </span>
            <span>1.3k</span>
          </p>
          <p>
            <span>
              <CommentIcon />
            </span>
            <span>11</span>
          </p>
        </Box>

        {/* Software used & category  */}
        <Box className={styles.softwareUsed}>
          <p>
            <span>
              <Image
                src="https://cdna.artstation.com/p/softwares/icons/000/000/044/default/Unreal-symbol.png?1622777656"
                alt="software"
                width={16}
                height={16}
              />
            </span>
            <span>Unreal Engine</span>
          </p>
          <p>
            <span>
              <Image
                src="https://cdna.artstation.com/p/softwares/icons/000/054/818/default/sa_appicon_noshadow_512.png?1627397412"
                alt="software"
                width={16}
                height={16}
              />
            </span>
            <span>Substance 3D Sampler</span>
          </p>

          <p>
            <span>
              <Image
                src="https://cdna.artstation.com/p/softwares/icons/000/054/818/default/sa_appicon_noshadow_512.png?1627397412"
                alt="software"
                width={16}
                height={16}
              />
            </span>
            <span>Substance 3D Sampler</span>
          </p>
        </Box>
      </Stack>

      {/* Comments Stack  */}
      <Stack className={styles.stackContainer}>
        <Box className={styles.commentCard}>
          <div>
            <Image
              src="https://cdna.artstation.com/p/users/avatars/001/100/708/medium/5ff01249fc50b3b8093b2b1fc7aef765.jpg?1703323297"
              alt="avatar"
              width={32}
              height={32}
              style={{ borderRadius: "50%" }}
            />
          </div>
          {/* name  */}
          <div>
            <p>SaeedSD</p>
            <span>Asset & 3D Environment Designer</span>
            <small>nice!!!</small>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </Box>
        <Box className={styles.commentCard}>
          <div>
            <Image
              src="https://cdnb.artstation.com/p/users/avatars/000/188/073/medium/523949a1070d53f8495f692359b1633b.jpg?1711129110"
              alt="avatar"
              width={32}
              height={32}
              style={{ borderRadius: "50%" }}
            />
          </div>
          {/* name  */}
          <div>
            <p>Maxim Asonov</p>
            <span>3D artist</span>
            <small>mind blowing!</small>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </Box>
        <Box className={styles.commentCard}>
          <div>
            <Image
              src="https://www.gravatar.com/avatar/bdd20a9884c8d98daa34f554be48f68d.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg"
              alt="avatar"
              width={32}
              height={32}
              style={{ borderRadius: "50%" }}
            />
          </div>
          {/* name  */}
          <div>
            <p>Job White</p>
            <span>3D Graphics Enthusiast, Registered Nurse</span>
            <small>Love, love the detail.</small>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </Box>

        {/* <Typography>Load More Comments <ArrowDropDownIcon /></Typography> */}

        <Box className={styles.commentInput}>
          <TextField label="Add a Comment" variant="outlined" multiline />
          <Button>
            <SendIcon />
          </Button>
        </Box>
      </Stack>

      {/* More By */}
      <Stack className={styles.stackContainer}>
        <p>
          More by <b> Andrew Averkin </b>
        </p>
        <Box className={styles.moreArtworks}>
          <div>
            <Image
              src="https://cdnb.artstation.com/p/assets/covers/images/040/651/191/smaller_square/andrew-averkin-andrew-averkin-boyhood-02.jpg?1629479993"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"
              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/010/156/018/smaller_square/andrew-averkin-halo-wars-thumbnail-02.jpg?1522866307"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdnb.artstation.com/p/assets/covers/images/042/196/309/smaller_square/andrew-averkin-andrew-averkin-cam-01.jpg?1633852812"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/007/872/360/smaller_square/andrew-averkin-mary-may.jpg?1509051017"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/039/885/856/smaller_square/andrew-averkin-andrew-averkin-whenwewerekids.jpg?1627242875"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/011/837/238/smaller_square/andrew-averkin-arena-of-valor.jpg?1531687329"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/011/107/338/smaller_square/andrew-averkin-destiny-logo-02.jpg?1527873380"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdnb.artstation.com/p/assets/covers/images/006/029/847/smaller_square/andrew-averkin-halo-2-temple-logo.jpg?1495538159"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <Image
              src="https://cdna.artstation.com/p/assets/covers/images/007/872/638/smaller_square/andrew-averkin-nick-ryan.jpg?1509052141"
              alt="avatar"
              width={106}
              height={106}
              layout="responsive"

              // style={{ borderRadius: "50%" }}
            />
          </div>
        </Box>
      </Stack>

      {/* Tags  */}
      <Stack className={styles.stackContainer}>
        <b>Tags</b>
        <Box className={styles.tags}>
          <p>#Digital 3D</p>
          <p>#Real-time</p>
          <p>#Games and Real-time 3D Environment Art</p>
          <p>#Gameplay & Level Design</p>
          <p>#Realism</p>
          <p>#Workshop</p>
          <p>#tool</p>
          <p>#unreal</p>
          <p>#prop</p>
          <p>#day time</p>
          <p>#lighting</p>
        </Box>
      </Stack>
    </Container>
  );
};

export default ArtworkInfo;
