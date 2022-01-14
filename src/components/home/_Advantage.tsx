import styles from '../../styles/components/home/Advantage.module.sass';

interface Props {
    title: string
    description: string
}

export function Advantage({title, description}: Props) {
    return (
        <li className={styles.card}>
            <div className={styles.illustration}>
                <img src={`/assets/home/desktop/illustration-${title}.svg`} alt="advantage"/>
            </div>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}