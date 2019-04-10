import React from 'react';
import {Text, View} from 'react-native';

import TextButton from './TextButton';
import styles from '../utils/styles';

class DeckDetail extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;

    return {
      title
    };
  }

  componentDidMount() {

  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Deck detail</Text>
      </View>
    );
  }
}

export default DeckDetail;