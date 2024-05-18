import { Box, Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const Footer = () => {

  return (
    <Box component="footer" sx={{ p: 2, mt: "auto", backgroundColor: 'crimson' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        useFlexGap flexWrap="wrap"
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} CGMeetup
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About Us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Terms & Conditions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Privacy Policy
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
