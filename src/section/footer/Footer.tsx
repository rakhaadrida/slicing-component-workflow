import Image from "next/image";
import "../../app/globals.css";

const Footer = () => {
  return (
    <div className="bg-white w-screen relative drop-shadow-[0_30px_100px_rgba(0,0,0,0.25)] px-[120px] py-[100px] flex justify-between">
      <div>
        Navbar Logo
        <p className="text-[16px] font-regular">
          FlowSync helps team save time and boost <br />
          productivity by automating repetitive tasks. <br />
          Build workflows, connect apps, and focus on <br />
          what matter most.
        </p>
      </div>
      <div className="flex gap-[80px]">
        <div>
          <h3 className="text-[24px] font-bold mb-[10px]">Navigation</h3>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Features
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mb-[10px]">Company</h3>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              About
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[16px] font-regular hover:text-primary mb-[8px]"
            >
              Location
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mb-[10px]">Hubungi</h3>
          <p className="text-[16px] font-regular hover:text-primary mb-[8px]">
            info@flowsync.com
          </p>
          <div className="flex gap-[10px]">
            <Image
              src="/assets/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/twitter.png"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/github.png"
              alt="GitHub"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
