import styles from "./button.module.scss";
import { IButton } from "@/components/common/ui/button/button.interfaces";

export function Button({ text, onClick }: IButton): JSX.Element {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      {text}
    </button>
  );
}
