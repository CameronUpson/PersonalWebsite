import React from 'react';
import Terminal from '../../components/dp/terminal';

function Skills() {

    const messages = [
        'Languages: Java, JavaScript, HTML, CSS',
        'Frameworks: Spring Boot, Netty, NodeJS, React, Tailwind',
        'Databases: SQL, NoSQL, MySQL, MongoDB'
    ];

    return(
        <>
            <Terminal name="cameron@upson.me" messages={messages} />
        </>
    )
}

export default Skills