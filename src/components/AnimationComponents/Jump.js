import React, { } from 'react';

import TextSpan from './TextSpan';
const Jump = () => {
    const sentence1 = "Hi".split("");
    const sentence2 = " I'm  Shahid,".split("");

    return (
        <div className='text-center flex'  >
            <span className='flex'>
                {
                    sentence1.map((letter, index) => {
                        return (

                            <TextSpan key={index}>
                                {letter}
                            </TextSpan >

                        )
                    })
                }
            </span>
            <div className='text-primary'>!</div>
            <span className='flex'>
                {
                    sentence2.map((letter, index) => {
                        return (

                            <TextSpan key={index}>
                                {letter}
                            </TextSpan >

                        )
                    })
                }
            </span>

        </div>
    );

}

export default Jump;
