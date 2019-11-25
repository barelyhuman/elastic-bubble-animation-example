import React, { useEffect, useRef } from "react";
import ElasticBubbleAnimation from 'elastic-bubble-animation';
import { render } from "react-dom";

const App = () => {

    const bubbleContainerRef = useRef(null);

    useEffect(() => {
        const bubble = new ElasticBubbleAnimation({
            el: bubbleContainerRef.current,
            bubbleSize: "25px"
        });

        bubble.init();
    }, [])

    return (
        <div ref={bubbleContainerRef} className="bubble-container" style={{ height: "400px", width: "500px" }}>

        </div>
    )
};

render(<App />, document.getElementById("app"));
