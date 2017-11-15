import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
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
const required = value => (value ? undefined : 'Required');
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Valid Email Address Required'
    : undefined);
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
function FormView({ handleSubmit, submitting, valid }) {
  return (
    <View style={styles.root}>
      <ScrollView style={styles.rootScroll}>
        <Field
          name="firstName"
          component={ValidatedInput}
          props={{ placeholder: 'First Name' }}
          validate={[required]}
        />
        <Field
          name="lastName"
          component={ValidatedInput}
          props={{ placeholder: 'Last Name' }}
          validate={[required]}
        />
        <Field
          name="email"
          component={ValidatedInput}
          props={{ keyboardType: 'email-address', placeholder: 'Email' }}
          validate={[required, email]}
        />
        <Button
          disabled={submitting || !valid}
          onPress={handleSubmit}
          title="Submit"
        />
      </ScrollView>
    </View>
  );
}
FormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};
const FormRedux = reduxForm({
  form: FORM,
})(FormView);
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    const { resetForm } = this.props;
    resetForm();
    return Promise.resolve(data);
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
Form.propTypes = {
  resetForm: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    resetForm: () => reset(FORM),
  },
)(Form);
