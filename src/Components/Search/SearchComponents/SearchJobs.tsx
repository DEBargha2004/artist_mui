import JobCards from "@/Components/Jobs/JobComponents/JobCards";
import { Container } from "@mui/material";
import styles from "@/styles/modules/Search.module.scss";

const SearchJobs = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.jobContainer}>
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
      <JobCards />
    </Container>
  );
};

export default SearchJobs;
