import Image from "next/image"

import errorImage from "../../public/images/404-page.jpg"
import Link from "next/link"

export default function notError() {
    return (
        <section className="flex flex-col items-center justify-center mt-12 text-neutral-50">
            <h2 className="text-3xl m-4">OPS! error 404! Page not Found</h2>
            <figure>
                <Image src={errorImage}
                    width={900}
                    height={900}
                    alt={"error"} />
                <figcaption className="text-center text-2xl">Erro 404</figcaption>
            </figure>
            <Link href={"/"} className="text-3xl m-16">Voltar para Pagina principal</Link>
        </section>
    )
}