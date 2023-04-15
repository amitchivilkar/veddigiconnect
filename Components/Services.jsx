import Link from 'next/link';
import styles from '../styles/Offer.module.css';

export default function weOffer() {
    const serviceLists = [
        {
            id: 1,
            title: "Content Development",
            desc: "Be it a static website, interactive website,  blogging website, or data-driven E-Commerce Website our team will develop a website as per client & market requirements.",
            image: "content_development.svg",
            link: "/content-development"

        },
        {
            id: 2,
            title: "Digital Marketing",
            desc: "Be it a static website, interactive website,  blogging website, or data-driven E-Commerce Website our team will develop a website as per client & market requirements.",
            image: "digital_marketing.svg",
            link: "/digital-marketing"

        },
        {
            id: 3,
            title: "Web Development",
            desc: "Be it a static website, interactive website,  blogging website, or data-driven E-Commerce Website our team will develop a website as per client & market requirements.",
            image: "web_development.svg",
            link: "/web-development"
        },
    ]


    return (
        <>
            <div className={styles.offers}>
                <h2 className={styles.heading}>Struggling to Reach Your Target Audience</h2>
                <p className={styles.leading}>You have a great product or service, but you’re having trouble getting in front of the right people. Your website traffic is low, and your social media efforts aren’t producing the results you hoped for.</p>

                <div className={styles.list}>
                { serviceLists.map((list) => (
                    <Link href={list.link} key={list.id} className={styles.item}>
                        <img src={list.image} className={styles.image} />
                        <h3 className={styles.title}>{list.title}</h3>
                        <p className={styles.text}>{list.desc}</p>
                    </Link>
                ))
                }
            </div>
            </div>
            
        </>
    )
}