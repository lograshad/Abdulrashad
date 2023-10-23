import './contact.css';
import gif from '../../Gifs/batman.gif';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import cn from "classnames";
import SplitText from "../../utilities/SplitText.min.js";
import useOnScreen from '../../utilities/useOnScreen';

const Contact = () => {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);
    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen])
    useEffect(() => {
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
    }, [reveal]);
    const arrowRef = useRef(null);
    const animate = () => {
        gsap.fromTo(arrowRef.current, {
            x: "0%",
        }, {
            x: "50%",
            ease: "elastic.out(1, 0.4)",
            duration: 0.7,
        })
    }
    return (
        <div className="contact-stn">
            <div className="hello">hello!</div>
            <div className={cn("bod", { 'is-reveal': reveal })}>
                <div id='split-text'>contact</div>
                <div id='split-text2' ref={ref}>me</div>
                <div className="gif-wrapper">
                    <img src={gif} alt="" />
                </div>
                <div className="contact-phrase">
                    "Justice never sleeps"
                </div>
                <div className="arrow-link-primary-wrapper">
                    <div className="arrow-link-wrapper" ref={arrowRef} onMouseEnter={animate}>
                        <i className='bx bx-arrow-back bx-rotate-180' ></i>
                        <i className='bx bx-arrow-back bx-rotate-180' ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;