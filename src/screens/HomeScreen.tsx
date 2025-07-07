import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FAFAFA',
    }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      
      {/* Header */}
      <View style={{
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 32,
        backgroundColor: '#FFF8E1',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}>
        <Text style={{
          fontSize: 28,
          fontWeight: '700',
          color: '#2C3E50',
          marginBottom: 8,
        }}>
          {getGreeting()}, Aunty
        </Text>
        <Text style={{
          fontSize: 16,
          color: '#7F8C8D',
          marginBottom: 24,
        }}>
          How can I help you today?
        </Text>
        
        {/* Voice prompt */}
        <View style={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderRadius: 16,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}>
          <Icon name="microphone" size={20} color="#FFD54F" />
          <Text style={{
            fontSize: 16,
            color: '#34495E',
            marginLeft: 12,
            fontStyle: 'italic',
          }}>
            "Bol ke dekhiye…"
          </Text>
        </View>
      </View>
      
      {/* Main Content */}
      <View style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
      }}>
        {/* Mic Button */}
        <View style={{
          alignItems: 'center',
          marginBottom: 48,
        }}>
          <TouchableOpacity style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: '#FFD54F',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#FFB300',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.4,
            shadowRadius: 16,
            elevation: 12,
          }}>
            <Icon name="microphone" size={48} color="#B8860B" />
          </TouchableOpacity>
          <Text style={{
            fontSize: 16,
            color: '#7F8C8D',
            marginTop: 16,
            fontWeight: '500',
          }}>
            Tap to speak
          </Text>
        </View>
        
        {/* Quick Actions */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          {/* Reminders Card */}
          <TouchableOpacity style={{
            width: (width - 72) / 2,
            backgroundColor: 'white',
            paddingVertical: 24,
            paddingHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: '#E8F5E8',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <Icon name="calendar-check" size={28} color="#27AE60" />
            </View>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#2C3E50',
              textAlign: 'center',
            }}>
              Reminders
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#7F8C8D',
              textAlign: 'center',
              marginTop: 4,
            }}>
              Set & manage
            </Text>
          </TouchableOpacity>
          
          {/* Voice Diary Card */}
          <TouchableOpacity style={{
            width: (width - 72) / 2,
            backgroundColor: 'white',
            paddingVertical: 24,
            paddingHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: '#FFF3E0',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <Icon name="notebook" size={28} color="#FF9800" />
            </View>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#2C3E50',
              textAlign: 'center',
            }}>
              Voice Diary
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#7F8C8D',
              textAlign: 'center',
              marginTop: 4,
            }}>
              Record & listen
            </Text>
          </TouchableOpacity>
          
          {/* Panchang Card */}
          <TouchableOpacity style={{
            width: (width - 72) / 2,
            backgroundColor: 'white',
            paddingVertical: 24,
            paddingHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: '#E3F2FD',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <Icon name="calendar" size={28} color="#2196F3" />
            </View>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#2C3E50',
              textAlign: 'center',
            }}>
              Panchang
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#7F8C8D',
              textAlign: 'center',
              marginTop: 4,
            }}>
              Daily horoscope
            </Text>
          </TouchableOpacity>
          
          {/* Settings Card */}
          <TouchableOpacity style={{
            width: (width - 72) / 2,
            backgroundColor: 'white',
            paddingVertical: 24,
            paddingHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: '#F3E5F5',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <Icon name="cog" size={28} color="#9C27B0" />
            </View>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#2C3E50',
              textAlign: 'center',
            }}>
              Settings
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#7F8C8D',
              textAlign: 'center',
              marginTop: 4,
            }}>
              Preferences
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 