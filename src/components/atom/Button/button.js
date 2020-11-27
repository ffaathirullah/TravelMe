import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../utils/colors';
import PropTypes from 'prop-types';

export default function button({title, onpress, width, height, prior}) {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{width, height, ...styles.button(prior)}}>
      <Text style={styles.text(prior)}> {title} </Text>
    </TouchableOpacity>
  );
}

button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  width: PropTypes.number,
  height: PropTypes.number,
  onpress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: (type) => ({
    backgroundColor: type === 'primary' ? colors.primary : colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    jusctifyContent: 'center',
    alignItems: 'center',
  }),
  text: (type) => ({
    color: '#fff',
    fontSize: type === 'primary' ? 20 : 18,
    fontWeight: type === 'primary' ? 'bold' : '400',
  }),
});
