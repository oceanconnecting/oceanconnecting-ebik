import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();

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
              {t("about_us.title")}
            </h1>
            <p className="mt-6 text-text-300">{t("about_us.paragraph_1")}</p>
            <p className="mt-4 text-text-300">{t("about_us.paragraph_2")}</p>
            <p className="mt-4 text-text-300">{t("about_us.paragraph_3")}</p>
          </div>
          <div className="bg-accent-900 size-32 absolute right-[90px] -z-10 filter blur-3xl" />
          <div className="bg-primary-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
        </div>
      </SectionWrapper>
    </section>
  );
}

export default About;
