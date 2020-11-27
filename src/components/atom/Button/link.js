import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function link({onpress, text}) {
  return (
    <TouchableOpacity onPress={onpress}>
      <Text style={styles.textLink}>{text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textLink: {
    color: 'blue',
  },
});
