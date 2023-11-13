// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitText from "../../utilities/SplitText.min.js";
import Portfolio from "../../components/Portfolio/portfolio";
import Contact from "../../components/ContactMe/contact";
import NavBar from "../../components/NavBar/navbar";

const Home = () => {
    let tl = gsap.timeline();
    const aboutRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const [content, showContent] = useState(false);

    useEffect(() => {
        // Defining split texts
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        const split2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineParent"
        });
        const splitAbout = new SplitText("#split-text", {
            type: "lines",
        });
        const splitParent3 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineParent"
        });
        const aboutContainer = aboutRef?.current
        tl.to(".logo-img-wrapper", {
            borderRadius: "50%",
            duration: 0.5,
            ease: "power4.out",
        }).to('.logo-img-wrapper', {
            width: 15,
            height: 15,
            duration: 0.5,
            ease: "power4.out",
            y: "-50vh",
            x: "-50vw",
            onComplete: () => { showContent(true) }
        }).to(split.lines, {
            duration: .5,
            y: 0,
            opacity: 1,
            ease: "power2",
            stagger: 0.2,
        }, "-=0.9").to(split2.lines, {
            duration: .5,
            y: 0,
            opacity: 1,
            ease: "power2",
            stagger: 0.2,
        }, "-=2.5");
        gsap.to(
            // splitAbout.lines
            aboutContainer
            , {
                duration: 1,
                // delay: 2,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: "power2",
                scrollTrigger: {
                    trigger: aboutContainer,
                    start: "top 70%",
                    scrub: true,
                }
            });
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
                <div className="normal-content">
                    <div className="title-stn">
                        <div className="line-1" id='split-text'>
                            Frontend
                        </div>
                        <div className="line-2" id='split-text2'>Developer</div>
                    </div>
                    <div className="title-stn">
                        <div className="line-1">
                            <div id='split-text'>front</div>
                            <span id='split-text'></span>
                            <div id='split-text'>end</div>
                        </div>
                        <div className="line-2" id='split-text2'>developer</div>
                    </div>
                    <div className="scroll-stn">
                        <div id='scroll'>scroll</div>
                        <div className="scroll-indicator"></div>
                    </div>
                    <div className="about-body" id='split-text' ref={aboutRef}>
                        {/* change This */}
                        I'm a Front End developer, focused on delighting clients with innovative, user-friendly designs. I use my knowledge and abilities to support forward thinking development teams, and in my downtime I protect the city of gotham.
                    </div>
                    <Portfolio
                    />
                    <Contact
                    />
                </div>
            )}
        </div>
    );
}

export default Home;