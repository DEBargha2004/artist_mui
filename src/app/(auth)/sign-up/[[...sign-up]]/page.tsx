'use client'

import { CgmLogo, ErrorMessage } from '@/Components/Global'
import { FormItemConatiner } from '@/Components/Global/'
import {
  StyledButton,
  StyledSeparator,
  StyledTextField
} from '@/Components/Styled'
import { StyledSelect } from '@/Components/Styled/select'
import { SignUpSchemaType, signUpSchema } from '@/schema/sign-up'
import theme from '@/theme/theme'
import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  Typography
} from '@mui/material'
import { register } from 'module'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const formConditions = [
  '- Atleast 6 characters',
  '- Contains Numbers',
  '- Contains special Characters',
  '- Contains uppercase and lowercase characters'
]

export default function SignUpPage () {
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  })

  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography variant='body2'>
          Already have an account?{' '}
          <Link href={'/sign-in'} style={{ color: theme.palette.primary.main }}>
            Sign In
          </Link>
        </Typography>
      </Box>
      <Box>
        <CgmLogo />
      </Box>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'start',
          gap: '15px'
        }}
        onSubmit={form.handleSubmit(data => console.log(data))}
      >
        <Typography variant='h5'>Sign Up</Typography>
        <Typography variant='body1'>
          Join the leading showcase platform for games, films, media &
          entertainment films
        </Typography>
        <FormItemConatiner>
          <Typography variant='body2'>First Name</Typography>
          <StyledTextField
            sx={{ width: '100%' }}
            placeholder='Eg John'
            {...form.register('first_name')}
          />
          {
            <ErrorMessage>
              {form.formState.errors.first_name?.message}
            </ErrorMessage>
          }
        </FormItemConatiner>
        <FormItemConatiner>
          <Typography variant='body2'>Last Name</Typography>
          <StyledTextField
            sx={{ width: '100%' }}
            placeholder='Eg Doe'
            {...form.register('last_name')}
          />
          {
            <ErrorMessage>
              {form.formState.errors.last_name?.message}
            </ErrorMessage>
          }
        </FormItemConatiner>
        <FormItemConatiner>
          <Typography variant='body2'>User Id</Typography>
          <StyledTextField
            sx={{ width: '100%' }}
            placeholder='Eg JohnDoe420'
            {...form.register('user_id')}
          />
          {
            <ErrorMessage>
              {form.formState.errors.user_id?.message}
            </ErrorMessage>
          }
        </FormItemConatiner>
        <FormItemConatiner>
          <Typography variant='body2'>Email Address</Typography>
          <StyledTextField
            sx={{ width: '100%' }}
            placeholder='Eg 0rWp3@example.com'
            {...form.register('email')}
          />
          {<ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>}
        </FormItemConatiner>
        <FormItemConatiner>
          <Typography variant='body2'>Select Profile Type</Typography>
          <StyledSelect
            placeholder='Eg Recruiter'
            {...form.register('profile_type')}
          >
            <MenuItem value={'10'}>Ten</MenuItem>
            <MenuItem value={'20'}>Twenty</MenuItem>
            <MenuItem value={'30'}>Thirty</MenuItem>
          </StyledSelect>
          {
            <ErrorMessage>
              {form.formState.errors.profile_type?.message}
            </ErrorMessage>
          }
        </FormItemConatiner>
        <FormItemConatiner>
          <Typography variant='body2'>Password</Typography>
          <StyledTextField
            sx={{ width: '100%' }}
            type='password'
            placeholder='Eg ********'
            {...form.register('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Visibility />
                </InputAdornment>
              )
            }}
          />
          {
            <ErrorMessage>
              {form.formState.errors.password?.message}
            </ErrorMessage>
          }
        </FormItemConatiner>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)'
          }}
        >
          {formConditions.map((condition, index) => (
            <Typography
              // variant='body2'
              sx={{
                color: theme.palette.grey[500],
                fontSize: '13px',
                whiteSpace: 'nowrap'
              }}
            >
              {condition}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <Checkbox
            sx={{ padding: '0px' }}
            {...form.register('accept_terms')}
          />
          <Typography sx={{ fontSize: '12px', display: 'flex', gap: '3px' }}>
            By creating an account, you agree to our{' '}
            <span
              style={{ color: theme.palette.primary.main, fontSize: '12px' }}
            >
              Terms of Service
            </span>{' '}
            and{' '}
            <span
              style={{ color: theme.palette.primary.main, fontSize: '12px' }}
            >
              Privacy Policy
            </span>{' '}
            .
          </Typography>
        </Box>
        <StyledButton
          type='submit'
          sx={{
            backgroundColor: theme.palette.success.main,
            ':hover': {
              backgroundColor: theme.palette.success.dark
            }
          }}
        >
          Sign Up
        </StyledButton>
      </form>
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
          Sign Up with Google
        </StyledButton>
        <StyledButton sx={{ width: '50%' }}>Sign Up with Facebook</StyledButton>
      </Box>
    </>
  )
}
