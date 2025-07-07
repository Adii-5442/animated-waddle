import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface VoiceNoteCardProps {
  summary: string;
  duration: string;
  date: string;
  onPlay: () => void;
  onPress?: () => void;
}

export default function VoiceNoteCard({ summary, duration, date, onPlay, onPress }: VoiceNoteCardProps) {
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
      {/* Play button */}
      <TouchableOpacity
        onPress={onPlay}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: '#FFF3E0',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 16,
        }}
      >
        <Icon name="play" size={20} color="#FF9800" />
      </TouchableOpacity>
      
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#2C3E50',
          marginBottom: 4,
        }}>
          {summary}
        </Text>
        <Text style={{
          fontSize: 14,
          color: '#7F8C8D',
        }}>
          {duration} • {date}
        </Text>
      </View>
      
      {/* More options */}
      <TouchableOpacity style={{
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Icon name="dots-vertical" size={16} color="#7F8C8D" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
} 