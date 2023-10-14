import ProfileHeader from "@/app/profileHeaders";
import Image from "next/image";

export default function PastagensDegradadas() {
  return (
    <div className="flex flex-col w-full h-full">
      <ProfileHeader />
      <span className="text-2xl font-bold w-full text-center">Recuperação de pastagens degradadas</span>
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-5 p-4">
        <div className="flex flex-col w-full relative rounded-md shadow-md">
          <Image src="/images/pastagem-degradada.webp" alt="pastagens-degradadas" width={1000} height={500} />
        </div>
        <span className="text-xl font-bold text-start text-gray-800">O que é?</span>
        <span className="text-base font-medium text-start text-gray-800">
          Degradação das pastagens é um processo evolutivo da perda do vigor, de produtividade, da capacidade de
          recuperação natural das pastagens para sustentar os níveis de produção e a
          qualidade exigida pelos animais, bem como o de superar os efeitos nocivos de
          pragas, doenças e invasoras, culminando com a degradação avançada dos
          recursos naturais em razão de manejos inadequados.
          <br />
          <br />
          Esta versão simples e didática de degradação está baseada num
          processo contínuo de alterações da pastagem que tem início com a queda do
          vigor e da produtividade da pastagem. Poder-se-ia comparar este processo a uma
          escada, onde no topo estariam as maiores produtividades e à medida que se
          descem os degraus com a utilização da pastagem, avança-se no processo de
          degradação.
          <br />
          <br />
          O processo de degradação das pastagens tem início com a perda de vigor
          e queda na disponibilidade de forragem, com redução da capacidade de lotação e
          do ganho de peso animal. Em fases mais avançadas, ou concomitantemente,
          podem ocorrer infestação de plantas invasoras, ocorrência de pragas e a
          degradação do solo.
          O final do processo culminaria com a ruptura dos recursos naturais,
          representado pela degradação do solo com alterações em sua estrutura,
          evidenciadas pela compactação e a consequente diminuição das taxas de
          infiltração e capacidade de retenção de água, causando erosão e assoreamento
          de nascentes, lagos e rios.
          <br />
          <br />
          Levando-se em conta apenas a fase de engorda de bovinos, a
          produtividade de carne de uma pastagem degradada está em torno de 2
          arrobas/ha/ano, enquanto que numa pastagem recuperada e bem manejada podese atingir, em média, 12 arrobas/ha/ano. Mais grave ainda são as consequências
          da degradação das pastagens, pois dada a grande extensão da área ocupada, os
          impactos acarretam a degradação ambiental, com efeitos nos recursos hídricos, e
          agravamento das emissões dos GEE.
        </span>
      </div>
    </div>
  );
}