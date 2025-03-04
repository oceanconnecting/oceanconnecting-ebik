import SectionWrapper from "@/components/SectionWrapper";
import Tag from "@/components/Tag";
import { Check, Rabbit, ShieldCheck, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

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
    <section>
      <SectionWrapper>
        <Tag>Features</Tag>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="md:text-left text-center mb-8 mx-8 md:ml-16 md:mb-0">
            <p className="mt-4 text-text-300">
              In a fast-moving world, we bring you speed, reliability, and
              sustainability all in one service. Our bike-powered delivery
              ensures your packages arrive on time, every time, without adding
              to pollution.
            </p>
            <div>
              {featuresData.map((feature, idx) => (
                <div key={idx} className="flex items-center mt-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-accent-900 text-2xl text-accent-200 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-200 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-text-300">{feature.descr}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-text-300">
              Join us in choosing a smarter, greener way to deliver. Your
              package deserves the best, and so does the planet.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative max-w-xs md:max-w-sm mx-auto md:mx-0">
              <div className="relative w-full rounded-xl z-10 overflow-hidden">
                <Image
                  src="/featuresImage.jpg"
                  alt="features"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div className="bg-accent-900 size-32 absolute right-[90px] -z-10 filter blur-3xl" />
          <div className="bg-primary-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Features;
