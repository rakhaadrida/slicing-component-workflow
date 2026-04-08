import Image from "next/image";
import "../../app/globals.css";

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  position,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="h-[320px] w-[345px] p-[24px] flex flex-col justify-between items-center drop-shadow-[1px_5px_10px_rgba(0,0,0,0.25)] rounded-2xl bg-white">
      <div>
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          alt="avatar-testimonial"
          width={124}
          height={124}
          className="rounded-full"
        />
        <h6 className="text-[16px] font-bold mt-[10px] text-center">{name}</h6>
        <p className="text-[14px] font-regular mt-[8px] text-center">
          {position}
        </p>
      </div>
      <p className="text-[14px] font-regular text-center">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
