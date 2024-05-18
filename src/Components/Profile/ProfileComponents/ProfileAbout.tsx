import { Container } from "@mui/material";
import styles from "@/styles/modules/Profile.module.scss";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";

const ProfileAbout = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.aboutContainer}
    >
      <div className={styles.aboutWrapper}>
        <h2>My Bio</h2>
        <hr />
        <p>
          Embarking on a journey of boundless creativity within the realm of
          digital art, I&apos;m Cat—a passionate artist dedicated to translating
          my vivid imagination into captivating visual experiences. Follow for
          free giveaways, including images and DALL-E prompts! Welcome to Cats
          Corner Graphics, where innovation meets imagination. Here, I curate
          the latest trends in digital art and design, inviting you to join me
          on this exciting exploration of the visual frontier. Every creation is
          a testament to my commitment to pushing the boundaries of artistic
          innovation.
        </p>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Job Preference</h2>
        <hr />
        <div className={styles.jobPreference}>
          <div>
            <h3>IT - Full Stack</h3>
            <p>Pune</p>
            <p>Full-Time</p>
            <p>USD 1500-2100 / Per month</p>
          </div>
          <div>
            <h3>HR - Coordinator</h3>
            <p>Pune</p>
            <p>Full-Time</p>
            <p>USD 1500-2100 / Per year</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Work Experience</h2>
        <hr />
        <div className={styles.jobPreference}>
          <div>
            <h3>Ubisoft</h3>
            <p>3D Artist</p>
            <p>Art Department</p>
            <p>Nov 2022 - Apr 2024</p>
          </div>
          <div>
            <h3>Epic Games</h3>
            <p>Animator</p>
            <p>Graphics Department</p>
            <p>Nov 2020 - Oct 2022</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Education</h2>
        <hr />
        <div className={styles.jobPreference}>
          <div>
            <h3>MIT</h3>
            <p>PHD</p>
            <p>Art Department</p>
            <p>Nov 2016 - Oct 2020</p>
          </div>
          <div>
            <h3>Great Lakes</h3>
            <p>Graduation/Diploma</p>
            <p>Graphics Department</p>
            <p>Nov 2014 - Oct 2016</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Skills</h2>
        <hr />
        <div className={styles.aboutSkills}>
          <p>2D Sequence Lead</p>
          <p>2D Supervisor</p>
          <p>Compositor</p>
          <p>Lead Compositor</p>
          <p>Matte Painter</p>
          <p>Motion Graphic Artist</p>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Resume</h2>
        <hr />
        <div className={styles.aboutResume}>
          <Image
            src="/assets/icons/pdf.png"
            alt="pdf-icon"
            width={42}
            height={42}
          />
          <p>View Resume</p>
          <p>Download Resume</p>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <h2>Portfolio Links</h2>
        <hr />
        <div className={styles.aboutPortfolio}>
          <p>
            Twitter
            <LaunchIcon />
          </p>
          <p>
            Youtube
            <LaunchIcon />
          </p>
          <p>
            Instagram
            <LaunchIcon />
          </p>
          <p>
            Website
            <LaunchIcon />
          </p>
        </div>
      </div>

      <div className={styles.aboutWrapper}>
        <h2>Recruiters</h2>
        <hr />
        <div className={styles.aboutRecruiters}>
          <div className={styles.recruiterCard}>
            <div>
              <Image
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid white",
                  textAlign: "center",
                }}
                // layout="responsive"
                src="https://cdna.artstation.com/p/users/avatars/001/217/174/large/0bc7092a2f19a53c3754630789f1a979.jpg?1555033568"
                alt="avatar"
                width={56}
                height={56}
              />
            </div>
            <div>
              <p>Patrick Faulwetter</p>
              <span>Freelance Concept Designer</span>
            </div>
          </div>
          <div className={styles.recruiterCard}>
            <div>
              <Image
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid white",
                  textAlign: "center",
                }}
                // layout="responsive"
                src="https://cdna.artstation.com/p/users/avatars/001/217/174/large/0bc7092a2f19a53c3754630789f1a979.jpg?1555033568"
                alt="avatar"
                width={56}
                height={56}
              />
            </div>
            <div>
              <p>Patrick Faulwetter</p>
              <span>Freelance Concept Designer</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileAbout;
