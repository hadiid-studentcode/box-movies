import hadiid from "../../../public/Assets/Images/team/hadiid.jpg";
import wa from "../../../public/Assets/Images/icon/whatsapp.svg";
import instagram from "../../../public/Assets/Images/logo/instagram.svg"
import { Link } from '@inertiajs/inertia-react'


export default function Team(){


    return (
        <>
            <div className="p-4 w-full text-center bg-white  border shadow-md sm:p-8 dark:bg-black dark:border-black ">
                <img
                    className="inline-block w-20  rounded-full ring-2 ring-white"
                    src={hadiid}
                    alt="Hadiid"
                />
                <h5 className="mt-3 mb-2 text-3xl font-bold text-gray-900 dark:text-white">Hadiid Andri Yulison
                </h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Founder of box movies web development</p>
                <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="https://api.whatsapp.com/send?phone=6289620569613&text=Hello%2C%20I'm%20here%20about..." className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" target="_blank">

                        <img className="mr-3 w-7 h-7" src={wa} alt="" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Chat on the</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Whatsapp</div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/hadiidandriy12/?hl=id" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" target="_blank">
                        <img className="mr-3 w-10 h-10" src={instagram} alt="" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Get in on</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Instagram</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
