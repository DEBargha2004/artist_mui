import { Container } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/modules/Profile.module.scss";


const ProfileJobs = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.jobsContainer}>
      {/* Card 1  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdnb.artstation.com/p/jobs/images/000/025/495/thumb/seedworld-logo.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>Anime / Manga Style Artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>

      {/* Card 2  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdnb.artstation.com/p/jobs/images/000/025/491/thumb/pic1.jobui.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>Senior Technical Artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>

      {/* Card 3  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdna.artstation.com/p/jobs/images/000/025/844/thumb/2.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>VFX artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>

      {/* Card 4  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdna.artstation.com/p/jobs/images/000/025/052/thumb/epicgames-white-final.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>Environment Concept Artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>

      {/* Card 5  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdna.artstation.com/p/jobs/images/000/025/838/thumb/glipicon.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>Character Concept Artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>

      {/* Card 6  */}
      <div className={styles.jobCard}>
        <div>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "25%",
            //   border: "3px solid white",
              // backgroundColor: "lavender",
              // backgroundColor: "burlywood",
              // position: "relative",
              // bottom: "5rem",ss
              textAlign: "center",
            }}
            src="https://cdnb.artstation.com/p/jobs/images/000/025/837/thumb/gadget-bot-logo2020-orange.jpg"
            alt="artist"
            layout="responsive"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.jobDetails}>
          <h2>Weapon Concept Artist</h2>
          <p>Pune, MH. Graduation/Diploma. 1-3 Years</p>
          <p>Rs 3-5 LPA</p>
          <span>Rejected/Pending</span>
        </div>
      </div>
    </Container>
  );
};

export default ProfileJobs;
