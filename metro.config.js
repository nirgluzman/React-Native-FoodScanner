// Metro Bundler is the default JavaScript bundler for React Native projects.
// It takes our code and its dependencies and packages them into a single JavaScript file (or multiple bundles) that can be run on a mobile device or in a web browser.

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// https://www.nativewind.dev/getting-started/installation#4-modify-your-metroconfigjs
module.exports = withNativeWind(config, { input: './global.css' });
