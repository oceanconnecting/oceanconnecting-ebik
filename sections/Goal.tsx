"use client";

import Carousel from "@/components/carousel";
import SectionWrapper from "@/components/SectionWrapper";
import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  {
    id: 0,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal1.jpg"
        alt="goal1"
        height={500}
        width={500}
      />
    ),
  },
  {
    id: 1,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal2.jpg"
        alt="goal2"
        height={500}
        width={500}
      />
    ),
  },
  {
    id: 2,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal3.jpg"
        alt="goal3"
        height={500}
        width={500}
      />
    ),
  },
  {
    id: 3,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal4.jpg"
        alt="goal4"
        height={500}
        width={500}
      />
    ),
  },
  {
    id: 4,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal5.jpg"
        alt="goal5"
        height={500}
        width={500}
      />
    ),
  },
  {
    id: 5,
    content: (
      <Image
        className="h-full w-full object-cover"
        src="/goal/goal6.jpg"
        alt="goal6"
        height={500}
        width={500}
      />
    ),
  },
];

function Goal() {
  const t = useTranslations("goal");
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="md:text-left text-center mb-8 mx-8 md:ml-16 md:mb-0">
          <Tag>{t("tag")}</Tag>
          <p className="mt-6 text-text-300">{t("description")}</p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-full flex justify-center items-center max-w-xs md:max-w-md mx-auto md:mx-0">
            <Carousel autoPlay={true} interval={5000} items={images} />
          </div>
        </div>
        <div className="bg-accent-900 size-32 absolute right-[90px] -z-10 filter blur-3xl" />
        <div className="bg-primary-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
      </div>
    </SectionWrapper>
  );
}

export default Goal;
