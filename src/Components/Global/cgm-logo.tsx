import { Box, Typography } from '@mui/material'

export default function CgmLogo () {
  return (
    <Box sx={{ display: 'flex', justifyItems: 'start', alignItems: 'center' }}>
      <Box
        sx={{
          backgroundColor: '#FF0000',
          paddingX: '3px',
          borderRadius: '2px'
        }}
      >
        <Typography>CG</Typography>
      </Box>
      <Typography>Meetup</Typography>
    </Box>
  )
}
