import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Portfolio from "../../components/Portfolio/portfolio";
import Contact from "../../components/ContactMe/contact";
import NavBar from "../../components/NavBar/navbar";

import cn from "classnames";
import SplitText from "../../utilities/SplitText.min.js";
import useOnScreen from '../../utilities/useOnScreen';

const Home = () => {
    let tl = gsap.timeline();
    const aboutRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const [content, showContent] = useState(false);

    const [reveal, setReveal] = useState(false);
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);
    useEffect(() => {
        if (onScreen) setReveal(true);
    }, [onScreen])

    useEffect(() => {
        tl.to(".logo-img-wrapper", {
            opacity: 0,
            delay: 1.4,
            duration: 0.3,
            ease: "power4.out",
            onComplete: () => { showContent(true) },
        });
        if (reveal) {
            const split = new SplitText("#split-text", {
                type: "lines",
                linesClass: "lineChildren"
            });
            const splitParent = new SplitText("#split-text", {
                type: "lines",
                linesClass: "lineParent"
            });
            gsap.to(split.lines, {
                duration: .3,
                y: 0,
                opacity: 1,
                // stagger: 0.2,
                delay: 0.5,
                ease: "power2",
            });
            const split2 = new SplitText("#split-text2", {
                type: "lines",
                linesClass: "lineChildren"
            });
            const splitParent2 = new SplitText("#split-text2", {
                type: "lines",
                linesClass: "lineParent"
            });
            gsap.to(split2.lines, {
                duration: .3,
                y: 0,
                opacity: 1,
                // stagger: 0.2,
                delay: 0.5,
                ease: "power2",
            });
        }
    }, [tl, reveal]);
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
                    <div
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: .3
                            }
                        }}
                        className={cn("about-body", { 'is-reveal': reveal })}>
                        {/* change This */}
                        <div id='split-text'>
                        I'm a Software developer, focused on delighting clients with innovative, user-friendly websites, web apps and mobile apps. I use my knowledge and abilities to support forward thinking development teams, and in my downtime I protect the city of gotham.
                        </div>
                    </div>
                    <Portfolio
                    />
                    <Contact
                    />
                </motion.div>
            )}
            <div className="mobile-screen-text">
                The Wayne manor is under construction for this screen size.
            </div>
        </div>
    );
}

export default Home;