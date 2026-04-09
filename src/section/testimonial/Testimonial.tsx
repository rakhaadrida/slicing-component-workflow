import TestimonialCard from "@/src/components/testimonial/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[36px] font=bold">Testimonial</h2>
      <h3 className="text-[28px] font-regular">
        Trusted by <span className="font-bold text-primary">500+</span>{" "}
        businesses who already run smarter with FlowSync
      </h3>
      <div className="flex justify-center items-center gap-[100px] mt-[50px]">
        <TestimonialCard
          name="John Doe"
          position="CEO, Acme Corp"
          testimonial="FlowSync has transformed our workflow. It's like having an extra team member who never sleeps!"
        />
        <TestimonialCard
          name="Jane Smith"
          position="CTO, Beta Inc"
          testimonial="The automation capabilities of FlowSync have saved us countless hours. It's a game-changer for our business."
        />
        <TestimonialCard
          name="Emily Johnson"
          position="Product Manager, Gamma LLC"
          testimonial="FlowSync's intuitive interface made it easy for our team to adopt. We've seen a significant boost in productivity since we started using it."
        />
      </div>
    </div>
  );
};

export default Testimonial;
