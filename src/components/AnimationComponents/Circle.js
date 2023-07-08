import React from 'react';

const Circle = () => {
    return (
        <div>
            <div className='absolute top-14 md:-top-40 left-36 md:left-24 opacity-40 w-36 md:w-[300px] h-36 md:h-[300px] border-[2px] rounded-full bg-cyan-600'></div>
            <div className='animate-[ping_3s_linear_infinite] absolute top-14 md:-top-40 left-36 md:left-24 opacity-20 w-36 md:w-[300px] h-36 md:h-[300px]  rounded-full bg-cyan-600'></div>
        </div>
    );
};

export default Circle;