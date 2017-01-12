import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TagCloud } from 'react-native-tag-cloud';

const deviceWidth = Dimensions.get('window').width;

export default class CloudTagExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagList: [
        { title: 'Item1', point: 0 },
        { title: 'LongItem2', point: 1 },
        { title: 'Item3', point: 2 },
        { title: 'LongItem4', point: 1 },
        { title: 'LongLongItem5', point: 1 },
        { title: 'Item6', point: 0 },
        { title: 'LongItem7', point: 2 },
        { title: 'Item8', point: 0 },
        { title: 'Item9', point: 1 },
        { title: 'LongLongItem10', point: 2 },
      ],
      colorList: ['red', 'green', 'blue'],
      minFontSize: 12,
      style: {
        width: deviceWidth / 1.2,
        paddingLeft: 15,
        paddingRight: 15,
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TagCloud
          tagList={this.state.tagList}
          colorList={this.state.colorList}
          minFontSize={this.state.minFontSize}
          style={this.state.style}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
