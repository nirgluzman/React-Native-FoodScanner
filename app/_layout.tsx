/**
 * Root Layout - Shared UI between multiple routes
 *
 * This is the initial client file (entry point) for the Expo Router app.
 * It handles font loading, splash screen management, and sets up the app's base UI.
 *
 * @see https://docs.expo.dev/develop/file-based-routing/#root-layout
 * @see https://docs.expo.dev/router/installation/#setup-entry-point
 */

import { useEffect } from 'react';

import {
  SplashScreen, // Manages the native splash screen.
  Stack, // Stack navigator for managing screens in the app.
} from 'expo-router';
import { useFonts } from 'expo-font'; // Handles font loading.

// UI and styling
import * as SystemUI from 'expo-system-ui'; // Interacts with system UI elements.
import { LinearGradient } from 'expo-linear-gradient'; // Creates gradient backgrounds.

// Styles and theme
import './global.css'; // Global styles including Tailwind CSS definitions.
import colors from '../constants/colors'; // App color palette.

// gradient colors definition.
const gradientColors = [colors.primary[400], colors.primary[600]] as const; // background gradient colors.
const fallbackBackgroundColor = colors.primary.DEFAULT; // fallback color for SystemUI that blends with our gradient.

// Configure system UI elements for a seamless experience
SystemUI.setBackgroundColorAsync(fallbackBackgroundColor);

// prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default () => {
  // load the font files asynchronously, https://docs.expo.dev/develop/user-interface/fonts/
  const [fontsLoaded, error] = useFonts({
    // Load custom fonts from the assets/fonts directory.
    'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('../assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('../assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('../assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-MediumItalic': require('../assets/fonts/Nunito-MediumItalic.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('../assets/fonts/Nunito-SemiBoldItalic.ttf'),
  });

  // font loading with splash screen.
  useEffect(() => {
    // if an error exists, then throw (raise) that error.
    if (error) throw error;

    // hide the native splash screen immediately (we must have content ready to display).
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [error, fontsLoaded]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <LinearGradient
      // background linear gradient.
      className='flex-1' // ensure the gradient fills the entire screen including status bar area
      colors={gradientColors}>
      {/* Main Stack Navigator for the app's screens. */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
          presentation: 'transparentModal', // using transparentModal for better transparency
          contentStyle: { backgroundColor: 'transparent' }, // transparent background to allow the gradient to show through.
        }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(tabs)' />
      </Stack>
    </LinearGradient>
  );
};
