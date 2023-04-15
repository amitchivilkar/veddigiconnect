import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";


export default function Header() {
    const menuList = [
        { id:1, name: "Home", href: "/" },
        { id:2, name: "About", href: "/about" },
        { id:3, name: "Services", href: "/services" },
        { id:4, name: "Blog", href: "/blog" },
        { id:5, name: "Contact", href: "/contact" }
    ]

    const [showToggleMenu, setShowToggleMenu] = useState(false);
    return (  
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}><Link href='/'>
                    <Image 
                        src='logo.svg' 
                        width={133} 
                        height={133}
                        alt='Logo Image' />
                </Link></h1>
                <div className={showToggleMenu ? styles.toggleOpen : styles.toggle} onClick={()=> setShowToggleMenu(!showToggleMenu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={showToggleMenu ? styles.menuShow : styles.menu}>
                    <ul className={styles.nav__list}>
                       {menuList.map((menu) => ( 
                        <li key={menu.id}><Link href={menu.href}>{menu.name}</Link></li>
                       ))}
                       <li className={styles.button}><Link href='https://wa.me/919819133840?text=I%27m%20interested%20in%20web%20development' target='_blank' rel="noopener noreferrer">Let&apos;s Connect</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}