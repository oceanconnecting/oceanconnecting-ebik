import About from "@/sections/About";
import ChooseUs from "@/sections/ChooseUs";
import ContactUs from "@/sections/Contact/ContactUs";
import Features from "@/sections/Features";
import Goal from "@/sections/Goal";
import Hero from "@/sections/Hero";
import Opinion from "@/sections/Opnion";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="font-inter pt-16">
      <Hero />
      <Features />
      <Services />
      <ChooseUs />
      <About />
      <Goal />
      <Opinion />
      <ContactUs />
    </div>
  );
}
