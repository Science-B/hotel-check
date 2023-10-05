import React from 'react';
import classNames from 'classnames';

import s from './field-set.module.scss'

interface FieldSetProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholderText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  min?: string;
}

export function FieldSet(props:FieldSetProps) {
  const { label, type = 'text', id, name, placeholderText, value, onChange, error, min} = props;

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
        min={min}
      /> 
       <p>{error}</p>
    </fieldset>
  );
  }
