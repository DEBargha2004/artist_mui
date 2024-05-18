'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, alpha, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import Link from 'next/link'

// ["Profile", "Account", "Dashboard", "Logout"]

const settings: (
  | { id: string; label: string; path: string; type: 'link' }
  | { id: string; label: string; type: 'button' }
)[] = [
  {
    id: 'profile',
    label: 'Profile',
    path: '/profile',
    type: 'link'
  },
  {
    id: 'account',
    label: 'Account',
    path: '/account',
    type: 'link'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    type: 'link'
  },
  {
    id: 'logout',
    label: 'Logout',
    type: 'button'
  },
  {
    id: 'sign-in',
    label: 'Sign In',
    path: '/sign-in',
    type: 'link'
  }
]
const pages = [
  {
    name: 'Gallery',
    path: '/gallery'
  },
  {
    name: 'Jobs',
    path: '/jobs'
  },
  {
    name: 'Artists',
    path: '/artists'
  },
  {
    name: 'Company',
    path: '/company'
  }
]

interface ResponsiveAppBarProps {
  isAuthenticated: boolean
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
  isAuthenticated
}) => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3)
      //   width: "auto",
    }
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`
      // transition: theme.transitions.create("width"),
      // width: "100%",
      // [theme.breakpoints.up("md")]: {
      //   width: "20ch",
      // },
    }
  }))

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth={false}>
        {/* Main Nav Bar  */}
        <Toolbar disableGutters>
          {/* <Button onClick={() => router.push('/')}> */}

          {/* Logo Tablet<  */}
          {/* <Box
            onClick={() => router.push("/")}
            sx={{ display: { xs: "none", md: "flex" } }}
          > */}
          {/* <Image
              src={"/assets/icons/logo_white.svg"}
              alt="logo"
              width={36}
              height={36}
            /> */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            // href="/"
            onClick={() => router.push('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Image
              src={'/assets/icons/logo_white.svg'}
              alt='logo'
              width={36}
              height={36}
            />
            rtist
          </Typography>
          {/* </Box> */}

          {/* </Button> */}

          {/* Hamburger Icon with Sub Menu for Mobile  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* Logo for Mobile  */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Image
              src={'/assets/icons/logo_white.svg'}
              alt='logo'
              width={36}
              height={36}
            />
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              //   letterSpacing: ".3rem",
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            rtist
          </Typography>

          {/* Public Pages for tablet<  */}

          <Box sx={{ display: { xs: 'none', md: 'flex', gap: 8 } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => router.push(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Search Bar for tablet<  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginInline: '5rem'
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          {isAuthenticated ? (
            <>
              {/* Profile with Options  */}
              {/* <Box sx={{backgroundColor: 'red'}}> */}
              <Button>
                <NotificationsRoundedIcon
                  sx={{ position: 'relative', color: '#FFFFFF' }}
                />
                <sup
                  style={{
                    position: 'absolute',
                    zIndex: '10',
                    top: 0,
                    right: 12,
                    // marginLeft: "-10px",
                    backgroundColor: 'crimson',
                    paddingInline: '0.3rem',
                    borderRadius: '25%',
                    color: '#FFFFFF'
                  }}
                >
                  3
                </sup>
              </Button>
              <Button>
                <ChatRoundedIcon
                  sx={{ position: 'relative', color: '#FFFFFF' }}
                />
                <sup
                  style={{
                    position: 'absolute',
                    zIndex: '10',
                    top: 0,
                    right: 12,
                    // marginLeft: "-10px",
                    backgroundColor: 'crimson',
                    paddingInline: '0.3rem',
                    borderRadius: '25%',
                    color: '#FFFFFF'
                  }}
                >
                  5
                </sup>
              </Button>
              {/* </Box> */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>
                      <Image
                        src={'/assets/images/profile.png'}
                        alt='profile'
                        fill
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(setting =>
                    setting.type === 'link' ? (
                      <Link href={setting.path} className=''>
                        <MenuItem
                          key={setting.id}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign='center'>
                            {setting.label}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ) : (
                      <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                        <Typography textAlign='center'>
                          {setting.label}
                        </Typography>
                      </MenuItem>
                    )
                  )}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              {/* Sign In & Sign Up Buttons */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant='contained'
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    backgroundColor: '#0195F7'
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant='contained'
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    backgroundColor: '#0195F7'
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
