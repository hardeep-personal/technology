import React from 'react'
import './Team.scss'
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";


const teams = [
    {
        image: "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        name: "Micheal jackson",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quisquam deleniti dolores ad sequi praesentium dolore neque commodi incidunt? sequi praesentium dolore neque commodi incidunt?"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ92-QmsrGKSJOPlsZ7ywBGJQA1oVd2qajRbsIqIIa3lIdaAOL_0OHpI32O2JegHXV2d8&usqp=CAU",
        name: "Oprah Vinfrey",
        position: "Head of department",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quisquam deleniti dolores ad sequi praesentium dolore neque commodi incidunt? sequi praesentium dolore neque commodi incidunt?"
    },
    {
        image: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
        name: "Leonardo",
        position: "Head of department",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quisquam deleniti dolores ad sequi praesentium dolore neque commodi incidunt? sequi praesentium dolore neque commodi incidunt?"
    },
    {
        image: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
        name: "Jerry Seinfeld",
        position: "Head of department",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quisquam deleniti dolores ad sequi praesentium dolore neque commodi incidunt? sequi praesentium dolore neque commodi incidunt?"
    }
]


const Team = () => {
    return (
        <>
            <div className='lg:py-16 py-10 custom-blue-bg'>
                <div className='w-4/5 m-auto text-center'>
                    <button className='new-event-btn px-3 py-1 rounded-3xl lg:text-sm  font-bold'>Our Team</button>
                    <div className='custom-font-24 lg:text-4xl text-2xl lg:mb-5 lg:mt-3 mt-2 mb-4'>Meet our awesome team</div>
                    <div className='custom-font-grey lg:text-lg text-sm'>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, libero.
                        </div>
                        <div>Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className='lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 lg:gap-10 gap-6 lg:my-10 my-6' >

                    {teams.map((item, index) => (
                        <>
                            <div className="bg-white px-6 py-10">

                                <div className='flex items-center'>
                                    <div className="user-img "><img src={item.image} alt='user-image' /></div>
                                    <div className='mx-3'>


                                        <div className='font-bold custom-navy-blue text-lg '>{item.name}</div>
                                        <div className='custom-Blue-Font font-medium text-sm'>{item.position}</div>
                                    </div>
                                </div>
                                <div className='my-3 custom-font-grey'>
                                    <div>{item.review}</div>
                                </div>
                                <div className='my-2 custom-Blue-Font flex'>
                                    <span ><BiLogoFacebook /></span> <span className='mx-2'><BsInstagram /></span>
                                </div>
                            </div>

                        </>
                    ))}



                </div>
            </div>


        </>
    )
}

export default Team