import React from 'react';
import Terminal from '../../components/dp/terminal';

import RSPeerPic from '../../images/rspeer.png';
import DeobPic from '../../images/deob.png';

function Projects() {
    const messages = [
        'Screenshots below',
        '',
        'RSPeer: Game Automation Client',
        '  - API to allow script creation',
        '  - Mapper Application to map class, field and method names',
        '  - RESTful Website created with Spring for e-commerce and client management',
        '',
        'Deobfuscator: Optimizes code that was transformed to disguise intent',
        '  - Renames illegal naming',
        '  - Optimizes control flow',
        '  - Removes unused classes, fields, methods, parameters and casts',
        '  - Generate Call Graphs and Abstract Syntax Trees',
        '',
        'Squire Plugins',
        '  - Freelance work',
        '  - E-Commerce based application',
        '  - Spring Boot',
        '  - React',
        '  - Tailwinds'
    ];

    return(
        <>
            <Terminal name="cameron@upson.me" messages={messages} />
            <div className='mx-auto w-3/4'>
                <figure className='w-3/4 mx-auto py-10'>
                    <img class="max-w-full h-auto rounded-lg" src={RSPeerPic} alt="RSPeer" />
                    <figcaption class="mt-2 text-sm text-center text-gray-400">RSPeer Automation Client</figcaption>
                </figure>
                <figure class="">
                    <img class="max-w-full h-auto rounded-lg" src={DeobPic} alt="RSPeer" />
                    <figcaption class="mt-2 text-sm text-center text-gray-400">Deobfuscator</figcaption>
                </figure>
            </div>
        </>
    )
}

export default Projects