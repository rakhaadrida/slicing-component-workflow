"use client";

import Hero from "../section/hero/Hero";
import Benefit from "../section/benefit/Benefit";
import Feature from "../section/feature/Feature";
import Step from "../section/step/Step";
import Testimonial from "../section/testimonial/Testimonial";
import Price from "../section/price/Price";

export default function Home() {
  return (
    <div>
      <div className="mb-[50px]">
        <Hero />
      </div>
      <div className="mb-[100px]">
        <Benefit />
      </div>

      <div className="mb-[100px]">
        <Feature />
      </div>

      <div className="mb-[100px]">
        <Step />
      </div>

      <div className="mb-[100px]">
        <Testimonial />
      </div>

      <div className="mb-[100px]">
        <Price />
      </div>
    </div>
  );
}
