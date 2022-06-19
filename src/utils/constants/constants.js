import { Dimensions } from 'react-native';

// windowDimentions
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const locations = ['Bridgewater', 'Dartmouth', 'Fairhaven', 'Raynham', 'Weymouth'];

export const customAppearance = {
    font: {
      family:
        Platform.OS === 'android' ? 'avenirnextregular' : 'AvenirNext-Regular',
    },
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
       borderRadius: 20,
       background: '#000',
      },
    },
    colors: {
      primary: '#fcfdff',
      background: '#ffffff',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      placeholderText: '#73757b',
    },
   };

  const config = {
    screens: {
      Success: '/success',
      Register: '/cancel'
    }
   };
  export const linking = {
    prefixes: ['https://planiteats-87148.web.app'],
    config,
  };