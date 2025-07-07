# Saathi AI - Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

### Installation
```bash
npm install
cd ios && RCT_NEW_ARCH_ENABLED=0 pod install && cd ..
```

### Running the App
```bash
# iOS
npx react-native run-ios

# Android  
npx react-native run-android
```

## 📁 Project Structure

```
/src
  /screens          # Main app screens
    - OnboardingScreen.tsx
    - MainTabs.tsx
    - HomeScreen.tsx
    - ReminderScreen.tsx
    - DiaryScreen.tsx
  /components       # Reusable UI components
    - ReminderCard.tsx
    - VoiceNoteCard.tsx
  /context          # React Context for state management
    - UserContext.tsx
  /utils            # Utility functions
    - timeFormatter.ts
  - App.tsx         # Main app entry point
```

## 🎨 Design System

### Colors (Warm, Indian-friendly palette)
- **Marigold**: `#FFD54F` - Primary accent
- **Saffron**: `#FFB300` - Secondary accent
- **Cream**: `#FFF8E1` - Background
- **Gold**: `#B8860B` - Text/UI elements
- **Warm Red**: `#FF7043` - Accent

### Typography
- **Large fonts**: 16-28pt for accessibility
- **Bold headings**: For important text
- **Cultural context**: Hindi/English support ready

## 🔧 Key Technologies

- **React Navigation**: Bottom tabs + Stack navigation (Legacy Architecture for compatibility)
- **Context API**: Centralized state management
- **AsyncStorage**: Local data persistence
- **Vector Icons**: Material Community Icons
- **TypeScript**: Full type safety
- **Tailwind/NativeWind**: Utility-first styling

## 📱 App Flow

1. **Onboarding** → Welcome screen, setup parent info
2. **Main App** → 3-tab navigation (Home, Reminders, Diary)
3. **Home Screen** → Large mic button, quick actions
4. **State Management** → UserContext for shared state

## 🎯 Stage 1 Features

- ✅ Navigation setup (Legacy Architecture for stability)
- ✅ Onboarding flow
- ✅ Home screen with mic button
- ✅ Warm, accessible UI design
- ✅ Context API for state
- ✅ Placeholder screens for Reminders/Diary

## 🔮 Next Steps (Stage 2)

- Voice recording functionality
- Reminder creation/management
- Voice diary with playback
- Firebase integration
- Hindi language support

## 🐛 Troubleshooting

### iOS Build Issues
If you get CocoaPods errors:
```bash
cd ios && RCT_NEW_ARCH_ENABLED=0 pod install && cd ..
```

### Architecture Issues
We're using Legacy Architecture for maximum compatibility. To reinstall pods:
```bash
cd ios && rm -rf Pods Podfile.lock && RCT_NEW_ARCH_ENABLED=0 pod install && cd ..
```

### Vector Icons Not Showing
Ensure Info.plist has UIAppFonts configured (already done).

### Metro Cache Issues
```bash
npx react-native start --reset-cache
```

### Clean Build
```bash
cd ios && rm -rf build && cd ..
npx react-native run-ios
```

## 📝 Development Notes

- Use `useUser()` hook for accessing shared state
- All screens use warm background colors
- Large tap targets for accessibility
- Voice-first interaction design
- Cultural context for Indian parents 45+
- Legacy Architecture for stability and compatibility 