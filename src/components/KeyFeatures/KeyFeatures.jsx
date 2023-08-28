import React from 'react'
import './KeyFeatures.scss';
import boyGirlIMage from "../../Images/boyGirlPC.png"
import expand from '../../Images/expand.png'
import key from '../../Images/key.png'
import growth from '../../Images/growth.png'


const data = [
    {
        num: expand,
        heading: "Expand Your reach",
        words: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facilis officia modi  rerum voluptate, aspernatur sunt veniam incidunt nemo! "
    },
    {
        num: growth,
        heading: "Annualized Growth",

        words: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facilis officia modi  rerum voluptate, aspernatur sunt veniam incidunt nemo!        "
    },
    {
        num: key,
        heading: "Book Your Providers",
        words: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facilis officia modi  rerum voluptate, aspernatur sunt veniam incidunt nemo!"

    },
]

const KeyFeatures = () => {
    return (
        <>
            <div className=' lg:pb-16 pb-8'>
                <div className='lg:w-4/5 w-11/12 m-auto lg:flex block lg:justify-between '>


                    <div className='girlWithPc lg:w-2/5 w-full flex lg:items-center justify-center mx-auto'>
                        <img src={boyGirlIMage} alt='girlWithPc' className='custom-img-height' />

                    </div>
                    <div className=' lg:ml-20 flex lg:justify-end justify-center  '>
                        <div className='lg:w-4/5 full '>
                            <div className='lg:text-start text-center '>

                                <button className='new-event-btn px-3 py-1 rounded-3xl text-sm	lg:my-4 my-3 font-bold'>Why choose us</button>

                                <div className='custom-font-24 text-4xl'>Key Features</div>
                            </div>

                            {data.map((item, index) => (
                                <div className='mt-10 flex '>
                                    <div className=' text-white mr-3 px-4 py-2 rounded-md self-start	'><img src={item.num} alt="logos" className='w-24' /></div>
                                    <div>
                                        <div className='font-bold custom-navy-blue text-2xl'>
                                            {item.heading}
                                        </div>
                                        <div className='custom-font-grey'>

                                            {item.words}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures