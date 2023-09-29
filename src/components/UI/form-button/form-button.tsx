
import s from './form-button.module.scss'

interface FormButtonProps {
text: string;
}

export function FormButton(props: FormButtonProps) {
  const { text } = props;
  
  return (
     <button className={s.button} >{text}</button>
  );
  }
