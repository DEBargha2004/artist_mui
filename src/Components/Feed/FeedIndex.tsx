import FeedLeft from "./FeedComponents/FeedLeft";
import FeedRight from "./FeedComponents/FeedRight";
import ArtistFeed from "./FeedComponents/ArtistFeed";
import { Container } from "@mui/material";
import styles from "@/styles/modules/Feed.module.scss";

const FeedIndex = () => {
  return (
    <Container component="section" maxWidth={false} disableGutters className={styles.feedContainer}>
      <FeedLeft />
      <ArtistFeed />
      <FeedRight />
    </Container>
  );
};

export default FeedIndex;
