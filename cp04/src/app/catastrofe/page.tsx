import Image from "next/image"
import catastrofe from "../../../public/images/catastrofe.jpg"

export default function Catastrofe() {
  return (
    <section className="flex flex-col h-full bg-black">
        <h2 className="text-center text-5xl text-white p-12">Teoria da catastrofe</h2>
        <div className="flex flex-col items-center justify-center">
            <div>
                <p className="text-white m-auto text-3xl w-1/2 text-center p-12 border-b-4 border-b-white">O russo Immanuel Velikovsky foi um famoso psiquiatra nos anos 1950 e, até hoje, reúne uma série de leitores. O médico defendia que diversos acontecimentos históricos, relatados por diferentes mitologias e pelo Antigo Testamento, eram frutos de movimentos de corpos celestes.</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-16 pt-16">
                <Image src={catastrofe} alt="Cometa" width={800} height={800} className="rounded-[50%] " />
                <p className="text-white text-3xl w-1/2 text-center p-12 mt-16 border-b-4 border-b-white ">Para ele, Vênus era um cometa desprendido de Júpiter que passou perto de diversos objetos em órbita no Sistema Solar. Ao passar pela Terra, os gases quentes do cometa teriam sido responsáveis por causar as 10 pragas que assolaram o Egito Antigo.</p>
            </div>
        </div>
    </section>
  )
}
