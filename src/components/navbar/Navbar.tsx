import Button from "../button/Button";
import "../../app/globals.css";

const Navbar = () => {
  return (
    <div className="w-screen relative">
      <nav className="max-w-[100vw] w-full flex justify-between items-center pt-[50px] px-[50px] mx-auto">
        Navbar Logo
        <div className="flex gap-[60px] items-center">
          <a href="#" className="text-[20px] font-bold hover:text-primary">
            Home
          </a>
          <a href="#" className="text-[20px] font-bold hover:text-primary">
            About
          </a>
          <a href="#" className="text-[20px] font-bold hover:text-primary">
            Pricing
          </a>
          <Button label="Get Started" variant="primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
