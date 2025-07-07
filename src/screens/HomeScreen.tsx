import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF8E1', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 8, color: '#B8860B', fontWeight: 'bold' }}>Good Morning, Aunty</Text>
      <Text style={{ fontSize: 16, marginBottom: 32, color: '#B8860B' }}>Bol ke dekhiye…</Text>
      <TouchableOpacity style={{ backgroundColor: '#FFD54F', borderRadius: 50, padding: 32, marginBottom: 32, elevation: 4 }}>
        <Icon name="microphone" size={48} color="#B8860B" />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
          <Icon name="calendar-check" size={32} color="#B8860B" />
          <Text style={{ fontSize: 16, color: '#B8860B' }}>Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
          <Icon name="notebook" size={32} color="#B8860B" />
          <Text style={{ fontSize: 16, color: '#B8860B' }}>Voice Diary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
          <Icon name="calendar" size={32} color="#B8860B" />
          <Text style={{ fontSize: 16, color: '#B8860B' }}>Panchang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 