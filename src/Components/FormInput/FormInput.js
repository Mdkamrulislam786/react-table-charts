import styles from "./FormInput.module.css";

const FormInput = ({
  icon,
  type,
  placeholder,
  label,
  bgc,
  value,
  name,
  onChange,
}) => {
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <div
        style={{ backgroundColor: bgc ? `${bgc}` : "#b1d9f8" }}
        className={styles.input}
      >
        {icon}
        <input
          type={type}
          value={value || ""}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormInput;
