import styles from "./textLink.module.scss";
import { ITextLink } from "./textLink.interfaces";
import cn from "classnames";
import useTranslation from "next-translate/useTranslation";

export function TextLink({ link, text, className }: ITextLink): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <a href={link} className={cn(styles.link, className)}>
        {t(text)}
      </a>
    </div>
  );
}
