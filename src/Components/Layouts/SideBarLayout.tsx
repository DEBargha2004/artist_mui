'use client'

import { Box, Container, Typography } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { useState } from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import { useRouter } from 'next/navigation'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  //   display: "flex",
  // flexDirection: 'column',
  // flex: '1',
  width: drawerWidth,
  opacity: 0.5,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      position: 'static',
      ...openedMixin(theme)
    }
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      position: 'static',
      ...closedMixin(theme)
    }
  })
}))

const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        // backgroundColor: "crimson",
        position: 'relative'
      }}
      maxWidth={false}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          height: '100%',
          zIndex: '2'
        }}
      >
        <Drawer variant='permanent' open={open} sx={{ overflow: 'hidden' }}>
          <DrawerHeader>
            {open ? (
              <>
                {/* <Typography
                  sx={{ backgroundColor: "blue", textAlign: "start" }}
                >
                    <SpaceDashboardIcon sx={{marginY: "auto", backgroundColor: "violet"}} />
                  Dashboard
                </Typography> */}
                <ChevronLeftIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setOpen(false)}
                />
              </>
            ) : (
              <ChevronRightIcon
                sx={{
                  cursor: 'pointer',
                  margin: 'auto'
                }}
                onClick={() => setOpen(true)}
              />
            )}
            {/* <IconButton
            disableRipple
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? 
              <>
              <Typography>
                Dashboard
              </Typography>
              <ChevronLeftIcon /> 
              </>
              : <ChevronRightIcon />}
            </IconButton> */}
          </DrawerHeader>
          <Divider />
          <List>
            {['Gallery', 'Jobs', 'Chat', 'Company'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                  onClick={() => router.push('/dashboard/gallery')}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              'Bookmarks',
              'Notifications',
              'My Profile',
              'Profile About',
              'Settings'
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                  onClick={() => router.push('/dashboard/profile')}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            {[
              'Products',
              'Tutorials',
              'Challenges',
              'My Sales',
              'My Purchases'
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider />
          <List>
            {["Contact Us", "FAQ's"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, ml: '64px' }}>{children}</Box>
    </Container>
  )
}

export default SideBarLayout
