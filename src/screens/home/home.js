import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
import { gsap } from "gsap";
import { useEffect } from "react";
const Home = () => {
    let tl = gsap.timeline();
    useEffect(() => {
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
        })
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
        </div>
    );
}

export default Home;