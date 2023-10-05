import s from './side-card.module.scss'
 
interface SideCardProps {
   children: JSX.Element;
}

export function SideCard(props: SideCardProps): JSX.Element {
   const { children } = props;
 return (
      <div className={s.card}>
         <div className={s.container}>
            {children}
         </div>
     </div>
  );
  }
