import ImageCard from "@/components/ImageCard";
import SectionWrapper from "@/components/SectionWrapper";
import Tag from "@/components/Tag";
import React from "react";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations("services");

  const deliveryServices: {
    name: string;
    description: string;
    image: string;
  }[] = [
    {
      name: t("service1.name"),
      description: t("service1.descr"),
      image: "/services/service1.jpg",
    },
    {
      name: t("service2.name"),
      description: t("service2.descr"),
      image: "/services/service2.jpg",
    },
    {
      name: t("service3.name"),
      description: t("service3.descr"),
      image: "/services/service3.jpg",
    },
    {
      name: t("service4.name"),
      description: t("service4.descr"),
      image: "/services/service4.jpg",
    },
    {
      name: t("service5.name"),
      description: t("service5.descr"),
      image: "/services/service5.jpg",
    },
    {
      name: t("service6.name"),
      description: t("service6.descr"),
      image: "/services/service6.jpg",
    },
  ];

  return (
    <section id="services">
      <SectionWrapper>
        <Tag>{t("tag")}</Tag>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 justify-center gap-4 mt-16">
          {deliveryServices.map((service, idx) => (
            <div key={idx} className="h-64">
              <ImageCard
                title={service.name}
                descr={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Services;
