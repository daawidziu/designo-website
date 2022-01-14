import Image from "next/image";
import {useEffect, useState} from "react";
import styles from "../../styles/components/about/AboutCard.module.sass";

interface Props {
    title: string
    paragraph1: string
    paragraph2: string
    imgSrc: string
    id?: string
}

export function AboutCard({ title, paragraph1, paragraph2, imgSrc, id }: Props) {
    const [secondCard, setSecondCard] = useState(false);

    useEffect(() => id === 'secondCard' && setSecondCard(true), []);

    return (
        <div className={`${styles.card} ${secondCard && styles.second}`} id={id}>
            <div>
                <Image
                    src={imgSrc}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt={title}
                />
            </div>
            <div className={styles.content}>
                <h2 className="title-primary title-primary-peach">{title}</h2>
                <p className="paragraph-secondary">{paragraph1}</p>
                <p className="paragraph-secondary">{paragraph2}</p>
            </div>
        </div>
    );
}