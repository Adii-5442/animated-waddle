import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface VoiceNoteCardProps {
  summary: string;
  onPlay: () => void;
}

export default function VoiceNoteCard({ summary, onPlay }: VoiceNoteCardProps) {
  return (
    <View style={{ backgroundColor: '#FFFDE7', padding: 16, borderRadius: 12, marginVertical: 8, flexDirection: 'row', alignItems: 'center', elevation: 2 }}>
      <Text style={{ fontSize: 18, color: '#333', flex: 1 }}>{summary}</Text>
      <TouchableOpacity onPress={onPlay} style={{ marginLeft: 12 }}>
        <Text style={{ fontSize: 20, color: '#B8860B' }}>▶️</Text>
      </TouchableOpacity>
    </View>
  );
} 