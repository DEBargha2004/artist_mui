import { Container } from '@mui/material';
import ArtistRecommendation from './ArtistRecommendation';
import ArtistPreferences from './ArtistPreferences';
import ArtistFeedCards from './ArtistFeedCards';
import styles from "@/styles/modules/Feed.module.scss";

const ArtistFeed = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.mainFeedContainer}>
        <ArtistRecommendation />
        <ArtistPreferences />
        <ArtistFeedCards />
    </Container>
  )
}

export default ArtistFeed