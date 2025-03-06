import SectionWrapper from "@/components/SectionWrapper";
import Tag from "@/components/Tag";
import { Check, Rabbit, ShieldCheck, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import type React from "react";

const featuresData: { title: string; icon: React.ReactNode; descr: string }[] =
  [
    {
      title: "Fast & Reliable",
      icon: <Rabbit />,
      descr:
        "Whether it's same-day or scheduled delivery, we get it there with precision.",
    },
    {
      title: "Eco-Friendly",
      icon: <TreeDeciduous />,
      descr:
        "Our bike couriers reduce carbon emissions, making every delivery green.",
    },
    {
      title: "Affordable & Secure",
      icon: <ShieldCheck />,
      descr:
        "Competitive pricing with insurance options for your valuable items.",
    },
    {
      title: "Convenient & Hassle-Free",
      icon: <Check />,
      descr:
        "Real-time tracking and flexible delivery slots tailored to your needs.",
    },
  ];

function Features() {
  return (
    <section id="features">
      <SectionWrapper>
        <div className="text-center mb-12">
          <Tag>Features</Tag>
          <p className="max-w-2xl mt-8 mx-auto text-text-300">
            In a fast-moving world, we bring you speed, reliability, and
            sustainability all in one service. Our bike-powered delivery ensures
            your packages arrive on time, every time, without adding to
            pollution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-900 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-900 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative transform transition-transform duration-300">
                <Image
                  src="/featuresImage.png"
                  alt="Bike courier delivering packages"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Features column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuresData.map((feature, idx) => (
                <div
                  key={idx}
                  className=" p-6 rounded-xl border shadow-md border-background-900 bg-background-950 group-hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-accent-950 text-accent-200 group-hover:scale-105 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-900 transition-all duration-300">
                    <div className="text-2xl">{feature.icon}</div>
                  </div>
                  <h4 className="font-bold text-accent-200 text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-300">{feature.descr}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 shadow-md rounded-xl border border-background-900">
              <p className="text-text-300 italic">
                "Join us in choosing a smarter, greener way to deliver. Your
                package deserves the best, and so does the planet."
              </p>
              <div className="mt-2 flex items-center">
                <div className="w-2 h-2 bg-accent-200 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Our Promise</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-900/20 -z-10 filter blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary-900/20 -z-10 filter blur-[100px]" />
    </section>
  );
}

export default Features;
