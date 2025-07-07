import React from 'react';
import { View, Text } from 'react-native';

export default function ReminderScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF8E1', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: '#B8860B', fontWeight: 'bold' }}>Reminders will show here</Text>
    </View>
  );
} 