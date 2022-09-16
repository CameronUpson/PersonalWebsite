import React from 'react';

import { Link } from 'react-router-dom';

function NavLink(props) {
    return(
        <li>
            <Link to={props.to} className={'block caret-transparent py-2 pr-4 pl-3 text-green-400 bg-gray-800 rounded md:bg-transparent md:p-0 ' + props.className} aria-current={props.current}>
                {props.text}
            </Link>
        </li>
    )
}

function NavBar() {
    return(
        <nav className='px-2 sm:px-4 py-2.5 rounded'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='flex md:order-2'>
                    <button data-collapse-toggle='navbar-cta' type="button" className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls="navbar-cta" aria-expanded="false">
                        <span className='sr-only'>Open main menu</span>
                        <svg className='w-6 h-6' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className='hidden justify-between mx-auto items-center w-full md:flex md:w-auto md:order-1' id="navbar-cta">
                    <ul class='flex flex-col p-4 mt-4 rounded-lg border bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700'>
                        <NavLink text='About' to='/' current="page" />
                        <NavLink text='Skills' to='/skills' current="" />
                        <NavLink text='Projects' to='/projects' current="" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar