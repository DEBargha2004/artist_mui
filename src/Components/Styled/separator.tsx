import { Box, styled } from '@mui/material'

export const StyledSeparator = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.grey[800]
}))
