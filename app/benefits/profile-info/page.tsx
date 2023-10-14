import ProfileHeader from "@/app/profileHeaders";
import Link from "next/link";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col w-full">
      <ProfileHeader />
      <div className="flex flex-col w-full justify-center items-center">
        <span className="text-2xl font-bold text-center px-4">Responda as perguntas abaixo para saber quais benefícios você tem direito</span>
        <div className="flex flex-col w-full justify-between items-start p-10">
          <span className="text-xl font-bold text-start text-gray-800">Qual tipo de plantio você cultiva?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Soja</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Milho</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Café</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Algodão</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Qual o tamanho da sua propriedade?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Até 100 hectares</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">De 100 a 500 hectares</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">De 500 a 1000 hectares</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Mais de 1000 hectares</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Qual o seu nível de conhecimento sobre agricultura digital?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Iniciante</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Intermediário</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Avançado</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Qual a sua idade?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Até 25 anos</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">De 25 a 40 anos</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">De 40 a 60 anos</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
        </div>
        <Link href={"/benefits/profile-info-2"} className="flex flex-row items-center justify-center w-40 h-12 mt-4 my-4 rounded-md bg-light-green shadow-md">
          <span className="text-base font-bold text-start text-black">Continuar</span>
        </Link>
      </div>
    </div>
  );
}