import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BatLogo from "../../Gifs/batmanlogosky.gif";
import "./home.css";
const Home = () => {
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