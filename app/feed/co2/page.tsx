import ProfileHeader from "@/app/profileHeaders";

export default function co2() {
  return (
    <div className="flex flex-col h-full w-full">
      <ProfileHeader />
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-5 p-4">
        <span className="text-base text-gray-400">Por ABC+ / 3 horas atrás</span>
        <div className="h-60 w-full relative">
          <img src="/images/clima.jpg" alt="Pasto" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <span className="text-2xl font-bold">Novo sistema de plantio reduz CO2</span>
        <span className="text-xl font-bold">Por que é importante?</span>
        <p className="text-justify">
          A redução de CO2 é importante para o meio ambiente, pois o CO2 é um dos gases que contribuem para o efeito estufa, que é o aumento da temperatura da Terra. O aumento da temperatura da Terra pode causar o derretimento das calotas polares, o que pode causar o aumento do nível do mar, o que pode causar a inundação de cidades litorâneas.
        </p>
        <span className="text-xl font-bold">Como fazer?</span>
        <p className="text-justify">
          O novo sistema de plantio reduz CO2, pois a plantação é feita em linhas, o que permite que o solo seja mais bem aproveitado, o que permite que o solo absorva mais CO2.
        </p>
        <span className="text-xl font-bold">Quais os benefícios?</span>
        <p className="text-justify">
          O novo sistema de plantio reduz CO2, o que é bom para o meio ambiente, pois o CO2 é um dos gases que contribuem para o efeito estufa, que é o aumento da temperatura da Terra. O aumento da temperatura da Terra pode causar o derretimento das calotas polares, o que pode causar o aumento do nível do mar, o que pode causar a inundação de cidades litorâneas.
        </p>
      </div>
    </div>
  );
}