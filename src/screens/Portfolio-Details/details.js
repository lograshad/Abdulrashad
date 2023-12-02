import { useLocation } from "react-router-dom";
import "./details.css";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import 'boxicons';


const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};
const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};
const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};
const Details = () => {

    const location = useLocation();
    const detail = location.state.item
    return (
        <motion.div
            initial={{
                height: '100vh'
            }}
            animate={{
                height: "max-content",
                transition: { delay: 1.5, ...transition },
            }}
            className="portfolio-details-page">
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: .3, ease: [0.6, 0.01, 0.05, 0.9] }
                }}
                className="caption-text">
                <div className="caption-description">{detail.description}</div>
                <div className="techs">{detail.techs}</div>
            </motion.div>
            <div className="portfolio-title">{detail.title === "Zee's Blog" ? (
                <motion.div className="titles">
                    <motion.span className="first">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >Z</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.05, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >'</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .9, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >s</motion.span>
                    </motion.span>
                    <motion.span variants={lastName} className="last">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .9, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >B</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >l</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >o</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.05, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >g</motion.span>
                    </motion.span>
                </motion.div>
            ) : detail.title === "BITSHUB" ? (
                <div className="titles">
                    <motion.span className="first first2">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >B</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.05, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >i</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >t</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >s</motion.span>
                    </motion.span>
                    <motion.span variants={lastName} className="last">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .9, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >h</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >u</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >b</motion.span>
                    </motion.span>
                </div>
            ) : (
                <div className="titles">
                    <motion.span className="first">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >T</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.05, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >o</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >h</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .9, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .85, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >b</motion.span>
                    </motion.span>
                    <motion.span variants={lastName} className="last">
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .9, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >O</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: .95, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >l</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >a</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.05, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >d</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.07, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.09, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >i</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.1, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >n</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.3, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >d</motion.span>
                        <motion.span
                            initial={{
                                y: 400
                            }}
                            animate={{
                                y: 0,
                                transition: { delay: 1.5, duration: .6, ease: [0.6, 0.01, 0.1, 0.9] }
                            }}
                        >e</motion.span>
                    </motion.span>
                </div>
            )
            }</div>
            <motion.div
                initial={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "28vh",
                    width: "24vw",
                    overflow: "hidden",
                }}
                animate={{
                    top: "100vh",
                    transform: "translate(-50%, -100%)",
                    width: "100%",
                    height: "45vh",
                    transition: { delay: 0.35, ...transition },
                    overflow: "hidden",
                }}
                className="portfolio-header-image-container">
                <div className="portfolio-header-image-thumbnail">
                    <motion.div
                        initial={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                        animate={{
                            overflow: "hidden",
                        }}
                        className="portfolio-header-image-wrapper">
                        <motion.img
                            initial={{
                                height: "28vh",
                                width: "24vw",
                            }}
                            animate={{
                                // y: -20,
                                width: "100%",
                                height: "100%",
                                transition: { delay: 0.2, duration: 0.15, },
                            }}
                            src={detail.imgSrc} alt="" />
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className="body"
            initial={{
                display: "none",
            }}
            animate={{
                display: "block",
                transition: {
                    delay: 1,
                    duration: .1,
                }
            }}
            >
                <div className="story-container">
                    <div className="title">Project Insights</div>
                    <div className="story">{detail.body.projectStory}</div>
                </div>
                <div className="feature-container">
                    <div className="title">Project Features</div>
                    <ul className="feature">{
                        detail.body.projectFeatures.map((item) => (
                            <li>{item}</li>
                        ))
                    }</ul>
                </div>
                <a href={detail.link} target="_blank" className="live-link">
                    <span>Check it Out</span>
                    <i className='bx bx-arrow-back'></i>
                </a>
            </motion.div>
        </motion.div >
    );
}

export default Details;

