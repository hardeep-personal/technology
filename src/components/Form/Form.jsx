import React from 'react'
import './Form.scss'

const Form = () => {
    return (
        <>
            <div className='lg:h-full '>
                <div className='py-20'>
                    <div className='text-center custom-font-grey '>
                        contact Us
                    </div>
                    <div className='custom-font-24 text-4xl text-center '>We Will <span className='custom-blue-font'>be glad</span> to hear</div>
                    <div className='custom-font-24 text-4xl text-center '>from your</div>
                    <div className='custom-form lg:w-2/4 w-11/12 m-auto mt-6'>
                        <div className='flex items-center justify-center mb-4'>

                            <label className='font-bold'>Department: </label>
                            <div className='mx-3'>

                                <input type='radio' name='sales' />
                                <label >Support </label>
                            </div>
                            <div>

                                <input type='radio' name='sales' />
                                <label>Sales </label>
                            </div>

                        </div>
                        <div className='custom-input mb-3' >

                            <input type="text" name="subject" id="subject" placeholder='subject' className='custom-blue-bg' />
                        </div>
                        <div className='custom-input mb-3'>


                            <input type="name" name="name" id="name" placeholder='name ' className='custom-blue-bg' />
                        </div>
                        <div className='custom-input mb-3'>


                            <input type="email" name="email" id="email" placeholder='name@example.com' className='custom-blue-bg' />
                        </div>
                        <div className='custom-input mb-3 h-40 bg-red-100	'>

                            <textarea name="comment" placeholder='Message...' className='p-3 w-full h-full resize-none rounded custom-blue-bg ' >
                            </textarea>
                        </div>
                        {/* need to be fixed */}
                        <b>FIx it</b>
                        <div className='custom-input mb-3 flex'>


                            <input type="file" class="custom-file-input custom-blue-bg" id="customFile" name="filename" />
                            <label class="custom-file-label self-start" for="customFile">Browse</label>
                        </div>

                        <div className=' flex justify-between '>
                            <div className='flex items-center'>

                                <input type="checkbox" name="tick" id="tick" className='mr-2' />I agree to terms and conditions.
                            </div>
                            <button class="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form