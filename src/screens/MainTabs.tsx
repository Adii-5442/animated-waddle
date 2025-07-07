import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ReminderScreen from './ReminderScreen';
import DiaryScreen from './DiaryScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { height: 70, paddingBottom: 10 },
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'microphone';
          else if (route.name === 'Reminders') iconName = 'calendar-check';
          else if (route.name === 'Diary') iconName = 'notebook';
          return <Icon name={iconName} size={size || 28} color={color || '#B8860B'} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reminders" component={ReminderScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
    </Tab.Navigator>
  );
} 