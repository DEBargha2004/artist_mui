import ProfileBanner from './ProfileComponents/ProfileBanner'
import ProfileDetails from './ProfileComponents/ProfileDetails'
import { Container } from '@mui/material'
import styles from "@/styles/modules/DashboardProfile.module.scss";

const ProfileIndex = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.profileContainer}>
        <ProfileBanner />
        <ProfileDetails />
    </Container>
  )
}

export default ProfileIndex