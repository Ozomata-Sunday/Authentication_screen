import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
      <MainStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: true, animation: 'fade_from_bottom'}}
      />
    </MainStack.Navigator>
  );
};

export default Main;
