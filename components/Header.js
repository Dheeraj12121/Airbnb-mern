import Image from "next/image";
import { GlobeAltIcon,MailIcon,UserCircleIcon,UserIcon,SearchIcon, MenuIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5
        md:px-10"
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={`https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png`}
          layout="fill"
          objectFit="contain"
          objectPosition={`left`}
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 outline-none
      md:shadow-sm">
        <input
          type="text"
          className="border-none outline-none pl-5 bg-transparent flex-grow text-gray-500"
          placeholder="  Start your search"
        />
        <SearchIcon 
        className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cover-pointer
        md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer ">Become a host</p>
          <GlobeAltIcon className="h-6"/>
          
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6" />
      </div>
      </div>
      
    </header>
  );
}

export default Header;
