import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import Container from "../common/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <NavIcons />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;