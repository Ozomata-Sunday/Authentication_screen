import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground,
  StatusBar,
  ToastAndroid,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [spin, setSpin] = useState(false);

  const secureHandler = () => {
    setSecure(!secure);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show('Enter Email & password', ToastAndroid.LONG);
      console.log('Enter Email & password');
    } else {
      try {
        setSpin(true);
        await auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully');
        // if (userCredential) {
        //   navigation.navigate('Home');
        // }
      } catch (error: any) {
        Alert.alert('Error', error.message);
        console.error('Error during login:', error);
      } finally {
        setSpin(false);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assets/pixel.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <StatusBar hidden />
      <Spinner visible={spin} animation="fade" />
      <View style={styles.wrapper}>
        <View style={styles.input}>
          <Feather
            name="mail"
            size={23}
            color={email.length > 0 ? 'blue' : 'red'}
          />
          <TextInput
            style={{width: '95%'}}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.input}>
          <Feather
            name="lock"
            size={23}
            color={password.length > 0 ? 'blue' : 'red'}
          />
          <TextInput
            style={{width: '88%'}}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={secureHandler}>
            <Feather
              name="eye"
              size={11}
              color={password.length > 0 ? 'red' : 'silver'}
            />
          </TouchableOpacity>
        </View>

        <Button title="LOGIN" onPress={handleLogin} />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginSubtitle: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '300',
  },
  wrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: 'silver',
  },
  link: {
    color: 'red',
  },
});

export default LoginScreen;
