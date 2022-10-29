import Header from "@/Components/Header";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {

const title = props.title;

    return (
        <>


            <Head title={title} />


            <Header />
            <h1>Welcome</h1>


        </>
    );
}

