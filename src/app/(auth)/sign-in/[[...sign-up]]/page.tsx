// 'use client'

import { CgmLogo } from '@/Components/Global'
import { FormItemConatiner } from '@/Components/Global'
import {
  StyledButton,
  StyledSeparator,
  StyledTextField
} from '@/Components/Styled'
import theme from '@/theme/theme'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function SignInPage () {
  return (
    <>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography variant='body2'>
          Don't have an account?{' '}
          <Link href={'/sign-up'} style={{ color: theme.palette.primary.main }}>
            Sign Up
          </Link>
        </Typography>
      </Box> */}
      {/* <Box>
        <CgmLogo />
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '15px'
        }}
      >
        <Typography variant='h5'>Sign Up</Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'start',
            gap: '15px'
          }}
        >
          <FormItemConatiner>
            <Typography variant='body2'>Your Email</Typography>
            <StyledTextField
              sx={{ width: '100%' }}
              placeholder='Email address'
            />
          </FormItemConatiner>
          <FormItemConatiner>
            <Typography variant='body2'>Password</Typography>
            <StyledTextField
              sx={{ width: '100%' }}
              placeholder='Password'
              type='password'
            />
          </FormItemConatiner>
          <StyledButton
            sx={{
              backgroundColor: theme.palette.success.main,
              ':hover': {
                backgroundColor: theme.palette.success.dark
              }
            }}
          >
            Sign Up
          </StyledButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              variant='body2'
              sx={{ color: theme.palette.primary.main }}
            >
              <Link href={'/forgot-password'}>Forgot Password?</Link>
            </Typography>
            <Typography variant='body2'>
              <Link
                href={'/sign-up'}
                style={{ color: theme.palette.primary.main }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', marginY: '10px' }}>
            <StyledSeparator />
            <Typography
              sx={{
                position: 'absolute',
                top: '0',
                left: '50%',
                translate: '0 -50%',
                paddingX: '5px',
                backgroundColor: theme.palette.grey[900]
              }}
            >
              Or
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            <StyledButton
              sx={{
                width: '50%',
                backgroundColor: theme.palette.grey[200],
                color: theme.palette.grey[800],
                ':hover': {
                  backgroundColor: theme.palette.grey[400]
                }
              }}
            >
              Sign In with Google
            </StyledButton>
            <StyledButton sx={{ width: '50%' }}>
              Sign In with Facebook
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}
