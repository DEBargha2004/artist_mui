'use client'

import theme from '@/theme/theme'
import landingPage from '../../public/assets/images/landing-page.png'
// import Image from "next/image";
// import styles from "./page.module.css";

import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import {
  StyledButton,
  StyledTextField,
  StyledSeparator
} from '@/Components/Styled'

export default function Home () {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: '40px'
      }}
    >
      <Box sx={{ width: '50%' }}>
        <Box
          sx={{
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            gap: '30px',
            marginTop: '40px'
          }}
        >
          <Typography
            variant='h4'
            sx={{ fontWeight: 500, textAlign: 'center' }}
          >
            Welcome to the Professional Artist’s Community
          </Typography>
          <Box
            sx={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: '24px',
              padding: '24px',
              border: '1px solid #1C1C1C'
            }}
          >
            <StyledTextField
              variant='outlined'
              sx={{ width: '100%' }}
              placeholder='Email address or Phone Number'
              type='email'
            />
            <StyledTextField
              variant='outlined'
              sx={{ width: '100%' }}
              placeholder='Password'
            />
            <StyledButton variant='contained'>Sign In</StyledButton>
            <Box
              sx={{
                width: '100%',
                textAlign: 'center',
                color: theme.palette.primary.dark,
                fontSize: '14px'
              }}
            >
              <Link href={'/forgot-password'}>Forgotten Password</Link>
            </Box>
            <StyledSeparator sx={{ width: '100%', height: '1px' }} />
            <StyledButton
              sx={{
                width: '100%',
                backgroundColor: theme.palette.success.main,
                ':hover': {
                  backgroundColor: theme.palette.success.main
                }
              }}
            >
              Create New Account
            </StyledButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '50%' }}>
        <Image
          src={landingPage}
          alt='landing-page-image'
          height={540}
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </Box>
    </Box>
  )
}
