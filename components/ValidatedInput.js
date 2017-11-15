
import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
});
const ValidatedInput = ({
  input: {
    onBlur,
    onChange,
    onFocus,
    value,
  },
}) => (
  <View>
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      style={styles.root}
      value={value}
    />
  </View>
);
ValidatedInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};
export default ValidatedInput;
