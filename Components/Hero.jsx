import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return(
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Boost Your Business </h2>
                    <p className={styles.text}>Your business make a real difference in people’s lives, but you’re struggling to get it in front of the right people. That’s where we come in. At Ved Digi Connect, we helping you connect with your target audience and grow your online presence. </p>
                    <Link href="/" className={styles.button}>Let’s Connect</Link>
                </div>
                <div className={styles.media}>
                    <Image src="heroImage.svg"
                        width={867}
                        height={329}
                        alt="Hero Image" />

                </div>
            </div>
        </>
    )
}