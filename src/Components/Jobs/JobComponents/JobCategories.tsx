import { Box, Stack } from "@mui/material";
import styles from "@/styles/modules/JobPublic.module.scss";

const JobCategories = () => {
  return (
    <Box className={styles.categoryContainer}>
      <h2>Categories</h2>
      <Stack className={styles.categoryList}>
          <p>2D Programmer</p>
          <p>2D Sequence Lead</p>
          <p>2D Supervisor</p>
          <p>Compositor</p>
          <p>Lead Compositor</p>
          <p>Matte Painter</p>
          <p>Motion Graphic Artist</p>
          <p>Paint Artist</p>
          <p>Roto Artist</p>
          <p>Texturing</p>
      </Stack>
    </Box>
  );
};

export default JobCategories;
