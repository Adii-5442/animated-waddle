import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DiaryScreen() {
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
          Voice Diary
        </Text>
        <Text style={{
          fontSize: 16,
          color: '#7F8C8D',
        }}>
          Record and listen to your thoughts
        </Text>
      </View>
      
      {/* Main Content */}
      <View style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
      }}>
        {/* Record Button */}
        <TouchableOpacity style={{
          backgroundColor: '#FFD54F',
          paddingVertical: 20,
          paddingHorizontal: 32,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          shadowColor: '#FFB300',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 8,
        }}>
          <Icon name="microphone" size={28} color="#B8860B" />
          <Text style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#B8860B',
            marginLeft: 12,
          }}>
            Start Recording
          </Text>
        </TouchableOpacity>
        
        {/* Empty State */}
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 32,
        }}>
          <View style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: '#FFF3E0',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 32,
          }}>
            <Icon name="notebook" size={48} color="#FF9800" />
          </View>
          
          <Text style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#2C3E50',
            textAlign: 'center',
            marginBottom: 16,
          }}>
            No Voice Notes Yet
          </Text>
          
          <Text style={{
            fontSize: 16,
            color: '#7F8C8D',
            textAlign: 'center',
            lineHeight: 24,
            marginBottom: 32,
          }}>
            Start recording your thoughts, memories, and daily experiences. Your voice diary will help you preserve precious moments.
          </Text>
          
          {/* Sample Voice Notes */}
          <View style={{
            width: '100%',
            marginTop: 20,
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#2C3E50',
              marginBottom: 16,
            }}>
              Example Entries:
            </Text>
            
            {/* Sample Voice Note 1 */}
            <View style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderRadius: 12,
              marginBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            }}>
              <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#FFF3E0',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 16,
              }}>
                <Icon name="play" size={20} color="#FF9800" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#2C3E50',
                  marginBottom: 4,
                }}>
                  Today's thoughts
                </Text>
                <Text style={{
                  fontSize: 14,
                  color: '#7F8C8D',
                }}>
                  2 minutes • 2 hours ago
                </Text>
              </View>
            </View>
            
            {/* Sample Voice Note 2 */}
            <View style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderRadius: 12,
              marginBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            }}>
              <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#E8F5E8',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 16,
              }}>
                <Icon name="play" size={20} color="#27AE60" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#2C3E50',
                  marginBottom: 4,
                }}>
                  Recipe for aloo paratha
                </Text>
                <Text style={{
                  fontSize: 14,
                  color: '#7F8C8D',
                }}>
                  1 minute • Yesterday
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
} 