import { Text, View } from 'react-native';

import {
  useSafeAreaInsets, // hook to get the safe area insets of the current device (instead of SafeAreaView).
} from 'react-native-safe-area-context';

const History = () => {
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
      <Text className='text-white'>History</Text>
    </View>
  );
};

export default History;
