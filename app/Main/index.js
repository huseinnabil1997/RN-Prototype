import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ContactScreen from './Contact';
import EducationScreen from './Education';
import SkillsScreen from './Skills';
import WorkExpScreen from './WorkExp';
import ProfileScreen from './Profile';
import PrototypeScreen from './Prototype'

const Tab = createBottomTabNavigator();

const MainNav = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: () => <Text>{route.name}</Text>,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'Prototype':
              iconName = focused
                ? require('@assets/images/icons/prototype_active.png')
                : require('@assets/images/icons/ptototype_inactive.png');
              break;
            case 'WorkExp':
              iconName = focused
                ? require('@assets/images/icons/work_active.png')
                : require('@assets/images/icons/work_inactive.png');
              break;
            case 'Skills':
              iconName = focused
                ? require('@assets/images/icons/skills_active.png')
                : require('@assets/images/icons/skills_inactive.png');
              break;
            case 'Education':
              iconName = focused
                ? require('@assets/images/icons/education_active.png')
                : require('@assets/images/icons/education_inactive.png');
              break;
            case 'Contact':
              iconName = focused
                ? require('@assets/images/icons/contact_active.png')
                : require('@assets/images/icons/contact_inactive.png');
              break;
            case 'Profile':
              iconName = focused
                ? require('@assets/images/icons/profile_icon_active.png')
                : require('@assets/images/icons/profile_icon_black.png');
              break;
          }
          return <Image style={styles.image} source={iconName} />;
        },
        tabBarStyle: {height: getBottomSpace() + 58},
        tabBarItemStyle: {Padding: 1},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      })}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Education" component={EducationScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="WorkExp" component={WorkExpScreen} />
      <Tab.Screen name="Prototype" component={PrototypeScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});

export default MainNav;
