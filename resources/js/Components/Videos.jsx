import video from "../../../public/Assets/Videos/y2mate.com - Black Adam  Official Trailer 1_1080p.mp4"


export default function Videos(params) {

    return (
        <>
            <video className={`w-full max-w-full h-auto `} autoPlay muted loop  >
                <source
                    src={video}
                    type="video/mp4"
                    className={`w-full max-w-full h-auto `}
                    autoPlay muted loop
                />
            </video></>
    )

}
