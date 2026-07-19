import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import IconButton from "../ui/IconButton";

function NavIcons() {
  return (
    <div className="flex items-center gap-3">

      <IconButton>
        <FiSearch className="text-xl text-[#1E3F20]" />
      </IconButton>

      <IconButton badge={2}>
        <FiHeart className="text-xl text-[#1E3F20]" />
      </IconButton>

      <IconButton badge={3}>
        <FiShoppingBag className="text-xl text-[#1E3F20]" />
      </IconButton>

      <IconButton>
        <FiUser className="text-xl text-[#1E3F20]" />
      </IconButton>

    </div>
  );
}

export default NavIcons;