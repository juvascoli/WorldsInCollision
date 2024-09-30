import Image from "next/image"

export default function notError() {
    return (
        <div>
            (Loading...)
            <figure>
                <Image src="./images/404-page.jpg"
                    width={500}
                    height={500}
                    alt={"error"} />
                <figcaption>Erro 404</figcaption>
            </figure>
        </div>
    )
}