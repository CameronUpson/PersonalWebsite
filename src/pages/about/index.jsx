import React from 'react';
import Terminal from '../../components/terminal';

function About() {
    const messages = [
        'Self taught and self motivated programmer, located in Hamilton, Ontario.',
        "Introduced to Java around 2014 by creating scripts for a premade application with it's provided API",
        'Experience in reverse engineering; de-obfuscating code, renaming disguised class field and method names, implemented API layer over injected methods.',
        'My projects with websites were created with a mixture of Spring Boot and NodeJS for the backend, and CSS, JavaScript (React), and HTML for the frontend.',
    ];

    return(
        <>
            <Terminal name="cameron@upson.me" messages={messages} />
            <div className='text-center text-bold text-xl py-10 w-min-content text-white'>
                This website was created with ReactJS and tailwind css, view on <a href='https://github.com/CameronUpson/PersonalWebsite' className='text-emerald-200'>GITHUB</a>
            </div>
        </>
    )
}

export default About