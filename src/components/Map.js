import React, {
  Component
} from 'react';

import {
  StyleSheet,
  MapView,
  Text
} from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

import MapStyles from '../styles/MapStyles';
const styles = StyleSheet.create(MapStyles);

class Map extends Component {

  onRegionChangeComplete(region) {
    this.props.setAnnotations(region);
    this.props.retrieveWeatherData(region);
  }

  render() {
    return (
      <MapView
        style={styles.map}
        annotations={this.props.annotations}
        onRegionChangeComplete={
          this.onRegionChangeComplete.bind(this)
        }>
      </MapView>
    )
  }
}

function mapStateToProps(state) {
  return {
    annotations: state.mapReducer.annotations
  }
}

export default connect(mapStateToProps, actions)(Map);
