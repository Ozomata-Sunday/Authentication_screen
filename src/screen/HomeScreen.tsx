import React, {useState, useEffect} from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}: any) => {
  const user = auth().currentUser;

  const Logout = async () => {
    try {
      await auth().signOut();
      console.log('User logged out');
      // navigation.push('Login');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={'silver'} />
      <View style={{flexDirection: 'column', gap: 25}}>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 30, color: 'black'}}>Dashboard</Text>
          <Text style={styles.displayName}>Welcome {user?.displayName}</Text>
        </View>
        <View style={styles.card}>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 12,}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Feather name="calendar" color={'blue'} size={40} />
              <Text>November</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Chat');
              }}>
              <Ionicons name="chatbox-outline" size={30} color="blue" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Feather name="dollar-sign" size={24} color="green" />
              <Text style={{fontSize: 20}}>5000</Text>
            </View>
            <Octicons name="graph" size={24} color="green" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Withdrawal</Text>
              <Text style={styles.textSubtitle}> $1220</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Deposit</Text>
              <Text style={styles.textSubtitle}>$1220</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Pending</Text>
              <Text style={styles.textSubtitle}>$1220</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Transcation</Text>
              <Text style={styles.textSubtitle}>10</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <Button title="LogOut" onPress={Logout} />
        <Text style={styles.email}>{user?.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  card: {
    width: '95%',
    // height: '20%',
    backgroundColor: 'lightblue',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 12,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    gap: 2,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textSubtitle: {
    textAlign: 'center',
    fontSize: 12,
  },
  email: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 2,
  },
  displayName: {
    fontSize: 15,
    color: 'black',
  },
});

export default HomeScreen;
