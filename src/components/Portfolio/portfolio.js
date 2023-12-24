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
            link: "https://zeesblog.com.ng",
            body: {
                projectFeatures: [
                    "Users can create accounts, log in, and secure their personal information.",
                    "Admin can create and publish blog posts, sharing their thoughts and ideas with the community.",
                    "Users can interact with blog posts by leaving comments, facilitating discussions and engagement.",
                    "Users can express their appreciation for blog posts by liking them.",
                    "GSAP animations are incorporated to provide an engaging and visually appealing user interface.",
                    "Redux manages application state, ensuring data consistency and seamless user interactions.",
                    "JavaScript is used to interact with external APIs, enabling dynamic content and real-time updates.",
                    "The web app is designed to be fully responsive, ensuring a great user experience on various devices.",
                ],
                projectStory: "Led a dynamic team to bring to life a vibrant blog website capturing the essence of navigating the tumultuous journey of one's twenties. Collaborating seamlessly with a skilled backend engineer, a creative UI/UX designer, and a talented content writer, we crafted an immersive digital space that resonates with the lived experiences, challenges, and triumphs of those navigating the thrilling and transformative path of being a 20-something. The fusion of technical expertise, innovative design, and compelling content resulted in a platform that not only engages but also connects with a diverse audience on the intricacies of this pivotal life stage.",
            }
        },
        {
            id: 2,
            imgSrc: bitshubImg,
            title: "BITSHUB",
            description: "Online Marketplace",
            techs: "Reactjs / Redux / Tailwind",
            link: "https://bitshub-frontend-eta.vercel.app/",
            body: {
                projectFeatures: [
                    "Users can create accounts, log in, and secure their personal information.",
                    "Vendors can create stores and post their merchadise, showcasing their products and their prices",
                    "Users can interact with different products like adding an item to cart, adding an item to 'favourites', track an ordered item and so much more.",
                    "Tailwind CSS is incorporated to provide an engaging and visually appealing user interface.",
                    "Redux manages application state, ensuring data consistency and seamless user interactions.",
                    "JavaScript is used to interact with external APIs, enabling dynamic content and real-time updates.",
                    "The web app is designed to be fully responsive, ensuring a great user experience on various devices.",
                ],
                projectStory: "Joining a dynamic startup, I played a key role in a cross-functional team that included both frontend and backend developers—an IT squad. Our collective mission was to develop a cutting-edge eCommerce marketplace specifically designed for gadgets. With a focus on user experience and seamless functionality, we aimed to create an online space that caters to the needs and passions of gadget enthusiasts. It was an exciting journey, collaborating with diverse talents to bring this innovative platform to life in the ever-evolving landscape of digital commerce.",
            }
        },
        {
            id: 3,
            imgSrc: tPortfolioImg,
            title: "Toheeb Oladeinde",
            description: "Personal Portfolio",
            techs: "HTML5 / CSS3 / Javascript",
            link: "https://toheeboladeinde.xyz/",
            body: {
                projectFeatures: [
                    "I revamped the website's cross-browser compatibility to ensure a consistent user experience across all browsers.",
                    "Built the website with HTML5, CSS3 and JavaScript, facilitating smooth animations for nice user experience, responsiveness and interaction."
                ],
                projectStory: "Crafted a captivating portfolio website that showcases the diverse talents of a visionary creative writer and accomplished content strategist. From innovative design to compelling content, the platform reflects the multifaceted brilliance of a creative mind and a strategic storyteller, offering visitors an immersive experience into the world of words and strategic narratives.",
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
            id='portfolio'
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