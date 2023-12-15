import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const AuthStack = createNativeStackNavigator();
const AuthLayout = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerStyle: {backgroundColor: '#C0C0C0'},
          animation: 'slide_from_left',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthLayout;
