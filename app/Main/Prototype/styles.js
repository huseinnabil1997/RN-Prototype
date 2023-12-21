import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  DIA: {
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    borderLeftWidth: 3,
    borderColor: 'red',
    padding: 10,
    marginLeft: 10,
  },
  tabContainer: {
    height: 30,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    height: 150,
  },
  activeTab: {borderBottomColor: 'red', borderBottomWidth: 4},
  inactiveTab: { borderBottomColor: 'gray', borderBottomWidth: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
