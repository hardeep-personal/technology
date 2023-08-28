import React from 'react'
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className='grid md:grid-cols-3 lg:w-3/4 w-4/5 md:gap-10 gap-2 mx-auto lg:pt-16 pt-10'>
                <div className='custom-font-grey'>
                    <div>

                        Helping you maximize operations
                    </div>
                    <div>
                        Management with digitization
                    </div>

                </div>

                <div>
                    <div className='font-bold custom-navy-blue text-lg '>office</div>
                    <div className='my-3 custom-font-grey'>
                        <div>359 hidden valley</div>
                        <div>Road ,NY</div>
                    </div>

                </div>
                <div>
                    <div className='font-bold custom-navy-blue text-lg '>contacts</div>
                    <div className='my-3 custom-font-grey'>
                        <div>(+01) 234 568</div>
                    </div>

                </div>

            </div>
            <div>


                <div className='flex  justify-end lg:w-3/4 w-4/5 m-auto lg:pb-16 pb-10'>
                    <div>

                        <BiLogoFacebook />
                    </div>
                    <div className='mx-4'>

                        <BsInstagram />
                    </div>
                    <div>

                        <BiLogoTwitter />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer