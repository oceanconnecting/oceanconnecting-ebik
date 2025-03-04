import ChooseUs from "@/sections/ChooseUs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="font-inter pt-16">
      <Hero />
      <Features />
      <Services />
      <ChooseUs />
    </div>
  );
}
