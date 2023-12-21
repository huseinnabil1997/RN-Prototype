import React, {useRef, useEffect, useState} from 'react';
import {View, Text, ImageBackground, Image, Animated} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const Profile = props => {
  const [greetings, setGreetings] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeProfile = useRef(new Animated.Value(0)).current;
  const visitor = useSelector(state => state.reducer.visitor);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
      }),
    ]).start();
  });

  setTimeout(() => {
    setGreetings(false);
    Animated.timing(fadeProfile, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, 3000);

  return (
    <ImageBackground
      source={require('assets/bg.png')}
      resizeMode={'cover'}
      style={styles.imageBg}>
      {greetings ? (
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: fadeAnim,
          }}>
          <Animated.View
            style={[
              {
                opacity: fadeAnim,
              },
            ]}>
            <Text style={styles.greetings}>WELCOME {visitor}!!</Text>
          </Animated.View>
        </Animated.View>
      ) : (
        <Animated.View style={{flex: 1, opacity: fadeProfile}}>
          <View
            style={{
              flex: 1 / 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.title}>Profile</Text>
          </View>
          <View
            style={{
              flex: 5 / 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode={'contain'}
              source={require('@assets/images/photo.jpg')}
              style={styles.photo}
            />
          </View>
          <View
            style={{
              flex: 3.5 / 10,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.profile}>Marital status: Single</Text>
            <Text style={styles.profile}>Nationality: Indonesia</Text>
            <Text style={styles.profile}>Gender: Male</Text>
            <Text style={styles.profile}>Place of Birth: Malang</Text>
            <Text style={styles.profile}>
              Date of Birth: February 10th, 1997
            </Text>
          </View>
        </Animated.View>
      )}
    </ImageBackground>
  );
};

export default Profile;
