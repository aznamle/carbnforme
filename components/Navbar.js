import React, {useState, useEffect } from 'react'
import Link from 'next/link'

function Navbar() {
    const [isExpanded, toggleExpansion] = useState(false)
    const closeMobileMenu = () => toggleExpansion(false);

    return (
      <nav className="flex items-center justify-between lg:justify-around flex-wrap bg-white p-6 shadow-md">
        <div className=" flex-shrink-0 text-white mr-6">
        <div className="text-black flex items-center hover:text-gray-200 transition ease-in-out duration-300">
                <Link href="/">
                    <a className='font-semibold text-xl lg:text-2xl md:text-xl' onClick={closeMobileMenu}><strong>C A R B N </strong>F O R M E</a>
                </Link>
            </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-3 rounded text-black border-white hover:text-gray-200 hover:border-white transition ease-in-out duration-500">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full lg:flex lg:items-center lg:w-auto`}>
          <div className="lg:flex-grow">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4">
              <Link href="/products">
                <a className="font-light text-md lg:text-xl md:text-l  hover:text-gray-200 transition ease-in-out duration-300" onClick={closeMobileMenu}>PRODUCTS</a>
              </Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4">
              <Link href="/process" >
                <a className="font-light text-md lg:text-xl md:text-l  hover:text-gray-200 transition ease-in-out duration-300" onClick={closeMobileMenu}>PROCESS</a>
              </Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4">
              <Link href="/about">
                <a className="font-light text-md lg:text-xl md:text-l  hover:text-gray-200 transition ease-in-out duration-300" onClick={closeMobileMenu}>ABOUT US</a>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar
