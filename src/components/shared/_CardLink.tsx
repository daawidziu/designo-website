import styles from '../../styles/components/shared/CardLink.module.sass';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    title: string
    imgURL: string
    pageURL: string
}

export function DesignLink({title, imgURL, pageURL}: Props) {
    return (
        <li className={styles.cardContainer}>
            <Link href={pageURL}>
                <a>
                    <Image
                        src={imgURL}
                        layout='fill'
                        objectFit='cover'
                        className={styles.background}
                        alt={`${title} background`}
                    />
                    <h1 className="title-primary-white">{title}</h1>
                    <span>
            View projects
            <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                style={{height: 10, width: 7}}
                alt={`go to ${title}`}
            />
          </span>
                </a>
            </Link>
        </li>
    );
}