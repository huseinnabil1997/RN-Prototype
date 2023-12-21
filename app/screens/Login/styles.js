import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: FullWidth,
    flex: 2,
  },
  card: {
    width: FullWidth / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    height: 50,
    padding: 20,
    borderWidth: 10,
    borderColor: '#bcbcbc',
  },
  welcome: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  login: {
    width: FullWidth / 4,
    height: 40,
    backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    color: 'white',
  },
});
