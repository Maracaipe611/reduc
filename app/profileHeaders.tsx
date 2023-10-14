"use client"

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ProfileHeader() {
  const path = usePathname();
  const router = useRouter();

  const showBackButton = () => {
    if (path !== "/") {
      return (
        <button className="h-6 w-6" onClick={() => { path.includes("success") ? router.push("/") : router.back()}}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700 transform rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
        </button>
      );
    }
  };

  return (
    <div className="flex flex-row w-full justify-between items-center gap-x-2 border-b border-black py-2 mb-4 px-2">
      <div className="">
        {showBackButton()}
      </div>
      <div className="flex flex-row items-center gap-x-1">
        <div>
          <span className="text-gray-400 text-sm font-bold">Olá,</span>
          <span className="text-gray-700 text-xl font-bold"> João</span>
        </div>
        <div className="w-8 h-8 bg-white rounded-full">
          <Image
          src="/images/profile.png"
          alt="profile"
          width={32}
          height={32}
          />
        </div>
        <div className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}