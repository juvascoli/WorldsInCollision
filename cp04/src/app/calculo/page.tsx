import Image from "next/image"

import Mapa from "../../../public/images/calculo.jpeg"

export default function Calculo() {
  return (
    <section className="flex flex-col items-center py-14 px-14 gap-12 text-gray-100 h-screen">
        <h1 className="text-3xl font-bold">Análise da Trajetória de Vênus</h1>
        <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
            <p className="text-2xl text-center p-6 w-1/3">
                Immanuel Velikovsky sugeriu que Vênus tinha origens como um corpo cometário, com uma órbita ao redor do Sol que não era sempre constante. Ele argumentava que o planeta teria se aproximado da Terra em seu desenvolvimento inicial, provocando distúrbios gravitacionais significativos que alteraram a rotação da Terra e resultaram em fenômenos como a interrupção do Sol descrita no Livro de Josué. Velikovsky acreditava que Vênus encontrou estabilidade em sua órbita após diversas interações com planetas como Júpiter e Marte.
            </p>
            <Image src={Mapa} alt="Mapa Antigo" width={1500} height={1500} className="size-72 rounded-xl" />
        </div>

        <div className="flex flex-col justify-center px-8 py-4 gap-6 w-full">
            <h2 className="text-4xl font-bold text-center">Simulação do Cálculo</h2>
        </div>
    </section>
    )
}
  

