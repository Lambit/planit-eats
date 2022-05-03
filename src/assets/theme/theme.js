import React from 'react'
import { extendTheme } from 'native-base';

export default function eatsheme() {
    const theme = extendTheme({
        colors: {
          primary: {
            10: '#dcfce7',
            20: '#bbf7d0',
            30: '#4ade80',
            40: '#22c55e',
            50: '#059669',
            60: '#16a34a',
            70: '#15803d',
            80: '#166534',
            90: '#14532d',
          },
          secondary: {
              10: '#5eead4',
              20: '#2dd4bf',
              30: '#14b8a6',
              40: '#0d9488',
              50: '#115e59',
          },
          err: {
              10: '#dc2626'
          },
          warn: {
            10: '#d97706',
          },
        },
        typography: {
            letterSpacings: {
                sm: "-0.025em",
                md: 0,
                lg: "0.025em",
                xl: "0.05em",
            },
            lineHeights: {
                xs: "1.125em",
                sm: "1.25em",
                md: "1.375em",
                lg: "1.5em",
                xl: "1.75em",
                "2xl": "2em",
                "3xl": "3em",
            },
            fontWeights: {
              light: 300,
              normal: 400,
              medium: 500,
              bold: 700,
            },
        },
        breakpoints: {
            base: 0,
            sm: 480,
            md: 768,
            lg: 992,
            xl: 1280,
        },
      }
    );
  return (
      theme
  )
}