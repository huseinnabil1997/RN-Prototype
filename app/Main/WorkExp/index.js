import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const EMIS = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>December 2022 - December 2023</Text>
      <Text>
        Ministry or Religion Data Gate website 
      </Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Developed features for web applications using React, and JavaScript</Text>
    <Text>- Created user-friendly, responsive, and cross-browser compatible webpages</Text>
    <Text>- Wrote, tested, and debugged code to ensure optimum performance</Text>
    <Text>- Implemented timely updates to existing webpages and functionalities</Text>
    <Text>- Collaborated with back-end developers to ensure app integration and performance using axios</Text>
  </View>
);

const Fooddev = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>January 2022 - November 2022</Text>
      <Text>
        B2B application to assist suppliers in selling their products to
        restaurants
      </Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI to the application</Text>
    <Text>- API integration using Postman and axios</Text>
    <Text>- App feature updates</Text>
    <Text>- Maintain app</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using JavaScript and React Native</Text>
  </View>
);

const Privolive = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>September 2022 - November 2022</Text>
      <Text>Video call streaming service app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI to the application</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using TypeScript</Text>
  </View>
);

const Autopay = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>March 2020 - November 2020</Text>
      <Text>Digital payments app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI to the application</Text>
    <Text>- API integration using Postman and axios</Text>
    <Text>- App feature updates</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using JavaScript and React Native</Text>
    <Text>- Maintain app</Text>
  </View>
);

const BahanaSekuritas = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>December 2020 - May 2021</Text>
      <Text>Finance app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI to the application</Text>
    <Text>- API integration using Postman and axios</Text>
    <Text>- App feature updates</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Maintain app</Text>
    <Text>- Coded using JavaScript, React Native, and ReactJs</Text>
  </View>
);

const SIKERJA = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>October 2019 - March 2020</Text>
      <Text>
        Application that helps ITB logistics in selecting vendors and assessing
        vendors with AHP
      </Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Design UI/UX</Text>
    <Text>- Implement UI to the application</Text>
    <Text>- API integration using Postman and axios</Text>
    <Text>- App feature updates</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using JavaScript, React Native Expo</Text>
    <Text>- Maintain app</Text>
  </View>
);

const WorkExp = () => {
  const [juke, setJuke] = useState('Juke');
  const [DIA, setDIA] = useState('Fooddev');
  const [ISI, setISI] = useState('Autopay');
  const [sanbercode, setSanbercode] = useState('ITB');
  const FullWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('assets/educationbg.png')}
      resizeMode={'cover'}
      style={{flex: 1}}>
      <View
        style={{flex: 1.55, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Work Experience</Text>
      </View>
      <View
        style={{
          flex: 9,
          paddingTop: 15,
        }}>
        <ScrollView>
          <View>
            <Text style={styles.DIA}>
              PT. Juke Solutions{'\n'}
              <Text style={{fontStyle: 'italic'}}>
                (December 2022 - December 2023)
              </Text>
            </Text>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setJuke('Juke')}
              style={[
                styles.tab,
                juke == 'Juke' ? styles.activeTab : styles.inactiveTab,
              ]}>
              <Text>EMIS</Text>
            </TouchableOpacity>
          </View>
          <View style={(styles.tabContent, {height: 200})}>
            {juke == 'Juke' ? <EMIS /> : null}
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.DIA}>
              PT. Digital Integrasi Asia{'\n'}
              <Text style={{fontStyle: 'italic'}}>
                (January 2022 - November 2022)
              </Text>
            </Text>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setDIA('Fooddev')}
                style={[
                  styles.tab,
                  DIA == 'Fooddev' ? styles.activeTab : styles.inactiveTab,
                ]}>
                <Text>Fooddev</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDIA('Privolive')}
                style={[
                  styles.tab,
                  DIA == 'Privolive' ? styles.activeTab : styles.inactiveTab,
                ]}>
                <Text>Privolive</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
              {DIA == 'Fooddev' ? <Fooddev /> : <Privolive />}
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.DIA}>
              PT. Ihsan Solusi Informatika{'\n'}
              <Text style={{fontStyle: 'italic'}}>(March 2020 - May 2021)</Text>
            </Text>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setISI('Autopay')}
              style={[
                styles.tab,
                ISI == 'Autopay' ? styles.activeTab : styles.inactiveTab,
              ]}>
              <Text>Autopay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setISI('Bahana')}
              style={[
                styles.tab,
                ISI == 'Bahana' ? styles.activeTab : styles.inactiveTab,
              ]}>
              <Text>Bahana Sekuritas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContent}>
            {ISI == 'Autopay' ? <Autopay /> : <BahanaSekuritas />}
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.DIA}>
              PT. Sanbercode{'\n'}
              <Text style={{fontStyle: 'italic'}}>
                (October 2019 - March 2020)
              </Text>
            </Text>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setSanbercode('ITB')}
              style={[
                styles.tab,
                sanbercode == 'ITB' ? styles.activeTab : styles.inactiveTab,
              ]}>
              <Text>SIKERJA</Text>
            </TouchableOpacity>
          </View>
          <View style={(styles.tabContent, {height: 200})}>
            {sanbercode == 'ITB' ? <SIKERJA /> : null}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default WorkExp;
