import styles from "./Input.module.css";
import send_arrow from "../icons/send_arrow.png";

export default function Input({ value, onChange, onClick, onKeyPress }) {
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents the page from reloading

    onClick(); //calls the onClick function
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <input
        className={styles.text}
        placeholder="Your prompt here..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button type="submit" className={styles.btn}>
        <img src={send_arrow} className={styles.arrow} alt="send" />
      </button>
    </form>
  );
}
