import React, {useRef, useEffect} from 'react';
import {View, Text, Image, Animated, ImageBackground} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';

const Education = () => {
  const fadeAnimEducation = useRef(new Animated.Value(0)).current;
  const fadeAnimCertificate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnimEducation, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(fadeAnimCertificate, {
        toValue: 1,
        duration: 2000,
      }),
    ]).start();
  });
  return (
    <ImageBackground
      source={require('assets/educationbg.png')}
      resizeMode={'cover'}
      style={{flex: 1}}>
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Education</Text>
      </View>
      <View
        style={{
          flex: 9,
          alignItems: 'center',
          paddingTop: 15,
          justifyContent: 'space-between',
        }}>
        <Animated.View style={{opacity: fadeAnimEducation}}>
          <Image
            source={require('@assets/images/telu.jpg')}
            resizeMode={'contain'}
            style={styles.telu}
          />
          <Text style={styles.campus}>
            Bachelor Degree of Computer Engineering, Universitas Telkom{'\n'}
            Indonesia-Kab. Bandung{'\n'}
            GPA: 3,15/4,00
          </Text>
        </Animated.View>
        <Image
          style={{width: 100, height: 100}}
          source={require('@assets/gifs/education.gif')}
        />
        <Animated.View
          style={{flexDirection: 'row', opacity: fadeAnimCertificate}}>
          <Image
            source={require('@assets/images/sanbercode.jpg')}
            resizeMode={'contain'}
            style={styles.sanbercode}
          />
          <Text style={styles.campus}>
            React Native Frontend{'\n'}Programming{'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            Training Digital Talent Scholarship{'\n'}Machine Learning using
            Python
          </Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Education;
