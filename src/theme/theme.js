import { extendTheme } from 'native-base';

/*-----EatsTheme-----
  Constant styles used to theme app. colors, spacing, fonts and breakpoints.
*/ 

export const eatsTheme = extendTheme({
  white: '#FFF',
  cremWhite: '#EEE',
  black: "#000",
  lightGreen: '#dcfce7',
  semiLightGreen: '#bbf7d0',
  trueGreen: '#4ade80',
  darkGreen: '#14532d',
  trueBlue: '#0077e6',
  darkBlue: '#080938',
  teal: '#5eead4',
  darkTeal: '#115e59',
  primeGrey: 'coolGray.300',
  textGrey: "coolGray.800",
  errorRed: '#dc2626',
  trueRed: '#d44444',
  warnOrange: '#d97706',

  letSpace: {
      sm: "-0.025em",
      md: 0,
      lg: "0.025em",
      xl: "0.05em",
  },
  lineHi: {
      xs: "1.125em",
      sm: "1.25em",
      md: "1.375em",
      lg: "1.5em",
      xl: "1.75em",
      "2xl": "2em",
      "3xl": "3em",
  },
  weights: {
    light: 300,
    normal: 400,
    med: 500,
    bold: 600,
  },
  breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
  },
  bR: {
    sm: 4,
    md: 8,
    pill: 20,
  }
});

