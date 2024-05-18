import { Box, Container } from '@mui/material'
import styles from "@/styles/modules/JobPublic.module.scss";
import JobFeaturedCard from './JobFeaturedCard';
import JobCategories from './JobCategories';
import JobCards from './JobCards';

const JobList = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.jobWrapper}>
        <Box className={styles.listContainer}>
            <JobCards />
            <JobCards />
            <JobCards />
            <JobCards />
            <JobCards />

        </Box>
        <Box className={styles.sideContainer}>
            <JobFeaturedCard />
            <JobCategories />
        </Box>
    </Container>
  )
}

export default JobList