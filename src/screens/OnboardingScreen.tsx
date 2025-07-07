import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useUser } from '../context/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const { setOnboarded } = useUser();
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FAFAFA',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    }}>
      {/* Decorative top element */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height * 0.4,
        backgroundColor: '#FFF8E1',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }} />
      
      {/* Main content */}
      <View style={{
        alignItems: 'center',
        zIndex: 1,
      }}>
        {/* Icon */}
        <View style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: '#FFD54F',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 32,
          shadowColor: '#FFB300',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 16,
          elevation: 8,
        }}>
          <Icon name="heart" size={48} color="#B8860B" />
        </View>
        
        {/* Title */}
        <Text style={{
          fontSize: 32,
          fontWeight: '700',
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: -0.5,
        }}>
          Saathi AI
        </Text>
        
        {/* Subtitle */}
        <Text style={{
          fontSize: 18,
          color: '#7F8C8D',
          textAlign: 'center',
          marginBottom: 48,
          lineHeight: 26,
          paddingHorizontal: 20,
        }}>
          Your caring companion for daily life
        </Text>
        
        {/* Welcome message */}
        <View style={{
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 20,
          borderRadius: 16,
          marginBottom: 40,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}>
          <Text style={{
            fontSize: 16,
            color: '#34495E',
            textAlign: 'center',
            lineHeight: 24,
          }}>
            Welcome! Let's set up your personal assistant to help with reminders, voice notes, and daily tasks.
          </Text>
        </View>
        
        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => setOnboarded(true)}
          style={{
            backgroundColor: '#FFD54F',
            paddingHorizontal: 48,
            paddingVertical: 16,
            borderRadius: 28,
            shadowColor: '#FFB300',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          <Text style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#B8860B',
            textAlign: 'center',
          }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom decorative element */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#FFF8E1',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }} />
    </View>
  );
} 