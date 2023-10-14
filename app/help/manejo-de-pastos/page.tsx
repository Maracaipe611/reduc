import ProfileHeader from "@/app/profileHeaders";

export default function ManejoDePastos() {
  const sps = [
    {
      id: 1,
      image: "/images/plantio-direto.png",
      name: "Plantio direto"
    },
    {
      id: 2,
      image: "/images/recuperacao-pastagens-degradadas.png",
      name: "Recuperação de pastagens degradadas"
    },
    {
      id: 3,
      image: "/images/integracao.png",
      name: "Integração lavoura-pecuária-floresta"
    },
    {
      id: 5,
      image: "/images/bioinsumo.png",
      name: "Bioinsumos"
    },
    {
      id: 6,
      image: "/images/sistema-irrigados.png",
      name: "Sistemas irrigados"
    },
  ];
  return (
    <div className="flex flex-col h-full w-full">
      <ProfileHeader />
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-5 p-4">
        <div className="h-60 w-full relative">
          <img src="/images/pasto.jpg" alt="Pasto" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <span className="text-2xl font-bold">Manejo de pastos</span>
        <span className="text-xl font-bold">O que é?</span>
        <p className="text-justify">
          O manejo de pastos é a forma como o produtor administra o pasto, de forma a garantir que os animais tenham sempre uma boa oferta de forragem, com qualidade e quantidade adequadas, e que o pasto se mantenha produtivo por muitos anos.
        </p>
        <span className="text-xl font-bold">Por que é importante?</span>
        <p className="text-justify">
          O manejo de pastos é importante para que o produtor consiga produzir forragem de qualidade e em quantidade suficiente para alimentar os animais, mantendo o pasto produtivo por muitos anos.
        </p>
        <span className="text-xl font-bold">Como fazer?</span>
        <p className="text-justify">
          O manejo de pastos envolve uma série de práticas que devem ser realizadas de forma integrada, como:
        </p>
        <ul className="list-disc list-inside">
          <li>Escolha da espécie forrageira;</li>
          <li>Preparo do solo;</li>
          <li>Plantio;</li>
          <li>Manejo da pastagem;</li>
          <li>Controle de pragas e doenças;</li>
          <li>Adubação;</li>
          <li>Manejo de irrigação;</li>
          <li>Manejo de plantas daninhas.</li>
        </ul>
        <span className="text-xl font-bold">Essa prática faz parte de quais SPS?</span>
        <div className="flex flex-col flex-wrap gap-y-4 ">
          {sps.map((sp) => (
            <div key={sp.id} className="flex flex-row flex-nowrap w-full items-center gap-x-4">
              <img src={sp.image} alt="SP" className="w-20 h-20 object-cover rounded-lg" />
              <span className="text-xl">{sp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}