import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Map from './Map';
import Weather from './Weather';

import LayoutStyles from '../styles/LayoutStyles';
const styles = StyleSheet.create(LayoutStyles);

class Layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Drag Map To View Weather For Different Cities
        </Text>
        <Map />
        <Weather />
      </View>
    )
  }
}


export default Layout;
