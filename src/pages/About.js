import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import about from '../assets/about-1.png'
const About = () => {
    return (
        <>
            <Header />
            <div className="about-page">
                <h1>We make investing, easy.</h1>
                <img src={about} alt="" />

                <div className="about-page-text">
                    <h1>About us</h1>
                    <p>Gogi is a investment platform that is changing the way people invest.
                        Founded with the mission of providing individuals with access to the
                        latest investing technology and resources.
                    </p>
                    <p>We offer a range of tools and resources to help individuals achieve their
                        investment goals.
                    </p>
                    <p>Born out of vision to democratize access to powerful AI-driven trading
                        alogorithms, we've created a thriving marketplace exclusively for our
                        members. With a passionate team of experts and a commitment to
                        innovation we're rewriting the rules of trading.
                    </p>
                    <p>Weather you are seasoned investor of just getting started.Gogi is
                        commited to helping you achieve greatness in your investments.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About