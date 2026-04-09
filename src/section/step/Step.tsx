import "../../app/globals.css";

const Step = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-[36px] font-bold">How It Works</h2>
      <h3 className="text-[28px] font-regular">
        Turn complexity into simplicity in just 3 easy steps
      </h3>
      <div className="flex items-center gap-[100px] mt-[50px]">
        <div className="relative flex flex-col items-center flex-1">
          <div className="flex items-start z-10">
            <div className="shrink-0 grid place-items-center rounded-full bg-primary w-[64px] h-[64px]">
              <span className="text-[28px] font-bold text-white">1</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[28px] font-bold text-center">
              Connect Your Apps
            </h3>
            <p className="text-[16px] font-regular mt-[10px] text-center">
              Seamlessly link the tools you already use-no
              <br /> hassle, no friction.
            </p>
          </div>
          <div className="block absolute inset-y-7 left-[55%] right-[100%] h-1 bg-primary w-[385px]"></div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="flex items-start">
            <div className="shrink-0 grid place-items-center rounded-full bg-primary w-[64px] h-[64px]">
              <span className="text-[28px] font-bold text-white">2</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[28px] font-bold text-center">
              Build Your Automation
            </h3>
            <p className="text-[16px] font-regular mt-[10px] text-center">
              Desing wofklows with our drag-and-drop
              <br /> builder in minutes.
            </p>
          </div>
          <div className="block absolute inset-y-7 left-[55%] right-[100%] h-1 bg-primary w-[385px]"></div>
        </div>

        <div className="relative flex flex-col items-center ">
          <div className="flex items-start">
            <div className="shrink-0 grid place-items-center rounded-full bg-primary w-[64px] h-[64px]">
              <span className="text-[28px] font-bold text-white">3</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[28px] font-bold text-center">Run & Relax</h3>
            <p className="text-[16px] font-regular mt-[10px] text-center">
              Let automation do the heavy lifting while you
              <br /> focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
