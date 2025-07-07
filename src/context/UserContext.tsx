import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserInfo {
  name: string;
  relation: string;
  birthDate: string;
  language: 'en' | 'hi';
  city?: string;
  job?: string;
}

interface UserContextType {
  onboarded: boolean;
  setOnboarded: (v: boolean) => void;
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo) => void;
  reminders: any[];
  setReminders: (r: any[]) => void;
  diary: any[];
  setDiary: (d: any[]) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [onboarded, setOnboardedState] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [reminders, setReminders] = useState<any[]>([]);
  const [diary, setDiary] = useState<any[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('onboarded').then(val => {
      if (val === 'true') setOnboardedState(true);
    });
  }, []);

  const setOnboarded = (v: boolean) => {
    setOnboardedState(v);
    AsyncStorage.setItem('onboarded', v ? 'true' : 'false');
  };

  return (
    <UserContext.Provider value={{ onboarded, setOnboarded, userInfo, setUserInfo, reminders, setReminders, diary, setDiary }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); 