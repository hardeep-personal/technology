import React from 'react'
import './Navbar.css'




const Navbar = () => {


    const Navbar = [{
        name: "Home"
    },
    {
        name: "About Us"
    },
    {
        name: "Services"
    },
    {
        name: "Company"
    }, {
        name: "Blog"
    },
    {
        name: "Contact"
    }

    ]

    return (
        <div className='md:flex bg-red-100 py-12 bg-slate-100 w-full custom-font-poppins'>
            <div className='w-1/4 lg:block hidden'>

            </div>
            <ul className='list-none md:flex hidden lg:justify-between justify-evenly items-center lg:w-2/4 w-3/5 '>
                {Navbar.map((item, index) => <li key={index} >{item.name} </li>)}
            </ul>
            <div className='flex lg:justify-center justify-end lg:w-1/4 md:w-2/5 '>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-2 rounded">
                    Log In
                </button>
                <button class="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Sign Up
                </button>

            </div>

        </div>
    )
}

export default Navbar