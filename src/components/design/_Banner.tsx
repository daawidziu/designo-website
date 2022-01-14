import styles from '../../styles/components/design/Banner.module.sass'

interface Props {
    title: string
    description: string
}

export function Banner({title, description}: Props) {
    return (
        <div className={styles.bannerContainer}>
            <h1 className="title-primary title-primary-white">{title}</h1>
            <p className="paragraph-primary">{description}</p>
        </div>
    );
}