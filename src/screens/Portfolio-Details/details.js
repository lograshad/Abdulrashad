import { useLocation } from "react-router-dom";
import "./details.css";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const Details = () => {
    const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
    const location = useLocation();
    const detail = location.state.item
    let tl = gsap.timeline();
    const [content, showContent] = useState(false);
    return (
        <motion.div
        initial={{
            
        }}
         className="portfolio-details-page">
            <motion.div
                initial={{
                    opacity: 0
                }}
                className="caption-text">
                <div className="caption-description">{detail.description}</div>
                <div className="techs">{detail.techs}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} className="portfolio-title">{detail.title}</motion.div>
            <motion.div
                initial={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // background: "red",
                }}
                className="portfolio-header-image-container">
                <div className="portfolio-header-image-thumbnail">
                    <motion.div
                        initial={{
                            height: "70vh",
                            width: "60vw",
                            scale: .4,
                        }}
                        className="portfolio-header-image-wrapper">
                        <motion.img
                            initial={{
                                width: "100%",
                                height: "100%",
                            }}
                            src={detail.imgSrc} alt="" />
                    </motion.div>
                </div>
            </motion.div>
            <div className="body">
                <div className="story-container">
                    <div className="title"></div>
                    <div className="story">{detail.projectStory}</div>
                </div>
                <div className="feature-container">
                    <div className="title"></div>
                    <div className="feature">{detail.projectFeatures}</div>
                </div>
                <div className="techTalk-container">
                    <div className="title"></div>
                    <div className="techTalk">{detail.techTalk}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default Details;

