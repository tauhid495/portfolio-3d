import React from 'react';
import { motion } from "framer-motion";
import hero from '../asset/hero.png';


const BannerImg = () => {

    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 m-auto h-80 w-80'>
            {/* <motion.div
                animate={{
                    // x: [0, 10, 0],
                    // scale: [],

                    // transition: { duration: 6, repeat: Infinity }
                }}
            > */}
            <motion.div
                animate={{
                    y: [0, 10, 0,],
                    scale: [1.2],
                    transition: { duration: 5, repeat: Infinity }
                }}
            >
                <img className='mx-auto w-60 h-60 md:h-80 md:w-80 drop-shadow-lg' src={hero} alt='' />
            </motion.div>
            {/* </motion.div> */}
        </div>
    );
};

export default BannerImg;