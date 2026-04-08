import Image from "next/image";
import "../../app/globals.css";

const Feature = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="font-bold text-[36px]">Build Your Custom Automation</h2>
      <h3 className="font-regular text-[28px]">
        Create powerful workflows without writing a single line of code.
      </h3>
      <div className="flex gap-[120px] justify-center items-center mt-[50px]">
        <div className="flex flex-col items-center">
          <Image
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            alt="icon-benefit"
            width={132}
            height={132}
          />
          <h3 className="text-[28px] font-bold mt-[20px] text-center">
            Drag & Drop Builder
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Design workflow effortlessly with <br /> a simple visual editor.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            alt="icon-benefit"
            width={132}
            height={132}
          />
          <h3 className="text-[28px] font-bold mt-[20px] text-center">
            Connect 100+ Apps
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Seamlessly integrate your favorite
            <br /> tools in one place.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            alt="icon-benefit"
            width={132}
            height={132}
          />
          <h3 className="text-[28px] font-bold mt-[20px] text-center">
            No-Code Power
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Automate complete tasks -- no <br /> technical skills required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
