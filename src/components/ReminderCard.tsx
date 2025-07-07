import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ReminderCardProps {
  time: string;
  text: string;
  recurring?: boolean;
  onPress?: () => void;
}

export default function ReminderCard({ time, text, recurring, onPress }: ReminderCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      {/* Time indicator */}
      <View style={{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#E8F5E8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
      }}>
        <Icon name="clock" size={20} color="#27AE60" />
      </View>
      
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#2C3E50',
          marginBottom: 4,
        }}>
          {text}
        </Text>
        <Text style={{
          fontSize: 14,
          color: '#7F8C8D',
        }}>
          {time}
        </Text>
      </View>
      
      {/* Recurring indicator */}
      {recurring && (
        <View style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: '#FFF3E0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Icon name="refresh" size={16} color="#FF9800" />
        </View>
      )}
    </TouchableOpacity>
  );
} 