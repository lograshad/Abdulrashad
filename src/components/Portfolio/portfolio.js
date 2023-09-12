import './portfolio.css';
import zeesblogImg from "../../images/zee.jpeg";
import tPortfolioImg from "../../images/tee.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Gallery from './gallery';

// add skew
// add snapping

const Portfolio = ({ src, index, columnOffset }) => {
    const gallery = [
        {
            id: 1,
            imgSrc: zeesblogImg,
            title: "Zee's Blog",
            description: "Lifestyle Blog",
            techs: "React / GSAP",
        },
        {
            id: 2,
            imgSrc: tPortfolioImg,
            title: "Toheeb Oladeinde",
            description: "Personal Portfolio",
            techs: "HTML5 / CSS3 / Javascript",
        },
        {
            id: 3,
            imgSrc: tPortfolioImg,
            title: "Toheeb Oladeinde",
            description: "Personal Portfolio",
            techs: "HTML5 / CSS3 / Javascript",
        },
    ]
    const triggerRef = useRef(null);
    const portRef = useRef(null);
    const horizontalStn = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const [counter, showCounter] = useState(null);
    useEffect(()=> {
        const pin = gsap.fromTo(horizontalStn.current, {
            translateX: 0
        }, {
            translateX: "-210vw",
            ease: "none",
            duration: "1",
            delay: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.5,
                pin: true,
            },
            onStart: () =>{showCounter(true)},
            onComplete: () =>{showCounter(false)}
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
        })

        return ()=> {
            pin.kill();
            reveal.kill();
        }
    }, []);
    const [activeImage, setActiveImage] = useState(1);
    const handleUpdateActiveImage = (index) => {
        setActiveImage(index + 1);
      };
    return (
        <div className="portfolio-container" ref={portRef}>
            <div className={counter ? ('positionFixed') : ('counter')}>
                <div className="current-index">{activeImage}</div>
                <span></span>
                <div className="length">3</div>
            </div>
            <div ref={triggerRef}>
                <div className="horizontal-wrapper" ref={horizontalStn}>
                    {gallery.map((item, index) => (
                        <Gallery
                            key={item.id}
                            index={index}
                            item={item}
                            updateActiveImage={handleUpdateActiveImage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;