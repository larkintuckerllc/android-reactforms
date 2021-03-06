
import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
  keyboardType,
  meta: {
    touched,
    error,
  },
  placeholder,
}) => (
  <View>
    <TextInput
      keyboardType={keyboardType}
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      style={styles.root}
      value={value}
    />
    {error !== null && touched && <Text>{error}</Text>}
  </View>
);
ValidatedInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  keyboardType: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string,
};
ValidatedInput.defaultProps = {
  keyboardType: 'default',
  placeholder: '',
};
export default ValidatedInput;
