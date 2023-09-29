import React from 'react';

import s from './text-field.module.scss'

interface TextFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholderText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props:TextFieldProps) {
  const { label, type, id, name, placeholderText, value, onChange} = props;

  return (
    <>
      <label className={s.label} htmlFor={id}>{label}</label>
      <input className={s.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
      />  
    </>
  );


  }
