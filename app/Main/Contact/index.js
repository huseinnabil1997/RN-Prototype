import React, {useRef, useEffect} from 'react';
import {View, Text, Image, Animated, ImageBackground} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';

const Contact = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  });

  return (
    <ImageBackground
      source={require('@assets/contactbg.png')}
      resizeMode={'cover'}
      style={styles.imageBg}>
      <View
        style={{
          flex: 3.8 / 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>Contact</Text>
      </View>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          alignItems: 'center',
        }}>
        <View style={styles.textContainer}>
          <Image source={require('assets/images/icons/address.png')} />
          <Text style={styles.text}>
            Jl. Tubagus Ismail VIII No. 65, Kota Bandung
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={require('assets/images/icons/phone.png')} />
          <Text style={styles.text}>081804834487</Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={require('assets/images/icons/email.png')} />
          <Text style={styles.text}>seinnabil@gmail.com</Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={require('assets/images/icons/linkedin.png')} />
          <Text style={styles.text}>
            https://www.linkedin.com/in/huseinnabil/
          </Text>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

export default Contact;
