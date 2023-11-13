import './portfolio.css';
import zeesblogImg from "../../images/zee.jpeg";
import tPortfolioImg from "../../images/tee.jpeg";
import bitshubImg from "../../images/bitshubGirl.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Gallery from './gallery';
import { motion } from "framer-motion";

// add skew
// add snapping

const Portfolio = ({ src, index, columnOffset, updateCurse, updateLeave }) => {
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

    const gallery = [
        {
            id: 1,
            imgSrc: zeesblogImg,
            title: "Zee's Blog",
            description: "Lifestyle Blog",
            techs: "Reactjs / GSAP",
            body: {
                projectFeatures: "",
                projectStory: "",
                techTalk: "",
            }
        },
        {
            id: 2,
            imgSrc: bitshubImg,
            title: "BITSHUB",
            description: "Online Marketplace",
            techs: "Reactjs / Redux / Tailwind",
            body: {
                projectFeatures: "",
                projectStory: "",
                techTalk: "",
            }
        },
        {
            id: 3,
            imgSrc: tPortfolioImg,
            title: "Toheeb Oladeinde",
            description: "Personal Portfolio",
            techs: "HTML5 / CSS3 / Javascript",
            body: {
                projectFeatures: "",
                projectStory: "",
                techTalk: "",
            }
        },
    ]
    const portRef = useRef(null);
    const horizontalStn = useRef(null);
    const pin = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    const [counter, showCounter] = useState(null);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            // Calculate the translation value based on the screen width
            const screenWidth = window.innerWidth;
            const maxTranslateX = (screenWidth + screenWidth); // Adjust 200 to the width of your element
            setTranslateX(maxTranslateX);
        };

        // Call the handleResize function initially and on window resize
        handleResize();
        window.addEventListener('resize', handleResize);
        // console.log(2, translateX);
        const pinAnimation = gsap.fromTo(horizontalStn.current, {
            translateX: 0
        }, {
            translateX: `-65%`,
            ease: "none",
            duration: "1",
            delay: 1,
            scrollTrigger: {
                trigger: horizontalStn.current,
                start: "top top",
                // end: `${window.innerWidth} top`,
                end: `${window.innerWidth} top`,
                scrub: 0.5,
                pin: true,
            },
            onStart: () => { showCounter(true) },
            onComplete: () => { showCounter(false) }
        });
        const reveal = gsap.fromTo(portRef.current, {
            backgroundColor: 'rgb(186, 186, 186, 0)',
        }, {
            backgroundColor: 'rgb(186, 186, 186)',
            ease: "expo.inOut",
            duration: 0.2,
            scrollTrigger: {
                trigger: portRef.current,
                start: "top top",
                end: "bottom top",
            }
        });
        pin.current = pinAnimation;

        return () => {
            pinAnimation.kill();
            reveal.kill();
            window.removeEventListener('resize', handleResize);
        }
    }, [translateX]);
    const [activeImage, setActiveImage] = useState(1);
    const handleUpdateActiveImage = (index) => {
        setActiveImage(index + 1);
    };
    const [selectedItem, setSelectedItem] = useState(null);
    const [translateExit, setTranslateExit] = useState('-0.75%');
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        console.log(element.id);
        if (element.id == 2) {
            setTranslateExit('-31.75%');
        } else if (element.id == 3) {
            setTranslateExit('-62.78%');
        } else {
            setTranslateExit('-0.75%');
        }
    }

    const onItemClick = (index, id) => {
        setSelectedItem(index);
        scrollToElement(`${id}`);
    };
    const killScroll = () => {
        if (pin.current) {
            pin.current.kill();
        }
    };
    return (
        <motion.div
            className="portfolio-container"
            ref={portRef}
            exit={{
                backgroundColor: 'rgb(0, 0, 0)',
            }}
            transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <motion.div
                className={counter ? ('positionFixed') : ('counter')}
                exit={{ opacity: 0 }}
                transition={transition}
            >
                <div className="current-index">{activeImage}</div>
                <span></span>
                <div className="length">3</div>
            </motion.div>
            <motion.div className="horizontal-wrapper" ref={horizontalStn}
                exit={{
                    transform: `translateX(${translateExit})`,
                }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: .6 }}
            >
                {gallery.map((item, index) => (
                    <Gallery
                        key={item.id}
                        index={index}
                        item={item}
                        updateActiveImage={handleUpdateActiveImage}
                        updateCurse={updateCurse}
                        updateLeave={updateLeave}
                        killScroll={killScroll}
                        onItemClick={onItemClick}
                        selectedItem={selectedItem}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Portfolio;