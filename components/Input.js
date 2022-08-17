import styles from "../styles/Input.module.css";

export default function Input(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          name={props.name}
          type="text"
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
          required
        />
        <div className={styles.line}></div>
        {props.value !== "" ? (
          <button
            className={styles.erase}
            onClick={(e) => {
              e.preventDefault();
              props.setValue("");
            }}
          >
            +
          </button>
        ) : null}
        <label>{props.text}</label>
      </div>
    </div>
  );
}
