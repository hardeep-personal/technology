import React from 'react'
import './Header.scss'
import Image1 from '../../Images/manWithDog.png'
import Image2 from '../../Images/girlWithBox.png'
import six from '../../Images/six.png'
import { HiMail } from 'react-icons/hi';
import { BiSolidUser } from 'react-icons/bi';



const Header = () => {
    return (
        <>
            <div className='bg-slate-100 custom-font-poppins'>
                <div className='flex justify-center '>
                    <div className='w-1/4 lg:block hidden'>
                        <img src={Image1} alt='boyWithDog' />
                    </div>
                    <div className='list-none text-center lg:w-2/4 w-11/12 '>
                        <button className='new-event-btn px-3 py-2 rounded-3xl text-sm	'>New event</button>
                        <div className='pt-3'>
                            <div className='lg:text-6xl md:text-5xl text-4xl bigger-font'>

                                <div className='pb-3' >
                                    Exclusive <span className='custom-blue-font'>Agency</span> for
                                </div>
                                <div className='pb-3'>
                                    technology solution
                                </div>
                            </div>
                            <div className='custom-font-grey py-6'>We are <span className='custom-blue-font'>Monst</span>, a Creatie Design Social Marketing|</div>
                            <div className='custom-form lg:flex block justify-evenly'>
                                <div className='custom-input flex  bg-white rounded' >
                                    <span className=' self-center mx-4'>
                                        <HiMail className='h-6 w-6' />
                                    </span>
                                    <input type="text" name="email" id="email" placeholder='Type your e-mail' className='' />
                                </div>
                                <div className=' bg-white custom-input lg:my-0 my-4 flex rounded'>
                                    <span className=' self-center mx-4'>
                                        <BiSolidUser className='h-6 w-6' />
                                    </span>


                                    <input type="password" name="password" id="password" placeholder='Password' />
                                </div>
                                <div className='custom-input'>  <button class="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">
                                    Register
                                </button></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-1/4 lg:block hidden'>
                        <img src={Image2} alt='girlWithBox' />

                    </div>
                </div>

            </div>
            <div className="bg-slate-100 flex justify-center items-center p-12 custom-border-radius">
                <img src={six} alt='six-name' />
            </div>
        </>
    )
}

export default Header