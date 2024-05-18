import { Select, styled } from '@mui/material'

export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.default
  },
  '& .MuiInputBase-input': {
    padding: '13px'
  }
}))
