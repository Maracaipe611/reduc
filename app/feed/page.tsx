'use client'

import Link from "next/link";
import { useState } from "react";
import ProfileHeader from "../profileHeaders";

export default function Feed() {
  const [current, setCurrent] = useState(0);
  const news = [
    {
      id: 1,
      title: "Irrigação inovadora eleva produtividade",
      description: "Novo sistema de gotejamento otimiza uso da água e aumenta rendimento.",
      author: "Por João Silva / 30 min atrás",
      image: "/images/irrigacao.jpg",

    },
    {
      id: 2,
      title: "Milho resistente combate praga do pulgão",
      description: "Nova variedade de milho é resistente a praga que ataca plantações.",
      author: "Por Canal Rural / 1 hora atrás",
      image: "/images/pulgao.jpg",
    },
    {
      id: 3,
      title: "Novo sistema de plantio reduz emissão de CO2",
      description: "Novo sistema de plantio reduz emissão de CO2 em 30%.",
      author: "Por Sustentab Rural / 2 horas atrás",
      image: "/images/clima.jpg",
    },
    {
      id: 4,
      title: "Governo oferece subsídio para produtores",
      description: "Governo oferece subsídio para produtores que reduzirem emissão de CO2.",
      author: "Por Sustentab Rural / 2 horas atrás",
      image: "/images/agricultor-dinheiro.jpg",
    }
  ];

  const newsOfYesterday = [
    {
      id: 1,
      title: "Solo fértil aumenta produtividade",
      description: "Novo sistema de gotejamento otimiza uso da água e aumenta rendimento.",
      author: "Por Agro Mais / 1 dia atrás",
      image: "/images/gotejamento.jpg",
    },
    {
      id: 2,
      title: "Saiba como reduzir emissão de CO2",
      description: "Aprenda a reduzir emissão de CO2 e ganhe créditos de carbono.",
      author: "Por Revista Agro / 1 dia atrás",
      image: "/images/gases.webp",
    }
  ];

  const getCurrentNews = () => {
    if (current === 0) {
      return news;
    } else {
      return newsOfYesterday;
    }
  };

  return (
  <div className="flex flex-col w-full h-full">
    <ProfileHeader />
    <div className="flex w-full justify-center items-center border-b border-black py-2 mb-4">
      <div className="flex flex-row w-10 justify-between items-center gap-x-2 ">

      <button id="svg arrow left back"
        className="h-6 w-6"
        onClick={() => setCurrent(current - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 transform rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <span className="text-gray-400 text-sm font-bold">{current === 0 ? "Hoje" : "Ontem"}</span>
      {
        current === -1 ? (
          <button id="svg arrow right next"
        className="h-6 w-6"
        onClick={() => setCurrent(current + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 transform rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
        ) : null
      }
    </div>
      
      </div>
    <div className="flex flex-col w-full overflow-y-auto gap-y-4 p-4">
      {getCurrentNews().map((item) => (
        <Link href={"/feed/co2"} key={item.id} className="flex flex-row justify-between items-start gap-x-4 border-b-2 pb-4 mb-4">
          <div className="flex-shrink-0 w-1/3 h-24">
            <img className="w-full h-full object-fill" src={item.image} alt="news" />
          </div>
          <div className="flex flex-col w-2/3">
            <span className="text-gray-700 text-lg font-bold">{item.title}</span>
            <span className="text-gray-500 text-sm">{item.description}</span>
            <span className="text-gray-400 text-sm mt-2">{item.author}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

}