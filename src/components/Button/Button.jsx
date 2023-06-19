import css from './Button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};
