import "../../app/globals.css";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  styling?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`px-[30px] py-[9px] rounded-xl text-[24px]
        ${props.variant === "primary" ? "bg-primary text-white hover:bg-primary-hover" : "bg-transparent text-primary border boreder-primary hover:bg-primary hover:text-white hover:border-transparent"} ${props.styling}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
