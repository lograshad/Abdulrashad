import useOnScreen from '../../utilities/useOnScreen';
import cn from "classnames";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Gallery = ({
    item,
    updateActiveImage,
    index,
    updateCurse,
    updateLeave,
    killScroll,
    onItemClick,
    selectedItem,
}) => {
    const ref = useRef(null);
    const arrowRef = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if (onScreen) {
            updateActiveImage(index);
        }
    }, [onScreen, index]);

    const animate = () => {
        gsap.fromTo(arrowRef.current, {
            x: "0%",
        }, {
            x: "50%",
            ease: "elastic.out(1, 0.4)",
            duration: 0.7,
        })
    }
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate('/batfolio', {state: {item}});
    }
      
    return (
        <motion.div key={item.id} className={cn("gallery-item-container", { "is-reveal": onScreen })} ref={ref}
            exit={{
                // position: 'absolute',
                // top: "50%",
                // left: "50%",
                // transform: 'translate(-50%, -50%)',
            }}
            transition={{ duration: 0.6 }}
            id={`${item.id}`}
        >
            <motion.div
                className={`img-wrapper ${selectedItem === null || selectedItem === index ? 'visible' : 'hidden'}`}
                exit={{
                    // scale: 0.4,
                    position: 'absolute',
                    // top: "50%",
                    // left: "50%",
                    // transform: 'translate(-50%, -50%)',
                    // transformOrigin: '50%, 50%',
                    // scaleZ: 0.4,
                    filter: "grayscale(100%) sepia(20%) brightness(80%)",
                }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 1 }}
            >
                <motion.img src={item.imgSrc} alt=""
                    exit={{
                        scale: .4
                    }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 1 }}
                />
            </motion.div>
            <motion.div
                className="description"
                exit={{ opacity: 0 }}
                transition={transition}
            >
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
                <div className="tech">{item.techs}</div>
            </motion.div>
            <motion.div
                className="arrow-link-primary-wrapper"
                exit={{ opacity: 0 }}
                transition={transition}
            >
                <div id='arrow-pointer' onClick={()=> {
                    killScroll();
                    onItemClick(index, item.id);
                    navigateToDetails();
                }}>
                    <div className="arrow-link-wrapper" ref={arrowRef} onMouseEnter={animate}>
                        <i className='bx bx-arrow-back bx-rotate-180' ></i>
                        <i className='bx bx-arrow-back bx-rotate-180' ></i>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Gallery;