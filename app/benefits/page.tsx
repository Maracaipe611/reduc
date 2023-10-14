'use client'

import Link from "next/link";
import ProfileHeader from "../profileHeaders";

export default function Benefits() {
  return (
    <div className="flex flex-col w-full">
      <ProfileHeader />
      <div className="flex flex-col w-full justify-center items-center">
        <span className="text-2xl font-bold">Meus benefícios</span>
        <div className="flex flex-col w-full justify-center items-center h-96 px-10 gap-y-4 mt-20">
          <img src="/images/claim.png" alt="benefits" className="w-36 h-auto" />
          <span className="text-xl font-bold text-center text-gray-800">Antes de acessar seus benefícios, gostaríamos de saber mais sobre você.</span>
          <Link href={"/benefits/profile-info"} className="flex flex-row items-center justify-center w-40 h-12 mt-4 rounded-md bg-light-green shadow-md">
            <span className="text-base font-bold text-start text-black">Responder</span>
          </Link>
        </div>
      </div>
    </div>
  );
}