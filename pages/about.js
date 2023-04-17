import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styles  from '../styles/Page.module.css';

export default function About() {
    return (
        <>
            <Header />
                <div className={styles.page}>
                    <header className={styles.heading}>
                        <h2 className={styles.title}>About</h2> 
                    </header>
                    <main className={styles.article}>
                        <p>Ved Digiconnect founded in 2022 is a Digital Marketing agency based in Mumbai (Maharashtra). We provide Digital Marketing services to our clients. With a major focus on Integrated Digital Marketing, our main aim is to help our clients to market their products & services digitally to the targeted audience which will lead to sales & revenue generation. </p>

                        <p>In today’s digital world, a digital presence is extremely important for any business. We will help businesses to build their brand online by making use of various digital marketing modules like Social Media Ads, SEO, Website Development, and Lead generation to name a few. </p>

                        <p>We will help clients in building trust among the target audience by sharing high-quality & value-added content online on a consistent basis. Trust & authority of a brand leads to natural Sales & we at Ved Digiconnect follow this simple method for digital marketing. </p>

                        <p>We also believe in developing long-lasting relationships with our clients by providing them with excellent online services. Our Team of talented & dedicated individuals having digital marketing expertise will ensure that the quality of service is maintained all the time. We are constantly updating with the latest technological advancements & are committed to delivering our clients the Numero Uno service that will enable them to fulfil their business goals. </p>

                        <h3>Our Vision </h3>

                        <p>We will ensure that our clients make the best use of ever-evolving digital marketing technologies which will enable them to  build stronger online influence & seize growth opportunities in today’s digital world.</p>

                        <h3>Mission: </h3>
                        <p>We aim to spread happiness & satisfaction among our clients by helping them achieve their financial & personal goals. Through Ved Digiconnect we are thriving to promote professionalism, integrity, and honesty across the planet through the way we conduct our business. </p>
                    </main>
                </div>
            <Footer />
        </>
    )
}