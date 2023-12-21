import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  telu: {
    width: FullWidth,
    height: 220,
  },
  campus: {
    marginVertical: 20,
    marginLeft: 20,
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderColor: 'black',
  },
  sanbercode: {
    height: 200,
    width: 150,
  },
});
