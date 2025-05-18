// Root Layout - share UI between multiple routes.
// https://docs.expo.dev/develop/file-based-routing/#root-layout
//
// NOTE: This is the initial client file (entry point).
// https://docs.expo.dev/router/installation/#setup-entry-point
//

import './global.css'; // global styles (incl. Tailwind CSS definitions).

import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)

export default () => {
  return (
    <>
      <StatusBar style='auto' />
      <Text>Food Scanner</Text>
    </>
  );
};
