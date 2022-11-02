import Footers from "@/Components/Footers";
import Header from "@/Components/Header";
import Team from "@/Components/Team";
import Videos from "@/Components/Videos";
import { Head, Link } from "@inertiajs/inertia-react";
import logo from "../../../public/Assets/Images/films/The SpongeBob Movie Sponge on the Run.jpg";

// const films = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },

//     {
//         id: 2,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 3,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },

//     {
//         id: 4,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 5,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },

//     {
//         id: 6,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 7,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },

//     {
//         id: 8,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     // More films...
// ]



export default function Welcome(props) {

    const films = [props.films][0];



    const title = props.title;



    return (
        <>


            <Head title={title} />
            <Header />
            {/* <Videos/> */}
            {/* Film */}
            <div className="bg-black">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-white">There are many movies available !</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {films.map((films) => (
                            <div key={films.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-dark-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={films.imageSrc}
                                        alt={films.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <Link href={"movies/"+films.title}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {films.title}
                                            </Link>
                                        </h3>
                                        {/* <p className="mt-1 text-sm text-white">{films.rating}</p> */}


                                        <div className="flex items-center">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{films.rating} out of 10</p>
                                            {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a> */}
                                        </div>


                                    </div>
                                    <p className="text-sm font-medium text-white"><b>{films.release_year}</b></p>
                                </div>
                            </div>

                        ))}



                    </div>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link
                                href="/movies"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            >
                                More Movies<svg className="w-9 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
            {/* akhir Movies */}
            <Team />
            <Footers />











        </>
    );
}

