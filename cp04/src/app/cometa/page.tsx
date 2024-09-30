import Image from "next/image"
import cometa from "../../../public/images/cometa.jpeg"
import cometa2 from "../../../public/images/cometa2.jpeg"

export default function Cometa() {
  return (
    <section className=" bg-gray-800 text-white p-8 h-full">
    <h1 className="tfont-extrabold text-center text-5xl">Cometas</h1>
    <div className=" flex items-center justify-center mt-16 p-4 ">
      <p className="w-1/3 p-4 text-2xl">
      O novo cometa passou por seu ponto mais próximo do Sol e agora está se aproximando da Terra. O C/2023 A3 (Tsuchinshan–ATLAS) está atualmente se movendo para fora da órbita de Vênus e a caminho de passar mais próximo da Terra em cerca de duas semanas</p>
        <Image src={cometa} alt="Cometa" width={800} height={800} className="rounded-3xl" />
    </div>

    <div className="flex items-center justify-center mt-16">
        <Image src={cometa2} alt="Cometa2" width={800} height={800} className="rounded-3xl"/>
        <p className="w-1/3 p-4 text-2xl text-center" >O cometa Tsuchinshan-ATLAS, pronunciado (Choo-cheen-shahn At-less), está próximo da visibilidade a olho nu e facilmente capturado por câmeras com longa exposição. O cometa também pode ser observado agora por observadores no hemisfério norte da Terra, bem como no sul. A imagem em destaque foi capturada há apenas alguns dias, acima de Zacatecas, no México. Como nuvens estavam obscurecendo grande parte do céu antes do amanhecer, o astrofotógrafo utilizou um drone para tirar fotos de um ponto mais alto, várias das quais foram posteriormente mescladas para melhorar a visibilidade do cometa. Embora seja difícil prever o brilho futuro dos cometas, há uma esperança crescente de que o cometa Tsuchinshan-ATLAS brilhe ainda mais à medida que entra no céu no início da noite. Galeria em crescimento: Cometa Tsuchinshan-ATLAS em 2024
        </p>
    </div>
    
    </section>
  )
}