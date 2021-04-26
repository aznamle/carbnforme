import React from 'react'

const ContactForm = ({ slice }) => {
    return (
                <div className="text-gray-700 ">
                    <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
                        <div
                            className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0">
                            <div className="relative ">
                                <label for="email" className="text-sm leading-7 text-gray-600">Email</label>
                                <input type="email" id="v" name="email" placeholder="email"
                                    className="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative ">
                                <label for="name" className="text-sm leading-7 text-gray-600">Name</label>
                                <input type="name" id="name" name="name" placeholder="name"
                                    className="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative ">
                                <textarea type="message" id="message" name="message" placeholder="message"
                                    className="w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
                            </div>
                            <button
                                className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Submit</button>
                        </div>
                    </div>
                </div>
                                            
    )
}

export default ContactForm
