import ProfileHeader from "@/app/profileHeaders";
import Link from "next/link";

export default function ProfileInfo2() {
  return (
    <div className="flex flex-col w-full">
      <ProfileHeader />
      <div className="flex flex-col w-full justify-center items-center">
        <span className="text-2xl font-bold text-center">Responda as perguntas abaixo para receber seus benefícios</span>
        <div className="flex flex-col w-full justify-between items-start p-10">
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Quais das técnicas de plantio a seguir você utiliza?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Plantio Direto</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Plantio Convencional</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Cultivo mínimo</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Quais das técnicas de adubação a seguir você utiliza?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Adubação de cobertura</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Adubação de plantio</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold text-start text-gray-800 mt-8">Quais das técnicas de controle de pragas a seguir você utiliza?</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <ul className="flex flex-col w-full gap-y-4">
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Controle biológico</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
              <li className="flex flex-row justify-between w-full">
                <span className="text-base font-bold text-start text-gray-800">Controle químico</span>
                <input type="checkbox" className="w-4 h-4" />
              </li>
            </ul>
          </div>
        </div>
        <Link href={"/benefits/success"} className="flex flex-row items-center justify-center w-40 h-12 mt-4 my-4 rounded-md bg-light-green shadow-md">
          <span className="text-base font-bold text-start text-black">Enviar</span>
        </Link>
      </div>
    </div>
  );
}