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
  listContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: lightGray,
  },
  shadow: {
    padding: 4,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
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
