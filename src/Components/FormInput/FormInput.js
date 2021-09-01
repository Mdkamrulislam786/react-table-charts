import styles from "./FormInput.module.css";

const FormInput = ({ icon, type, placeholder, label, bgc }) => {
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <div
        style={{ backgroundColor: bgc ? `${bgc}` : "#b1d9f8" }}
        className={styles.input}
      >
        {icon}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;
