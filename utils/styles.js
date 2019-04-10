import {StyleSheet} from 'react-native';

import {black, gray, white} from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    margin: 10,
  },
  textInput: {
    color: black,
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    padding: 8,
    marginTop: 8,
    marginBottom: 4,
  },
  title1: {
    color: black,
    fontSize: 32,
    textAlign: 'center',
  },
  title2: {
    color: black,
    fontSize: 22,
    textAlign: 'center',
  },
  title3: {
    color: black,
    fontSize: 16,
    textAlign: 'center',
  },
});
