import ProfileHeader from "@/app/profileHeaders";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Crédito carbono",
    description: "Peça uma auditoria e receba créditos de carbono",
    image: "/images/credito-carbono.jpg",
    href: "/benefits/credito-carbono",
  },
  {
    id: 2,
    title: "Benefícios ABC+",
    description: "Descubra quais benefícios você tem direito",
    image: "/images/abcmais.png",
    href: "/benefits/abcmais",
  },
  {
    id: 3,
    title: "Plano Safra",
    description: "R$ 364,22 bilhões em crédito rural para a agricultura empresarial",
    image: "/images/plano-safra.jpeg",
    href: "/benefits/plano-safra",
  },
  {
    id: 4,
    title: "Pronaf",
    description: "Apoio financeiro às atividades agropecuárias exploradas mediante emprego direto da força de trabalho do produtor e de sua família.",
    image: "/images/pronaf.jpg",
    href: "/benefits/pronaf",
  }
];

export default function Success() {
  return (
    <div className="flex flex-col w-full py-4">
      <ProfileHeader />
      <div className="flex flex-col w-full justify-center items-center gap-y-8 px-2">
        <span className="text-2xl font-bold">Benefícios</span>
        {benefits.map((practice) => (
          <div key={practice.id} className="flex flex-col w-full gap-y-2">
            <div className="flex flex-col w-full">
              <span className="text-gray-700 text-xl font-bold">{practice.title}</span>
              <span className="text-gray-400 text-sm font-bold">{practice.description}</span>
            </div>
            <div className="w-full relative" style={{ height: "30vh" }}>
              <img src={practice.image} alt="Pasto" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="flex flex-col w-full">
              <Link href={practice.href} className="w-full bg-green-dark hover:bg-light-green text-white text-center font-bold rounded-lg py-2 px-4">Ver mais</Link>
            </div>
          </div>
        ))}
        </div>
      </div>
        
  );
}