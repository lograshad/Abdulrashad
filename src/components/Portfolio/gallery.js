import useOnScreen from '../../utilities/useOnScreen';
import cn from "classnames";
import { useEffect, useRef } from "react";

const Gallery = ({
    item,
    updateActiveImage,
    index,
}) => {
    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if (onScreen) {
            updateActiveImage(index);
        }
    }, [onScreen, index]);
    return (
        <div key={item.id} className={cn("gallery-item-container", { "is-reveal": onScreen })} ref={ref}>
            <div className="img-wrapper">
                <img src={item.imgSrc} alt="zee's blog" />
            </div>
            <div className="description">
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
                <div className="tech">{item.techs}</div>
            </div>
        </div>
    );
}

export default Gallery;