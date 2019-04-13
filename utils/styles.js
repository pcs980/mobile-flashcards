import {StyleSheet} from 'react-native';

import {black, dangerColor, gray, lightGray, successColor, white} from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    margin: 10,
  },
  containerTop: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: white,
    margin: 10,
    padding: 10,
  },
  shadow: {
    backgroundColor: white,
    elevation: 5,
    borderRadius: 3,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: black
  },
  subtitle: {
    color: gray,
    fontSize: 14,
    textAlign: 'center',
  },
  textError: {
    color: dangerColor,
    marginTop: 5,
    marginBottom: 10,
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
    marginTop: 10,
    textAlign: 'center',
  },
  title2: {
    color: black,
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  },
  title3: {
    color: black,
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
