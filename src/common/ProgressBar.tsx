import React, { useState, useEffect } from "react";
import { ProgressBar as PB } from "react-bootstrap";

const ProgressBar = () => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        let p = 0;

        const increment = () => {
            if (p >= 100) {
                p = 100;
                clearInterval();
            }
            else {
                p += Math.floor(Math.random() * 10);
            }

            setProgress(p)
        };

        setInterval(increment, 100);
    }, []);


    return <PB now={progress} />
};

export default ProgressBar;