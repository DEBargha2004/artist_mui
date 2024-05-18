"use client";
import { Box, Container, Stack } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ProfileOptions = () => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "center",
        gap: "5rem",
      }}
      disableGutters
      maxWidth={false}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <GridViewIcon sx={{my: 'auto', backgroundColor: 'red'}} />
          Posts
        </Item>
        <Item>
          <BusinessCenterIcon sx={{my: 'auto', backgroundColor: 'red'}} />
          Jobs
        </Item>
        <Item>
          <PersonIcon sx={{my: 'auto', backgroundColor: 'red'}} />
          About
        </Item>
      </Stack>
      {/* <Box sx={{ }}>
        <GridViewIcon />
        Posts
      </Box>
      <Box sx={{ }}>
        <BusinessCenterIcon />
        Job
      </Box>
      <Box sx={{ }}>
        <PersonIcon />
        About
      </Box> */}
    </Container>
  );
};

export default ProfileOptions;
