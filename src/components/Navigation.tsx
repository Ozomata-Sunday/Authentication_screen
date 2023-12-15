import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Main from './Main';
import AuthLayout from './AuthLayout';

const Navigation = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });

    return () => subscriber();
  }, []);

  return (
    <NavigationContainer>
      {user?.emailVerified ? <Main /> : <AuthLayout />}
    </NavigationContainer>
  );
};

export default Navigation;
