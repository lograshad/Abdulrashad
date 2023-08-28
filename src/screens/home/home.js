// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitText from "../../utilities/SplitText.min.js";

const Home = () => {
    let tl = gsap.timeline();
    useEffect(() => {
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
        tl.to(".logo-img-wrapper", {
            borderRadius: "50%",
            duration: 0.5,
            ease: "power4.out",
        }).to('.logo-img-wrapper', {
            width: 15,
            height: 15,
            duration: 0.5,
            ease: "power4.out",
            y: "-60vh",
            x: "-60vw",
        }).to('.home-page', {
            display: "block",
            duration: 0.1,
            height: "auto",
            width: "100%",
        })
        .to('.my-name', {
            opacity: 1,
            duration: 0,
        })
        .to('.normal-content', {
            display: 'block',
            duration: 0.1,
        }).to(split.lines, {
            duration: .7,
            y: 0,
            opacity: 1,
            ease: "power2",
            stagger: 0.3,
        }, "-=0.9").to(split2.lines, {
            duration: .7,
            y: 0,
            opacity: 1,
            ease: "power2",
            stagger: 0.3,
        }, "-=0.9");
    }, []);

    return (
        <div className="home-page">
            <div className="my-name">Abdulrasheed Ìyàndá</div>
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
            <div className="normal-content">
                <div className="title-stn">
                    <div className="line-1">
                        <div id='split-text'>front</div>
                        <span id='split-text'></span>
                        <div id='split-text'>end</div>
                    </div>
                    <div className="line-2" id='split-text2'>developer</div>
                </div>
                <div className="scroll-stn" data-scroll-section>
                    <div id='scroll'>scroll</div>
                    <div className="scroll-indicator"></div>
                </div>
                <div className="about-stn">
                    <div className="body" id='about-stn'>
                    {/* change This */}
                        I'm a Front End developer, focused on delighting clients with innovative, user-friendly designs. I use my knowledge and abilities to support forward thinking development teams. I also protect the city of gotham in my free time.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;