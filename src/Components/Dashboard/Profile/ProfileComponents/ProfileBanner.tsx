import { Box } from "@mui/material";
import Image from "next/image";
// import styles from "@/styles/modules/Profile.module.scss";
import styles from "@/styles/modules/DashboardProfile.module.scss";

const ProfileBanner = () => {
  return (
    <Box className={styles.profileBanner}>
      <div className={styles.profileCoverArt}>
        <Image
          src="https://cdnb.artstation.com/p/users/covers/000/134/037/default/558a2bac8d36d538b892f063d7df4d0c.jpg"
          width={1914}
          height={375}
          style={{ objectFit: "cover" }}
          alt="images/profile"
          quality={100}
          priority={true}
          // layout="responsive"
          // fill={true}
        />
            <div className={styles.profileAvatar}>
        <Image
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid white",
            textAlign: "center",
          }}
          src="https://cdnb.artstation.com/p/assets/images/images/074/076/619/large/cat-beachcatsqwm2.jpg?1711145606"
          width={200}
          height={200}
          alt="images/profile"
          priority={true}
          layout="responsive"
        />
      </div>
      </div>

  
    </Box>
  );
};

export default ProfileBanner;
