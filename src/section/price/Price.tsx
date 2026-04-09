import Card from "@/src/components/card/Card";

const Price = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[36px] font-bold">Our Plans & Services</h2>
      <h3 className="text-[28px] font-regular">
        Pick the tools that fit your business best
      </h3>
      <div className="flex justify-center items-center mt-[50px]">
        <Card
          label="Free"
          price="$0"
          bill="TEXT"
          billString="Free For Everyone"
          buttonLabel="Get Started"
          position="LEFT"
          featureLists={[
            "Up to 3 Active Automations",
            "Connect up to 5 Apps",
            "Basic Support",
          ]}
        />
        <Card
          label="Pro"
          price="12 per User/Month"
          bill="YEAR"
          buttonLabel="Get Started"
          position="CENTER"
          featureLists={[
            "All Free Features",
            "Priority Email Support",
            "Help Center Access",
          ]}
        />
        <Card
          label="Enterprise"
          price="Contact Us"
          bill="TEXT"
          billString="Custom Pricing"
          buttonLabel="Request Trial"
          position="RIGHT"
          featureLists={[
            "All Pro Features",
            "Dedicated Account Manager",
            "Custom Integrations",
            "Enterprise-grade Security",
            "Personalized Onboarding",
          ]}
        />
      </div>
    </div>
  );
};

export default Price;
