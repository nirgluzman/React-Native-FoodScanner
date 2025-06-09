//
// This component defines the bottom tab navigation structure for the application using Expo Router's Tabs navigator.
//

import { View, Text, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { colors } from '../../constants';

import type { ComponentProps } from 'react';
import type MaterialCommunityIconsType from '@expo/vector-icons/MaterialCommunityIcons';

interface ITabIcon {
  icon: ComponentProps<typeof MaterialCommunityIconsType>['name'];
  color: string;
  name: string;
  focused: boolean;
}

// render an individual tab icon with its label.
const TabIcon = ({ icon, color, name, focused }: ITabIcon) => {
  return (
    <View className='items-center justify-center'>
      <MaterialCommunityIcons name={icon} size={28} color={color} />
      <Text className={`${focused ? 'font-nbold' : 'font-nregular'} text-sm`} style={{ color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // https://reactnavigation.org/docs/bottom-tab-navigator/
        headerShown: false, // hide the header for all screens.
        tabBarShowLabel: false, // hide the tab label for all screens.
        tabBarActiveTintColor: colors.primary.DEFAULT, // active tab color.
        tabBarInactiveTintColor: colors.primary[100], // inactive tab color.

        tabBarHideOnKeyboard: true, // hide the tab bar when the keyboard is open.
        animation: 'shift', // animation type for tab transitions.

        sceneStyle: {
          // style for the scene (screen) content.
          backgroundColor: 'transparent', // transparent background to show the gradient.
        },

        tabBarStyle: {
          // style object for the tab bar
          height: 110,
          backgroundColor: colors.black, // background color of the tab bar.
          borderStyle: 'solid', // solid border style for the tab bar.
          borderColor: colors.black,
          borderTopWidth: 1, // add border at the top to separate from content
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },

        tabBarIconStyle: {
          // style object for each tab icon.
          width: 'auto', // auto width to fit the content.
        },

        tabBarButton: ({ children, onPress }) => (
          <Pressable
            onPress={onPress}
            className='flex-1 items-center justify-center'
            android_ripple={{ color: colors.gray[400], borderless: false, radius: 50 }}>
            {/* render the children (icon and label) inside the Pressable */}
            {children}
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name='history'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon='format-list-bulleted' color={color} name='History' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='scan'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon='barcode-scan' color={color} name='Scan' focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
