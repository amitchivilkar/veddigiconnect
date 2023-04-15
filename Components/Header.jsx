import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from "next/image"


export default function Header() {
    const menuList = [
        { id:1, name: "Home", href: "/" },
        { id:2, name: "About", href: "/about" },
        { id:3, name: "Services", href: "/services" },
        { id:4, name: "Blog", href: "/blog" },
        { id:5, name: "Contact", href: "/contact" }
    ]
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}><Link href='/'>
                    <Image src="logo.svg" width={133} height={133} />
                </Link></h1>
                <div className={styles.toggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <ul className={styles.nav__list}>
                       {menuList.map((menu) =>(
                        <li key={menu.id}><Link href={menu.href}>{menu.name}</Link></li>
                       ))}
                       <li className={styles.button}><Link href="/">Let's Connect</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}