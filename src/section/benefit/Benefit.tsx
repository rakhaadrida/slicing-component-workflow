import Image from "next/image";
import "../../app/globals.css";

const Benefit = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="font-bold text-[36px]">
        Stop wasting time on repetitive tasks
      </h2>
      <h3 className="font-regular text-[28px] mt-[10px]">
        Focus on what really maters - let automation handle the rest.
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
            Save More Time
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Cut down manual work and get <br /> hours back in your day.
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
            Automate Workflows
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Eliminate repetitive tasks with <br /> smart automation.
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
            Boost Productivity
          </h3>
          <p className="text-[16px] font-regular mt-[10px] text-center">
            Achieve more with less effort and <br /> maximize efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
