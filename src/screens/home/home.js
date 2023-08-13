import { useEffect, useState } from "react";
import Preloader from "../../components/preloader/preloader";

const Home = () => {
    const [killPreloader, setKillPreloader] = useState(false);

    // temporary loader until image loading is implented
    useEffect (() => {
        setTimeout(() => {
            setKillPreloader(true)
        }, timeout);
    }, [3000])
    return ( 
        <div>
            {
            killPreloader 
            ? 
            <div className="home-screen"></div>
             : 
             <Preloader/> 
             }
        </div>
     );
}
 
export default Home;