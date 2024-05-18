import styles from "@/styles/modules/JobPublic.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import FlightIcon from "@mui/icons-material/Flight";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const dynamicStyles = {
  bck: {
    backgroundColor: '', // Or any other dynamic styles
  },
  info: {
    overflowY: 'auto', // Or any other dynamic styles
  },
  // Add more dynamic styles as needed
};

const JobCards = () => {
  return (
    <>
      <Box className={styles.jobCard} style={dynamicStyles.bck}>
        {/* Job Image  */}
        <div className={styles.jobCardImage}>
          <Image
            src="https://cdna.artstation.com/p/jobs/images/000/022/256/thumb/ubisoft-toronto-logo-400x400.jpg"
            width={150}
            height={150}
            layout="responsive"
            alt="job"
          />
        </div>

        {/* Job Info  */}
        <div className={styles.jobDetails}>
          <h2>Team Lead Animator [FAR CRY Project]</h2>
          <small>Ubisoft Toronto</small>
          <span>3 - 5 Years / USD $50 - 59</span>
          <div className={styles.jobCardTags}>
            <p style={{backgroundColor: "#26bbff33", color: "#26BBFF"}}>
              <span>
                <LanguageIcon />
              </span>
              <span>Remote</span>
            </p>
            <p>
              <span>
                <WorkIcon />
              </span>
              <span>Permanent</span>
            </p>
            <p>
              <span>
                <FlightIcon />
              </span>
              <span>Relocation Assistance</span>
            </p>
            <p>
              <span>
                <FmdGoodIcon />
              </span>
              <span>Montreal, Canada</span>
            </p>
          </div>
        </div>

        {/* Job Bookmark & Time  */}
        <div className={styles.jobBookmark}>
          <p>
            <BookmarkIcon />
          </p>
          <p>Posted 15 April</p>
        </div>
      </Box>
    </>
  );
};

export default JobCards;
