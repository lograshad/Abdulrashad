import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./preloader.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Preloader = () => {
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    // const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
    return (
        <div className="preloader-screen">
            <div className="my-name">Abdulrasheed Ìyàndá</div>
            <div className="middle-content">
                <div className="logo-img-wrapper">
                    <Link to="/home">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={transition}
                            exit={{ scale: 1 }}
                            src={BatLogo} alt="batman logo in sky" />
                    </Link>
                </div>
                <motion.div 
                exit={{opacity:0}}
                transition={transition}
                className="img-name">ra's al gul</motion.div>
                <motion.div 
                exit={{opacity:0}}
                transition={transition}
                className="date">2023</motion.div>
            </div>
        </div>
    );
}

export default Preloader;