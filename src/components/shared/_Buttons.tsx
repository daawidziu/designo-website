import {ReactNode} from "react";
import styles from "../../styles/components/shared/Buttons.module.sass";

interface Props {
    children: ReactNode
    link?: string
}

export function ButtonPrimary({children}: Props) {
    return (
        <button
            type="submit"
            className={styles.buttonPrimary}
        >
            {children}
        </button>);
}

export function ButtonSecondary({children, link}: Props) {
    return (
        <a
        href={link}
        className={styles.buttonSecondary}
    >
        {children}
    </a>);
}