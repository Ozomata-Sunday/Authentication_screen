import React, {useState} from 'react';
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
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      ToastAndroid.show('Enter Name, Email, & password', ToastAndroid.LONG);
      console.log('Enter Name, Email, & password');
    } else {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        await userCredential.user?.updateProfile({
          displayName: name,
        });
        await userCredential.user.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://authentication-screen-5297d.firebaseapp.com',
        });
        navigation.navigate('Login');
        ToastAndroid.show('Account created successfully!', ToastAndroid.SHORT);
        console.log('User account created successfully');
      } catch (error: any) {
        Alert.alert('Error', error.message);
        console.error('Error during user registration:', error);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assets/pixel.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button title="Register" onPress={handleSignUp} />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    backgroundColor: 'silver',
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;
