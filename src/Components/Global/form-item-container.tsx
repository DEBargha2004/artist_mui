import { Box } from '@mui/material'

export default function FormItemConatiner ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {children}
    </Box>
  )
}
