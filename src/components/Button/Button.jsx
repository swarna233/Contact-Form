import styles from "./Button.module.css";

const Button = ({ isOutLine, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutLine ? styles.outlineBtn : styles.primaryBtn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
