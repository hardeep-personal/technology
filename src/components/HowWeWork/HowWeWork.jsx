import React from 'react'
import './HowWeWork.scss'
import girlWithPc from '../../Images/girlWithPC.png'

const data = [
    {
        num: "1",
        words: "Expand your Reach"
    },
    {
        num: "2",
        words: "Annualized Growth"
    },
    {
        num: "3",
        words: "Book Your Providers"
    },
]

const HowWeWork = () => {
    return (
        <>
            <div className=' lg:pt-20 pt-10 lg:pb-16 pb-10'>

                <div className='lg:w-4/5 w-11/12 m-auto  lg:flex lg:justify-between '>
                    <div className='lg:text-start text-center'>
                        <div className='custom-font-24 text-4xl'>How We Work?</div>

                        {data.map((item, index) => (
                            <div className='mt-10'><span className='custom-blue-btn text-white mr-3 px-4 py-2 rounded-md '>{item.num}</span> {item.words}</div>

                        ))}
                    </div>
                    <div className='girlWithPc lg:mt-0 mt-10 flex justify-center'>
                        <img src={girlWithPc} alt='girlWithPc' className='custom-img-height' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowWeWork