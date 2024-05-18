import { Box, Stack } from "@mui/material";
import styles from "@/styles/modules/JobPublic.module.scss";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const JobCompanyCard = () => {
  return (
    <Box className={styles.featuredContainer}>
      <h2>Ubisoft Toronto</h2>
      <Stack className={styles.featuredList}>
        <Box className={styles.featuredCard}>
          {/* Image  */}
          <div className={styles.featuredCardImage}>
            <Image
              src="https://cdnb.artstation.com/p/jobs/images/000/025/461/thumb/aquent-a.jpg"
              alt="company"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.featuredDetails}>
            <h3>3D Character Artist, Avatars</h3>
            <small id={styles.companyTitle}>Aquent</small>
            <p>
              <span>
                <FmdGoodIcon />
              </span>
              <span>Los Angeles, USA</span>
            </p>
          </div>
        </Box>
        <Box className={styles.featuredCard}>
          {/* Image  */}
          <div className={styles.featuredCardImage}>
            <Image
              src="https://cdnb.artstation.com/p/jobs/images/000/025/461/thumb/aquent-a.jpg"
              alt="company"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.featuredDetails}>
            <h3>3D Character Artist, Avatars</h3>
            <small id={styles.companyTitle}>Aquent</small>
            <p>
              <span>
                <FmdGoodIcon />
              </span>
              <span>Los Angeles, USA</span>
            </p>
          </div>
        </Box>
        <Box className={styles.featuredCard}>
          {/* Image  */}
          <div className={styles.featuredCardImage}>
            <Image
              src="https://cdnb.artstation.com/p/jobs/images/000/025/461/thumb/aquent-a.jpg"
              alt="company"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={styles.featuredDetails}>
            <h3>3D Character Artist, Avatars</h3>
            <small id={styles.companyTitle}>Aquent</small>
            <p>
              <span>
                <FmdGoodIcon />
              </span>
              <span>Los Angeles, USA</span>
            </p>
          </div>
        </Box>
      </Stack>
    </Box>
  )
}

export default JobCompanyCard