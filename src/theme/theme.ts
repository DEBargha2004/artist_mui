'use client'
import { Open_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const sans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0195F7',
      light: '#00B7FF'
    },
    success: {
      main: '#0F9D58',
      light: '#009665'
    }
  },
  typography: {
    fontFamily: sans.style.fontFamily
  },
  //   breakpoints: {
  //     values: {
  //       mobile: 0,
  //       tablet: 640,
  //       laptop: 1024,
  //       desktop: 1200,
  //     },
  //   },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa'
          })
        })
      }
    }
  }
})

export default theme
