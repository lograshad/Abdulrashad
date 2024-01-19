import Contact from "../../components/ContactMe/contact";
import NavBar from "../../components/NavBar/navbar";
import "./about.css";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="my-name">Abdulrasheed Ìyàndá</div>
            <div className="year">2023 portfolio.</div>
            <NavBar />
            <motion.div
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .3
                    }
                }}
                className="content">
                <motion.div
                    initial={{
                        y: 30,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: [0.6, 0.01, 0.1, 0.9],
                        },
                    }}
                    className="pre-header">behind the mask</motion.div>
                <motion.div
                    initial={{
                        y: 80,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: [0.6, 0.01, 0.1, 0.9],
                            delay: .25,
                        },
                    }}
                    className="header">
                    I'm a Front End developer, focused on delighting clients with innovative, user-friendly websites, web apps and mobile apps. I use my knowledge and abilities to support forward thinking development teams.
                </motion.div>
                <motion.div
                    initial={{
                        y: 80,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: [0.6, 0.01, 0.1, 0.9],
                            delay: .5,
                        },
                    }}
                    className="preamble">
                    Over the past three years I have collaborated with several clients in and out of africa, rising startups and an IT Company, as a frontend developer, working solo and also leading small development teams. And when the code takes a breather you can find me drawing, playing football or protecting the city of gotham.
                </motion.div>
                <section className="servicesNskills">
                    <div className="services-container">
                        <div className="title">Services</div>
                        <div className="items">
                            Web Development <span>/</span> Mobile Development <span>/</span> Superhero for Hire
                        </div>
                    </div>
                    <div className="skills-container">
                        <div className="title">Skills and Tools</div>
                        <div className="items">
                            JavaScript <span>/</span> React <span>/</span> React-Native <span>/</span> Git <span>/</span> JSX <span>/</span> GSAP <span>/</span> Framer-Motion <span>/</span> CSS3 <span>/</span> Bootstrap <span>/</span> Tailwind <span>/</span> Ninjutsu <span>/</span> Batmobile
                        </div>
                    </div>
                </section>
            </motion.div>
            <Contact/>
        </div>
    );
}

export default AboutMe;