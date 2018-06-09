import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'
import reducer from './reducers'

export default class App extends React.Component {
  componentDidMount(){
    // Do anything we need here
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
