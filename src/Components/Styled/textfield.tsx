import { TextField, styled } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '14px',
    color: theme.palette.text.secondary,
    height: '13px',
    backgroundColor: theme.palette.background.default
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.grey
    }
  }
}))
