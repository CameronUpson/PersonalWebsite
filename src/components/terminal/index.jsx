import React from 'react';

function Message(props) {
    return(
        <p className='flex-1 typing items-center pl-2'>
            {props.text}
            <br/>
        </p>
    )
}

function Terminal(props) {
    return(
        <div className='coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden mx-auto w-full md:w-7/12'>
            <div className="top mb-2 flex">
                <div className='h-3 w-3 bg-red-500 rounded-full'></div>
                <div className='ml-2 h-3 w-3 bg-orange-300 rounded-full'></div>
                <div className='ml-2 h-3 w-3 bg-green-500 rounded-full'></div>
            </div>
            {props.messages.map(txt => {
                return <div className='mt-4 flex'>
                    <span className='text-green-400'>{props.name}:~$</span>
                    <Message text={txt} />
                </div>
            })}
        </div>
    )
}

export default Terminal