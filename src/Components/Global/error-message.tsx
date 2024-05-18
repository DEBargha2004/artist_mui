import theme from '@/theme/theme'
import { Typography } from '@mui/material'

export default function ErrorMessage ({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <Typography sx={{ color: theme.palette.error.main, fontSize: '13px' }}>
      {children}
    </Typography>
  )
}
