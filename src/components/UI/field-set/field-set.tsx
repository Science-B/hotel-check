import React from 'react';
import classNames from 'classnames';

import s from './field-set.module.scss'

interface TextFieldProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholderText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function FieldSet(props:TextFieldProps) {
  const { label, type = 'text', id, name, placeholderText, value, onChange, error} = props;

  return (
    <fieldset className={classNames(s.fieldset, error ? s.error : '')}>
      <label className={s.label} htmlFor={id}>{label}</label>
      <input className={s.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
      /> 
       <p>{error}</p>
    </fieldset>
  );


  }
