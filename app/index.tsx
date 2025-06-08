//
// Welcome Screen
// Top level route (matches the / route).
// This route appears first when we open the app or navigate to our web app's root URL.
//

import {
  useSafeAreaInsets, // hook to get the safe area insets of the current device (instead of SafeAreaView).
} from 'react-native-safe-area-context';

import { Image, View, Text } from 'react-native';

import images from '../constants/images';

export default function Welcome() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View className='flex-1 w-full justify-start items-center'>
        <Image source={images.hero} className='w-[310px]' resizeMode='contain' />

        <View className='relative w-[360px] h-[150px]'>
          <Text className='text-5xl font-nbold text-white text-center'>ALLERGY SURE</Text>
          <Text className='text-5xl font-nbold text-white mt-10 text-center'>WE SECURE</Text>
          <Image
            source={images.magnifyingGlass}
            className='absolute top-11 right-5 w-[215px] h-[215px]'
            resizeMode='contain'
          />
        </View>
      </View>
    </View>
  );
}
