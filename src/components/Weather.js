import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux';

import WeatherStyles from '../styles/WeatherStyles';
const styles = StyleSheet.create(WeatherStyles);

class Weather extends Component {
  render() {
    return (
      <View style={styles.textWrapper}>
        <View style={styles.textSection}>
          <Text style={styles.text}>
            {this.props.currentRegionWeather.name}
          </Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.text}>
            {this.props.currentRegionWeather.temperature}
          </Text>
        </View>
        <View style={styles.textSectionLast}>
          <Text style={styles.text}>
            {this.props.currentRegionWeather.description}
          </Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentRegionWeather: state.weatherReducer.currentRegionWeather
  }
}

export default connect(mapStateToProps)(Weather);
