import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    const footerMenus = [
        { id:1, name: "Home", href: "/" },
        { id:2, name: "About", href: "/about" },
        { id:3, name: "Services", href: "/services" },
        { id:4, name: "Blog", href: "/blog" },
        { id:5, name: "Contact", href: "/contact" }
    ]
    return (
        <>
            <footer className={styles.main}>
                <div className={styles.nav}>
                    <ul className={styles.list}>
                        { footerMenus.map((menu) => (
                            <li key={menu.id}><Link href={menu.href}>{menu.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.copyrights}>
                    <p className={styles.copytext}>
                        &copy; 2023 - All Rights Reserved @ Ved Digi Connect <br/> Website Designed &amp; Developed by <a href="https://www.iease.in" target='_blank'>iEase IT Solutions</a>
                    </p>
                </div>
            </footer>
        </>
    )
}