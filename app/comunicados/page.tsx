import ProfileHeader from "../profileHeaders";

export default function Comunicados() {
  const comunicados = [
    {
      id: 1,
      title: "Segurança pública",
      description: "➕R$900 milhões para a segurança pública O Governo Federal lançou o programa ENFOC, com orçamento previsto de R$900 milhões até 2026 para enfrentamento às Organizações Criminosas.",
      image: "/images/comunicado-1.jpeg",
    },
    {
      id: 2,
      title: "Desenrola Brasil",
      description: "São 1,73 milhões de brasileiros e brasileiras com o nome limpo, com mais dignidade e retomando o controle de suas vidas financeiras.",
      image: "/images/comunicado-2.jpeg",
    },
    {
      id: 3,
      title: "Cesta básica",
      description: "O valor da cesta básica caiu em 14 capitais brasileiras. Nos nove meses de 2023, o custo da cesta diminuiu em 12 capitais. Quem ganha é o Brasil!",
      image: "/images/comunicado-3.jpeg",
    }
  ];
  return (
    <div className="flex flex-col w-full">
      <ProfileHeader />
      <span className="text-2xl font-bold w-full text-center py-2">Comunicados</span>
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-8 p-4">
        {
          comunicados.map((comunicado) => (
            <div key={comunicado.id} className="flex flex-col w-full gap-y-2">
              <div className="w-full relative" style={{ height: "30vh" }}>
                <img src={comunicado.image} alt="Pasto" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-gray-700 text-xl font-bold">{comunicado.title}</span>
                <span className="text-gray-500 text-sm font-bold">{comunicado.description}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}