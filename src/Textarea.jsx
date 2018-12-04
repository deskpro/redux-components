import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import { Textarea as TextareaComponent } from '@deskpro/react-components';
import FieldGroup from './FieldGroup';

/**
 * Renders a textarea using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const TextareaField = ({ input, meta, label, children, ...props }) => (
  <FieldGroup meta={meta} label={label} children={children}>
    <TextareaComponent {...props} {...input} />
  </FieldGroup>
);

TextareaField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input:    PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Textarea = props => (
  <Field {...props} component={TextareaField} />
);

export default Textarea;
