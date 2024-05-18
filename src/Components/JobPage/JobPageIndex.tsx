import { Box, Container } from '@mui/material'
import React from 'react'
import JobCategories from '../Jobs/JobComponents/JobCategories'
import JobCompanyCard from './JobPageComponents/JobCompanyCard'
import styles from "@/styles/modules/JobPage.module.scss";
import JobDetails from './JobPageComponents/JobDetails';

const JobPageIndex = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.jobWrapper}>
        <Box>
            <JobDetails />
        </Box>
        <Box className={styles.sideContainer}>
            <JobCompanyCard />
            <JobCategories />
        </Box>
    </Container>
  )
}

export default JobPageIndex