import React , {Component} from 'react';
import { Text, View, StyleSheet , Platform , NavigatorIOS} from 'react-native';
import { Constants } from 'expo';
import SearchPage from './SearchPage';


export default class App extends React.Component {
  render() {
 return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
