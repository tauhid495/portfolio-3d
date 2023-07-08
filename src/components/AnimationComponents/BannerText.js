import React, { } from 'react';
import TextScramble from 'react-textscramble';

export default function BannerText() {

    // phrases list and freeDuration for TextScramble. Defined here just for
    // visibility
    let phrases = [
        'Web developer',
        'Web desiner',
        'Graphics desiner'
    ];

    return (


        <TextScramble
            phrases={phrases}
            freezeDuration={3500}
            isInfiniteLoop
        />


    )
}

