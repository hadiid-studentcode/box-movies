import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

// testing Router

import { BrowserRouter, Routes, Route } from "react-router-dom";


// akhir


export default function Welcome(props) {
    return (
        <>


            <BrowserRouter>
            <Head title="Home"/>

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


function Home(params) {
    return(
        <>
        <h1>Home</h1>
        </>
    )
}


function About(params) { return (
    <>
        <h1>About</h1>
    </>
);}



function Contact(params) { return (
    <>
        <h1>Contact</h1>
    </>
);}
