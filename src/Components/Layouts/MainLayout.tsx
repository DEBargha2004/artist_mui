import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

// Add your custom styles for header and footer here (optional)

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
        // backgroundColor: 'burlywood'
      }}
    >
      {/* Header  */}
      <Header isAuthenticated={true} />
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ marginRight: 'auto' }}>
            <Link href="/">Artist</Link>
          </Typography>
        </Toolbar>
      </AppBar> */}

      {/* Main Body  */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          // backgroundColor: '#181A20',
          width: '80%'
        }}
        component='main'
        disableGutters
        maxWidth={false}
      >
        {children}
      </Container>

      {/* Footer  */}
      {/* <Footer /> */}
    </Box>
  )
}

export default MainLayout
