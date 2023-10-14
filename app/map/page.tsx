"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WaveChart from './WaveChart';


const data = [
  { name: '14/02', value: 30 },
  { name: '14/03', value: 35 },
  { name: '14/04', value: 32 },
  { name: '14/06', value: 28 },
  { name: '14/07', value: 20 },
  { name: '14/08', value: 15 },
  { name: '14/09', value: 12 },
];

const data2 = [
  { name: '14/02/22', value: 50 },
  { name: '14/03/22', value: 47 },
  { name: '14/04/22', value: 45 },
  { name: '14/06/22', value: 42 },
  { name: '14/07/22', value: 40 },
  { name: '14/08/22', value: 35 },
  { name: '14/09/22', value: 45 },
];

export default function MapScreen() {
  const [current, setCurrent] = useState(0);

  const getData = () => {
    if (current === 0) {
      return {
        data: data,
        title: "2023",
        image: "/images/sattelite-map-farm.jpg"
      }
    } else {
      return {
        data: data2,
        title: "2022",
        image: "/images/sattelite-map-farm-2.jpg"
      }
    }
  }
  return (
    <div className="flex flex-col items-center">
      <div className='flex flex-row justify-start items-center w-full px-4 py-2'>
        <div className='flex flex-row justify-between w-80 items-center'>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <span className="text-2xl font-bold text-start text-gray-800">Mapa de CO2</span>
          
        </div>
      </div>
      <div className="flex w-full justify-center items-center py-2 mb-4">
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
              <span className="text-gray-400 text-sm font-bold">{current === 0 ? "Atualmente" : "2022"}</span>
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
      <div className="w-full relative" style={{ height: "calc(100vh - 370px)" }}>
        <Image src={getData().image} alt="Mapa" layout="fill" objectFit="cover" /> 
        <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="justify-between inline-flex p-4">
        <div className="flex space-x-4 p-1 ml-8">
          <div className="w-8 bg-gradient-to-b from-red-400 via-yellow-400 to-green-600 p-4 rounded-lg">          
          </div>
        <div className="space-y-2 flex flex-col flex-nowrap whitespace-nowrap">
            <p>95 - 100%</p>
            <p>85 - 95%</p>
            <p>70 - 85%</p>
            <p>50 - 70%</p>
            <p>35 - 50%</p>
            <p>20 - 35%</p>
            <p>0 - 20%</p>
          </div>
      </div>
        <div className="w-96 flex justify-between">
          <WaveChart data={getData().data} />
        </div>
      </div>
      
    </div>
  );
}
