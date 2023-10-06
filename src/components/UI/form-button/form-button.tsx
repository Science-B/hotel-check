import s from './form-button.module.scss';

interface FormButtonProps {
  text: string;
}

export function FormButton({ text }: FormButtonProps) {
  return <button className={s.button}>{text}</button>;
}