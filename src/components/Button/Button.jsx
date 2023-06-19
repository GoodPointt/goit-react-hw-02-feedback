import css from './Button.module.css';

export const Button = ({ name, incrementStat }) => {
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => incrementStat(name)}
    >
      {name}
    </button>
  );
};
