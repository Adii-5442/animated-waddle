import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUser } from '../context/UserContext';

export default function OnboardingScreen() {
  const { setOnboarded } = useUser();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8E1' }}>
      <Text style={{ fontSize: 28, marginBottom: 24, color: '#B8860B', fontWeight: 'bold' }}>Welcome to Saathi AI</Text>
      <Button title="Complete Onboarding" onPress={() => setOnboarded(true)} />
    </View>
  );
} 