import React from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { required, email, cleanText, passwordsMatch, minLength } from '../../services/validations';
import { signup, check } from '../../services/backend';
import TextField from '../../ui-library/form/text-field';
import Button from '../../ui-library/form/button';
import './signup-form.scss';

const initialValues = {
  email: '',
  username: '',
  password: '',
  repeatPassword: ''
};

const validate = values => {

  // Client side validation
  let errors = {};
  let emailError = required(values.email) || email(values.email);
  if (emailError) {
    errors.email = emailError;
  }
  let usernameError = required(values.username) || cleanText(values.username) || minLength(values.username, 3);
  if (usernameError) {
    errors.username = usernameError;
  }
  let passwordError = required(values.password) || minLength(values.password, 6);
  if (passwordError) {
    errors.password = passwordError;
  }
  let repeatPasswordError = required(values.repeatPassword) || passwordsMatch(values.repeatPassword, values.password);
  if (repeatPasswordError) {
    errors.repeatPassword = repeatPasswordError;
  }
  if (Object.keys(errors).length) {
    return errors;
  }

  // Async validation
  return check(values)
    .then(() => {})
    .catch(e => {
      let errorsResponse = e && e.response && e.response.data && e.response.data.errors;
      if (!errorsResponse) return {};
      const fields = Object.keys(initialValues);
      for (const key in errorsResponse) {
        if (errorsResponse.hasOwnProperty( key ) ) {
          // if field exists, we will show message under input
          if (fields.includes(key)) {
            errors[key] = errorsResponse[key].message;
          } else { // else we show it in a toast
            toast.error(errorsResponse[key].message)
          }
        }
      }
      if (Object.keys(errorsResponse).length) {
        throw errors;
      }
    });
};


export default function SignupForm () {
  return (
    <div className="SignupForm-component">
      <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          signup(values)
            .then(() => {
              toast.success('You were successfully signed up!')
            })
            .catch(e => {
              let errorsResponse = e && e.response && e.response.data && e.response.data.errors;
              // if backend don't return error message we will show some default message
              if (!errorsResponse) {
                toast.error("Unexpected error. Please try again later");
              }
              // if we got error messages
              for (const key in errorsResponse) {
                if (errorsResponse.hasOwnProperty(key)) {
                  toast.error(errorsResponse[key].message);
                }
              }
            })
            .finally(() => setSubmitting(false))
        }}
      >
        {props => {
          const {
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                value={values.email}
                label="Email"
                placeholder="Email"
                onChange={handleChange}
                error={touched.email && errors.email}
              />

              <TextField
                id="username"
                name="username"
                type="text"
                value={values.username}
                label="Choose username"
                placeholder="Username"
                onChange={handleChange}
                error={touched.username && errors.username}
              />

              <TextField
                id="password"
                name="password"
                type="password"
                value={values.password}
                label="Password"
                placeholder="Password"
                onChange={handleChange}
                error={touched.password && errors.password}
              />

              <TextField
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                value={values.repeatPassword}
                label="Repeat your password"
                placeholder="Repeat your password"
                onChange={handleChange}
                error={touched.repeatPassword && errors.repeatPassword}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                block={true}
                className="submit"
              >Sign Up</Button>

            </form>
          );
        }}
      </Formik>


    </div>
  )
}
