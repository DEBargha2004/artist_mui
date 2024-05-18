import styles from "@/styles/modules/JobPage.module.scss";
import { Box, Container, Stack } from "@mui/material";
import JobCards from "@/Components/Jobs/JobComponents/JobCards";

const JobDetails = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.detailsContainer}
    >
      <JobCards />
      <Box className={styles.jobDescription}>
        <h2 id="sectionTitle">Job Description -</h2>
        <p>
          Epic is looking for a talented mid to Senior Concept Artist to help us
          continue to shape the future of Fortnite. As a Concept Artist on
          Fortnite, you will work with the development teams to create memorable
          environments that exude personality and style. You will use your
          artistic expertise in color, composition, shape, and visual design to
          help push our iconic visual style. Your craft expertise in environment
          design will provide the inspiration which will continue to push the
          boundaries of what Fortnite means to our players.
        </p>
      </Box>
      <hr />
      <Box className={styles.jobDescription}>
        <h2 id="sectionTitle">Required Skills -</h2>
        <Stack className={styles.jobSkills}>
          <p>2D Programmer</p>
          <p>2D Sequence Lead</p>
          <p>2D Supervisor</p>
          <p>Compositor</p>
          <p>Lead Compositor</p>
        </Stack>
      </Box>
      <hr />
      <Box className={styles.jobDescription}>
        <h2 id="sectionTitle">Job Summary -</h2>
        <Stack className={styles.summaryTags}>
          <div>
            <p>Job Category</p>
            <span>IT and Software</span>
          </div>
          <div>
            <p>Experience</p>
            <span>IT and Software</span>
          </div>
          <div>
            <p>Educational</p>
            <span>IT and Software</span>
          </div>
          <div>
            <p>Website</p>
            <span>IT and Software</span>
          </div>
        </Stack>
      </Box>
      <hr />
      <Box>
      <Stack className={styles.jobDescription}>
          <h2>About</h2>
          <p>
          Epic Games spans across 19 countries with 55 studios and 4,500+ employees globally. For over 25 years, we’ve been making award-winning games and engine technology that empowers others to make visually stunning games and 3D content that bring environments to life like never before. Epic’s award-winning Unreal Engine technology not only provides game developers the ability to build high-fidelity, interactive experiences for PC, console, mobile, and VR, it is also a tool being embraced by content creators across a variety of industries such as media and entertainment, automotive, and architectural design. As we continue to build our Engine technology and develop remarkable games, we strive to build teams of world-class talent.
          </p>
        </Stack>
      </Box>
    </Container>
  );
};

export default JobDetails;
