//
// Welcome Screen
// Top level route (matches the / route).
// This route appears first when we open the app or navigate to our web app's root URL.
//

import {
  useSafeAreaInsets, // hook to get the safe area insets of the current device (instead of SafeAreaView).
} from 'react-native-safe-area-context';

import { View } from 'react-native';

export default function Welcome() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className='bg-primary h-full'
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}></View>
  );
}
