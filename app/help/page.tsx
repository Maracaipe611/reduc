"use client"

import Image from "next/image";
import Link from "next/link";
import ProfileHeader from "../profileHeaders";

export default function GoodPractices() {

  const sps = [
    {
      id: 1,
      image: "/images/plantio-direto.png"
    },
    {
      id: 2,
      image: "/images/recuperacao-pastagens-degradadas.png"
    },
    {
      id: 3,
      image: "/images/integracao.png"
    },
    {
      id: 4,
      image: "/images/florestas-plantadas.png"
    },
    {
      id: 5,
      image: "/images/bioinsumo.png"
    },
    {
      id: 6,
      image: "/images/sistema-irrigados.png"
    },
    {
      id: 7,
      image: "/images/manejo-residuos.png"
    },
    {
      id: 8,
      image: "/images/terminacao-intensiva.png"
    }
  ];

  const practices = [
    {
      id: 1,
      title: "Passo a passo para manejo do pasto",
      description: "Aprenda a manejar seus pastos de forma sustentável.",
      href: "/help/manejo-de-pastos",
      image: "/images/pasto.jpg",
      sps: sps.filter((sp) => sp.id <= 4),
    },
    {
      id: 2,
      title: "Como a adubação pode transformar sua plantação",
      description: "Aprenda a adubar sua plantação de forma sustentável.",
      href: "/help/adubacao",
      image: "/images/adubo.jpg",
      sps: sps.filter((sp) => sp.id > 4 && sp.id <= 6),
    },
    {
      id: 3,
      title: "Como evitar incêndios no campo",
      description: "Aprenda a evitar incêndios no campo e reduza emissão de CO2.",
      href: "/help/incendios",
      image: "/images/queimada.jpg",
      sps: sps.filter((sp) => sp.id > 6 && sp.id <= 8),
    }
  ];


  return (
    <div className="flex flex-col w-full h-full">
      <ProfileHeader />
      <div className="flex flex-col w-full overflow-y-auto gap-y-5 p-4">
        <div className="flex flex-col w-full">
          <span className="text-gray-400 text-lg font-bold">Guia de Boas práticas</span>
        </div>
        {practices.map((practice) => (
          <div key={practice.id} className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <span className="text-gray-700 text-xl font-bold">{practice.title}</span>
              <span className="text-gray-400 text-sm font-bold">{practice.description}</span>
            </div>
            <div className="w-full relative" style={{ height: "30vh" }}>
              <Image
              src={practice.image}
              alt="Pasto"
              className="w-full h-full object-cover rounded-lg"
              width={100}
              height={100}
              />
              <div className="absolute bottom-6 w-full flex flex-row justify-end gap-x-2">
                {practice.sps.map((sp) => (
                  <div key={sp.id} className="w-1/8 relative">
                    <img src={sp.image} alt="SP" className="w-12 h-12 object-cover rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="flex flex-col w-full">
              <Link href={practice.href} className="w-full bg-green-800 hover:bg-green-700 text-white text-center font-bold rounded-lg py-2 px-4">Ver mais</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}