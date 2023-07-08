import React, { useState } from 'react';
// import { motion } from 'framer-motion'
import RubberBand from 'react-reveal/RubberBand';

const TextSpan = ({ children }) => {
    const [when, setWhen] = useState(false);
    const handleIn = () => {
        setWhen(true);
    }
    const handleOut = () => {
        setWhen(false);
    }

    return (
        <div >

            <RubberBand when={when}>
                <p style={{ cursor: 'pointer' }} onMouseOver={() => handleIn()} onMouseOut={() => handleOut()} className={`${when ? 'text-primary' : null}`}>
                    {children}
                </p>
            </ RubberBand>
        </div>
    );
};

export default TextSpan;