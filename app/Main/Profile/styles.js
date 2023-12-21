import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  photo: {
    height: 250,
  },
  profile: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  imageBg: {
    flex: 1,
  },
  greetings: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
