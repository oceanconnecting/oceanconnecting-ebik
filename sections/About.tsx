import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";

function About() {
  return (
    <section id="about">
      <SectionWrapper>
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
          <div className="relative flex ml-0 lg:ml-8 justify-center items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="relative rounded-xl my-6 z-10 overflow-hidden">
                <Image
                  src="/ebike.jpg"
                  alt="ebike"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="md:text-left text-center mb-8 mx-8 md:ml-16 md:mb-0">
            <h1 className="font-sora text-4xl text-accent-200 font-extrabold lg:text-5xl">
              about us
            </h1>
            <p className="mt-6 text-text-300">
              At e-bike delivery, we are revolutionizing urban package delivery
              with our fleet of eco-friendly electric bikes. Our mission is to
              provide fast, reliable, and sustainable delivery solutions that
              reduce carbon emissions and traffic congestion in cities.
            </p>
            <p className="mt-4 text-text-300">
              We specialize in same-day and last-mile delivery, ensuring that
              your packages arrive on time while keeping our streets cleaner and
              greener. Our couriers navigate through traffic efficiently using
              e-bikes, allowing us to offer a cost-effective and eco-conscious
              alternative to traditional delivery services.
            </p>
            <p className="mt-4 text-text-300">
              With real-time tracking, secure handling, and exceptional customer
              service, we make sure every package reaches its destination
              safely. Whether you're a business looking for a dependable
              delivery partner or an individual sending a package across town,
              e-bike delivery is here to deliver—fast, green, and hassle-free.
            </p>
          </div>
          <div className="bg-accent-900 size-32 absolute right-[90px] -z-10 filter blur-3xl" />
          <div className="bg-primary-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
        </div>
      </SectionWrapper>
    </section>
  );
}

export default About;
