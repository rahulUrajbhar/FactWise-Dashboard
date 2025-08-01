import Link from "next/link";
import { GoOrganization } from "react-icons/go";
const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      <Link href={"/"}>
        <GoOrganization className="text-black/80 cursor-pointer" size={25} />
      </Link>
    </div>
  );
};

export default Menu;
