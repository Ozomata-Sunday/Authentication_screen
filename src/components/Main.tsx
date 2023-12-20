import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screen/HomeScreen';

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
    </MainStack.Navigator>
  );
};

export default Main;
