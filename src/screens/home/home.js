import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Portfolio from "../../components/Portfolio/portfolio";
import Contact from "../../components/ContactMe/contact";
import NavBar from "../../components/NavBar/navbar";

const Home = () => {
    let tl = gsap.timeline();
    const aboutRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const [content, showContent] = useState(false);

    useEffect(() => {
        tl.to(".logo-img-wrapper", {
            opacity: 0,
            delay: 1.4,
            duration: 0.3,
            ease: "power4.out",
            onComplete: () => { showContent(true) },
        })
    }, [tl]);
    return (
        <div className="home-page">
            <div className="my-name">Abdulrasheed Ìyàndá</div>
            <div className="year">2023 portfolio.</div>
            <NavBar
            />
            {!content ? (
                <div className="middle-content">
                    <div className="logo-img-wrapper">
                        <img
                            src={BatLogo} alt="batman logo in sky" />
                    </div>
                    <div
                        className="img-name">ra's al gul</div>
                    <div
                        className="date">2023</div>
                </div>
            ) : (
                <motion.div
                    className="normal-content">
                    <motion.div
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: .3
                            }
                        }}
                        className="title-stn">
                        <div className="line-1">
                            <motion.div
                                initial={{
                                    y: 400
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                                }}
                                className="lineChildren">
                                Frontend
                            </motion.div>
                        </div>
                        <div className="line-1">
                            <motion.div
                                initial={{
                                    y: 400
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                                }}
                                className="lineChildren">
                                Developer
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: .3
                            }
                        }}
                        className="scroll-stn">
                        <div id='scroll'>scroll</div>
                        <div className="scroll-indicator"></div>
                    </motion.div>
                    <motion.div
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: .3
                            }
                        }}
                        className="about-body" id='split-text' ref={aboutRef}>
                        {/* change This */}
                        I'm a Software developer, focused on delighting clients with innovative, user-friendly websites, web apps and mobile apps. I use my knowledge and abilities to support forward thinking development teams, and in my downtime I protect the city of gotham.
                    </motion.div>
                    <Portfolio
                    />
                    <Contact
                    />
                </motion.div>
            )}
        </div>
    );
}

export default Home;