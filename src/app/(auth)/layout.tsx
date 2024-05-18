'use client'

import theme from '@/theme/theme'
import { Box } from '@mui/material'

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'stretch',
          gap: '24px',
          padding: '30px',
          width: '50%',
          backgroundColor: theme.palette.grey[900],
          borderRadius: '5px'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
