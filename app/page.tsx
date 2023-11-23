import Image from "next/image";
import Link from "next/link";
import ProfileHeader from "./profileHeaders";

export default function Dashboard() {

  const infos = [
    {
      id: 1,
      title: '11,2',
      description: "Créditos de carbono",
      icon: "/images/money-svgrepo-com.svg",
    },
    {
      id: 2,
      title: '28%',
      description: "Redução de emissão de CO2",
      icon: "/images/tree-leaf.png",
    },
    {
      id: 3,
      title: '17%',
      description: "Redução de metano",
      icon: "/images/cow.png",
    }
  ];

  const menus = [
    {
      id: 4,
      title: 'Meus benefícios',
      link: '/benefits',
      icon: '/images/claim.png'
    },
    {
      id: 5,
      title: 'Boas Práticas - SPS',
      link: '/sps',
      icon: '/images/abc.png'
    },
    {
      id: 2,
      title: 'Guia de boas práticas',
      link: '/help',
      icon: '/images/help.svg'
    },
    {
      id: 1,
      title: 'Feed de notícias',
      link: '/feed',
      icon: '/images/paper-stack.png'
    },
    {
      id: 6,
      title: 'Comunicados Oficiais',
      link: '/comunicados',
      icon: '/images/comunicados.png'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen mt-4">
        <div className="flex w-full">
          <ProfileHeader />
        </div>
        <div
          className="flex flex-row items-center my-4 px-2 justify-start w-full">
          <Link
            className="flex flex-row items-center justify-start w-full py-5 px-4 bg-green-600 border border-green-600 rounded-md shadow-md shadow-gray-400"
            href={"/map"}
          >
            <Image
              src={"/images/sattelite.png"}
              alt="icon"
              width={32}
              height={32}
            />
            <span className="ml-2 text-lg font-bold text-start text-white">Meu mapa de emissão</span>
          </Link>
        </div>
      <div className="flex flex-row justify-between w-full gap-x-3">
        {
          infos.map(info => (
            <div
              className="flex flex-col justify-start rounded-md bg-white shadow-lg shadow-gray-300 border border-gray-100 w-40"
              key={info.id}
            >
              <div className="flex flex-row items-center justify-center w-16 h-16 px-4">
                <Image
                  src={info.icon}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full px-4 bg-white rounded-md">
                <span className="text-2xl font-bold text-start text-green-dark">{info.title}</span>
                <span className="text-sm font-bold text-start text-gray-700">{info.description}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col items-start justify-start w-full mt-4 px-2">
        <span className="text-xl font-bold text-start text-gray-800">Menu</span>
        <div className="flex flex-col items-start justify-between w-full mt-4 gap-y-3">
          {
            menus.map(menu => (
              <Link
                className={"flex flex-row items-center justify-start w-full py-5 px-4 rounded-md shadow-md " + (menu.title.includes("Comunicados") ? "bg-blue-300" : "bg-light-green")}
                key={menu.id}
                href={menu.link}
              >
                <Image
                  src={menu.icon}
                  alt="icon"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-lg font-bold text-start text-black">{menu.title}</span>
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  );
}