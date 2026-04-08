import Button from "@/src/components/button/Button";
import "../../app/globals.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-[70px]">
      <div>
        <h5 className="text-[48px] font-bold">
          Sync Your <br /> Workflow <br /> Seamlessly
        </h5>
        <p className="text-[28px] font-regular">
          FlowSync helps your team collaborate, <br />
          automate and scale faster
        </p>
        <div className="mt-[45px] flex gap-[50px]">
          <Button variant="primary" label="Get Started" />
          <Button variant="secondary" label="Request Demo" />
        </div>
      </div>
      <div>
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          alt="hero-image"
          width={616}
          height={395}
        />
      </div>
    </div>
  );
};

export default Hero;
