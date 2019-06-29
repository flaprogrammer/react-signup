import React from 'react';
import classNames from 'classnames';

import Spinner from '../../spinner';
import './button.scss';


export default function Button (props) {
  const {
    children,
    block,
    className,
    isLoading,
    ...buttonOptions
  } = props;


  return (
    <button
      className={classNames('Button-component', block && 'block', className)}
      {...buttonOptions}
    >
      <span>{ children }</span>&nbsp;
      { isLoading && <Spinner /> }
    </button>
  )
}
