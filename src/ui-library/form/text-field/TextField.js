import React from 'react';
import classNames from 'classnames';

import './text-field.scss';


export default function TextField (props) {
  const {
    id,
    form,
    label,
    className,
    formGroupClassName,
    error,
    ...inputOptions
  } = props;


  return (
    <div className={classNames('TextField-component', formGroupClassName)}>
      <label htmlFor={id} className="label">{ label }</label>
      <input
        id={id}
        className={classNames(className, error && 'error')}
        {...inputOptions}
      />
      { error && <div className="error-message">{ error }</div> }
    </div>
  )
}
