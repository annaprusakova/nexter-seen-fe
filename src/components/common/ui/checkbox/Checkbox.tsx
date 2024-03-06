import styles from "./checkbox.module.scss";
import { ICheckbox } from "@/components/common/ui/checkbox/checkbox.interfaces";

export function Checkbox({
  value = false,
  text,
  field,
  onChange,
}: ICheckbox): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={value}
        className={styles.input}
        onChange={() => onChange(field, !value)}
      />
      <label className={styles.label}>{text}</label>
    </div>
  );
}
