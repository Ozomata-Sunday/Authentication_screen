import React, {createContext, useState} from 'react';
import {ToastAndroid, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({Children}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show('Enter Email & password', ToastAndroid.LONG);
      console.log('Enter Email & password');
    } else {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log('User logged in successfully');
        // if (userCredential) {
        //   navigation.navigate('Home');
        // }
      } catch (error: any) {
        Alert.alert('Error', error.message);
        console.error('Error during login:', error);
      }
    }
  };
  return (
    <AuthContext.Provider value={{handleLogin, email, password}}>
      {Children}
    </AuthContext.Provider>
  );
};
