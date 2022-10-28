import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "../../../public/Assets/Images/logo/boxMovies.png";

export default function Welcome(props) {
    return (
        <>
            <BrowserRouter>
                <Head>
                    <title>Home</title>
                    <link rel="icon" href={logo} />
                </Head>

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
    return (
        <>
            <h1>Home</h1>
        </>
    );
}

function About(params) {
    return (
        <>
            <h1>About</h1>
        </>
    );
}

function Contact(params) {
    return (
        <>
            <h1>Contact</h1>
        </>
    );
}
