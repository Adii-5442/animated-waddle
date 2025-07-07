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
        tabBarStyle: {
          height: 80,
          paddingBottom: 16,
          paddingTop: 12,
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Reminders') iconName = 'calendar-check';
          else if (route.name === 'Diary') iconName = 'notebook';
          
          return (
            <Icon 
              name={iconName} 
              size={focused ? 28 : 24} 
              color={focused ? '#FFD54F' : '#BDC3C7'} 
            />
          );
        },
        tabBarActiveTintColor: '#FFD54F',
        tabBarInactiveTintColor: '#BDC3C7',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Reminders" 
        component={ReminderScreen}
        options={{
          tabBarLabel: 'Reminders',
        }}
      />
      <Tab.Screen 
        name="Diary" 
        component={DiaryScreen}
        options={{
          tabBarLabel: 'Diary',
        }}
      />
    </Tab.Navigator>
  );
} 