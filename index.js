import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import { NativeBaseProvider } from 'native-base';
import { eatsTheme } from './src/theme/theme';

export default function Main() {
    return (
      <NativeBaseProvider theme={eatsTheme}>
        <App />
      </NativeBaseProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
