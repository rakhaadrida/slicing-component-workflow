import Button from "../button/Button";
import Toggle from "../toggle/Toggle";

interface cardProps {
  label: string;
  price: string;
  bill: "TEXT" | "YEAR";
  billString?: string;
  featureLists: string[];
  position: "LEFT" | "CENTER" | "RIGHT";
  buttonLabel: string;
}

const Card = (props: cardProps) => {
  const cardStyling = () => {
    switch (props.position) {
      case "LEFT":
        return "h-[502px] rounded-l-2xl border-t-[1px] border-l-[1px] border-b-[1px] border-text-grey";
      case "RIGHT":
        return "h-[502px] rounded-r-2xl border-t-[1px] border-r-[1px] border-b-[1px] border-text-grey";
      default:
        return "h-[552px] rounded-2xl drop-shadow-[0_0_100px_rgba(0,0,0,0.3)]";
    }
  };

  return (
    <div
      className={`w-[375px] bg-white ${cardStyling()} flex justify-between flex-col`}
    >
      <div className="p-[24px]">
        <h6 className="text-[36px] font-bold">{props.label}</h6>
        <p className="text-[16px] font-regular">{props.price}</p>
      </div>
      <div className="h-[1px] bg-natural w-full"></div>
      <div className="px-[24px] py-[8px]">
        {props.bill === "TEXT" ? (
          <p className="text-[14px] text-text-grey font-regular">
            {props.billString}
          </p>
        ) : (
          <Toggle label="Billed Yearly" />
        )}
      </div>
      <div className="h-[1px] bg-natural w-full"></div>
      <div className="px-[24px] py-[16px]">
        {props.featureLists.map((feature, index) => (
          <div key={index} className="flex items-center gap-[12px] mb-[16px]">
            <p className="text-[14px] font-regular">- {feature}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justicy-center items-center mt-auto w-full px-[24px] mb-[24px]">
        <Button
          variant={props.position === "CENTER" ? "primary" : "secondary"}
          label={props.buttonLabel}
          styling="w-full"
        />
        {props.position === "CENTER" && (
          <p className="text-[14px] mt-[16px]">
            or{" "}
            <a href="#" className="font-bold hover:underline">
              Contact Sales
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
