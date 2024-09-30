import Image from "next/image"

import errorImage from '@/public/images/404-page.jpg'

export default function notError() {
    return (
        <div>
            OPS! error 404! Page not Found
            <figure>
                <Image src={errorImage}
                    width={500}
                    height={500}
                    alt={"error"} />
                <figcaption>Erro 404</figcaption>
            </figure>
        </div>
    )
}