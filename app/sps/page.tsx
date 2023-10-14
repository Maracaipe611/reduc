import Link from "next/link";
import ProfileHeader from "../profileHeaders";

export default function Sps() {

  const sps = [
    {
      id: 1,
      image: "/images/plantio-direto.png",
      name: "Plantio direto",
    },
    {
      id: 2,
      image: "/images/recuperacao-pastagens-degradadas.png",
      name: "Recuperação de pastagens degradadas",
    },
    {
      id: 3,
      image: "/images/integracao.png",
      name: "Integração lavoura-pecuária-floresta",
    },
    {
      id: 4,
      image: "/images/florestas-plantadas.png",
      name: "Florestas plantadas",
    },
    {
      id: 5,
      image: "/images/bioinsumo.png",
      name: "Bioinsumos",
    },
    {
      id: 6,
      image: "/images/sistema-irrigados.png",
      name: "Sistemas irrigados",
    },
    {
      id: 7,
      image: "/images/manejo-residuos.png",
      name: "Manejo de resíduos",
    },
    {
      id: 8,
      image: "/images/terminacao-intensiva.png",
      name: "Terminação intensiva",
    }
  ];

  return (
    <div className="flex flex-col w-full h-full">
      <ProfileHeader />
      <span className="text-2xl font-bold w-full text-center">Boas práticas SPS</span>
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-5 p-4">
        {
          sps.map((sp) => (
            <Link key={sp.id} href={"/sps/pastagens-degradadas"} className="flex flex-row w-full justify-between items-center border border-gray-300 rounded-md p-2 shadow-lg shadow-gray-300">
              <div className="flex flex-row justify-start gap-x-4 items-center">
                <img src={sp.image} alt={sp.name} className="w-24 h-24 mx-4 object-contain" />
                <span className="text-xl text-start font-bold">{sp.name}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))
        }
    </div>
    </div>
  );
}