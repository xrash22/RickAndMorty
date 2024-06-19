import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from './types';
import { CharacterDetailsScreen, HomeScreen } from '../screens';
import { theme } from '../themes';

const Stack = createNativeStackNavigator();

export const MainRouter = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          headerBackTitleVisible: false,
          contentStyle: { backgroundColor: theme.colors['blue'] },
        }}>
        <Stack.Screen
          name={SCREEN_NAMES.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.CHARACTER_DETAILS}
          component={CharacterDetailsScreen}
          options={{
            headerStyle: { backgroundColor: theme.colors['blue'] },
            headerTitleStyle: { color: theme.colors.white }
          }}
        />
      </Stack.Navigator>
    </>
  );
};
