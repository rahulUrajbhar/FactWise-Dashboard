import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-8 justify-end p-5">
      <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
        <IoIosNotificationsOutline
          size={25}
          className="text-black bg-amber-100 rounded-full"
        />
        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
          1
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-black leading-3 font-medium">
          John Doe
        </span>
        <span className="text-xs text-gray-500 text-right">Admin</span>
      </div>
      <Image
        src="/avatar.png"
        alt=""
        width={36}
        height={36}
        className="rounded-full object-contain cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
