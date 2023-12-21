import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 20,
    borderRadius: 3,
    width: FullWidth * 0.8,
    borderWidth: 2,
    borderColor: 'grey',
  },
  skill: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
