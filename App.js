import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Text, View} from 'react-native';

import Navigator from './components/Navigator';
import Status from './components/Status';
import reducer from './reducers';
import {setLocalNotification} from './utils/notification';

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Status/>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}
