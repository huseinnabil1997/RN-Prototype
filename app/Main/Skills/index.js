import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, Animated, ImageBackground} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {ProgressBar} from 'react-native-paper';

const Skills = () => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(progressAnim, {
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
        <Text style={styles.title}>Skills</Text>
      </View>
      <View
        style={{
          flex: 9,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 8,
        }}>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            React <Text style={{fontStyle: 'italic'}}>(8 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/rn.png')}
            />
            <ProgressBar
              progress={0.8}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            JavaScript <Text style={{fontStyle: 'italic'}}>(8 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/js.png')}
            />
            <ProgressBar
              progress={0.8}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            HTML <Text style={{fontStyle: 'italic'}}>(6 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/html.png')}
            />
            <ProgressBar
              progress={0.6}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            CSS <Text style={{fontStyle: 'italic'}}>(6 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/css.png')}
            />
            <ProgressBar
              progress={0.6}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            ReactJS <Text style={{fontStyle: 'italic'}}>(6 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/react.png')}
            />
            <ProgressBar
              progress={0.6}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            VueJS <Text style={{fontStyle: 'italic'}}>(2 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/vue.png')}
            />
            <ProgressBar
              progress={0.2}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            Flutter <Text style={{fontStyle: 'italic'}}>(2 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/flutter.png')}
            />
            <ProgressBar
              progress={0.2}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.skill}>
            Dart <Text style={{fontStyle: 'italic'}}>(2 / 10)</Text>
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('assets/images/icons/flutter.png')}
            />
            <ProgressBar
              progress={0.2}
              color={'red'}
              style={styles.progressBar}
              animatedValue={progressAnim}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Skills;
