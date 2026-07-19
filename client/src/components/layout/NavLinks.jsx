import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {[
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
      ].map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "text-[#1E3F20] border-b-2 border-[#D4AF37] pb-1"
                : "text-gray-700 hover:text-[#1E3F20]"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}

      <a
        href="#"
        className="text-gray-700 hover:text-[#1E3F20] transition font-medium"
      >
        Collections
      </a>

      <a
        href="#"
        className="text-gray-700 hover:text-[#1E3F20] transition font-medium"
      >
        About
      </a>
    </nav>
  );
}

export default NavLinks;