import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ':hover': {
    backgroundColor: theme.palette.primary.dark
  },
  textTransform: 'none',
  color: 'white',
  borderRadius: '9999999px'
}))
