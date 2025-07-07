import React from 'react';
import { View, Text } from 'react-native';

interface ReminderCardProps {
  time: string;
  text: string;
  recurring?: boolean;
}

export default function ReminderCard({ time, text, recurring }: ReminderCardProps) {
  return (
    <View style={{ backgroundColor: '#FFFDE7', padding: 16, borderRadius: 12, marginVertical: 8, flexDirection: 'row', alignItems: 'center', elevation: 2 }}>
      <Text style={{ fontSize: 20, color: '#B8860B', fontWeight: 'bold', marginRight: 16 }}>{time}</Text>
      <Text style={{ fontSize: 18, color: '#333', flex: 1 }}>{text}</Text>
      {recurring && <Text style={{ fontSize: 16, color: '#B8860B', marginLeft: 8 }}>🔁</Text>}
    </View>
  );
} 