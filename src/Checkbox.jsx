import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import { Checkbox as CheckboxComponent } from '@deskpro/react-components';
import FieldGroup from './FieldGroup';

/**
 * Renders a checkbox element using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const CheckboxField = (
  {
    input: { value, ...rest },
    meta,
    label,
    children,
    ...props
  }) => (
  <FieldGroup meta={meta} label={label} children={children}>
    <CheckboxComponent {...props} checked={!!value} {...rest} />
  </FieldGroup>
);

CheckboxField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input: PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Checkbox = props => (
  <Field {...props} component={CheckboxField} />
);

export default Checkbox;
