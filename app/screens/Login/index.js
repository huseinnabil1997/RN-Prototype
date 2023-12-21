import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';

const Login = props => {
  const dispatch = useDispatch();
  const onChangeText = text => {
    dispatch({type: 'SET_VISITOR', text: text});
  };
  return (
    <>
      <Image
        source={require('assets/images/loginbg.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome to My CV!!</Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            style={styles.textInput}
            placeholder={'Visitor Name'}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Main')}
            style={styles.login}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
