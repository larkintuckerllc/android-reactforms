import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ValidatedInput from './ValidatedInput';

const FORM = 'MY_FORM';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  rootScroll: {
    flex: 1,
  },
  rootScrollTextInput: {
    marginTop: 10,
  },
});
function FormView({ handleSubmit }) {
  return (
    <View style={styles.root}>
      <ScrollView style={styles.rootScroll}>
        <Field name="firstName" component={ValidatedInput} />
        <Field name="lastName" component={ValidatedInput} />
        <Field name="email" component={ValidatedInput} />
        <Button
          onPress={handleSubmit}
          title="Submit"
        />
      </ScrollView>
    </View>
  );
}
FormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
const FormRedux = reduxForm({
  form: FORM,
})(FormView);
class Form extends Component {
  handleSubmit() {
    return Promise.resolve(this);
  }
  render() {
    const { handleSubmit } = this;
    return (
      <FormRedux
        onSubmit={handleSubmit}
      />
    );
  }
}
export default Form;
