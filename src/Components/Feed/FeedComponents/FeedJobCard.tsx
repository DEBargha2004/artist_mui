import styles from "@/styles/modules/Feed.module.scss";
import { Container } from "@mui/material";
import Image from "next/image";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const FeedJobCard = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.feedJobContainer}
    >
      <div className={styles.feedJobHeader}>
        <div>
          <Image
            src="https://cdnb.artstation.com/p/jobs/images/000/022/977/thumb/profile-720x720-1.jpg"
            width={72}
            height={72}
            // layout="responsive"
            alt="job"
          />
        </div>
        <div>
          <h3>Senior 2D Concept Game Artist</h3>
          <small>Sky Mavis Pte Ltd</small>
          <small>Luna Morphine - HR</small>
        </div>
        <div>
          <MoreVertRoundedIcon />
        </div>
      </div>

      <hr />

      <div className={styles.feedJobDetails}>
        <div>
            <p>IT: FullStack</p>
            <p>Pune, Maharashtra</p>
            <span>USD 5k-10k</span>
            <div>
                <p>1-3 Years</p>
                <p>Graduation/Diploma</p>
            </div>
        </div>
        {/* <div> */}
          <BookmarkBorderOutlinedIcon />
        {/* </div> */}
      </div>
    </Container>
  );
};

export default FeedJobCard;
