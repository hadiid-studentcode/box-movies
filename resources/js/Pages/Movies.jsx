import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import logo from "../../../public/Assets/Images/logo/boxMovies.png";


export default function Movies(props) {
    const title = props.title;
    return (
        <>
            <Head title={title} />
            <Header/>

            <h1>Movies</h1>
        </>
    )
}
