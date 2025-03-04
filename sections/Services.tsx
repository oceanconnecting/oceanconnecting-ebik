import ImageCard from "@/components/ImageCard";
import SectionWrapper from "@/components/SectionWrapper";
import Tag from "@/components/Tag";
import React from "react";
const deliveryServices: {
  name: string;
  description: string;
  image: string;
}[] = [
  {
    name: "Eco-Friendly Standard Delivery",
    description:
      "Cost-effective delivery using our fleet of eco-friendly bikes. Ideal for non-urgent packages within the city.",
    image: "/services/service1.jpg",
  },
  {
    name: "Express Bike Delivery",
    description:
      "Fast and efficient bike delivery for small to medium packages, ensuring arrival within 1-2 business days.",
    image: "/services/service2.jpg",
  },
  {
    name: "Same-Day Bike Delivery",
    description:
      "Need it fast? Our riders deliver your package within hours, perfect for urgent deliveries within city limits.",
    image: "/services/service3.jpg",
  },
  {
    name: "Scheduled Bike Delivery",
    description:
      "Plan your delivery at your convenience. Choose a specific time slot for a smooth and hassle-free drop-off.",
    image: "/services/service4.jpg",
  },
  {
    name: "Secure & Insured Bike Delivery",
    description:
      "For valuable or fragile items, our trained couriers ensure safe transportation with insurance coverage.",
    image: "/services/service5.jpg",
  },
  {
    name: "Sustainable Business Deliveries",
    description:
      "Eco-conscious bulk deliveries for businesses, using bikes to reduce carbon emissions while ensuring timely arrivals.",
    image: "/services/service6.jpg",
  },
];

function Services() {
  return (
    <section>
      <SectionWrapper>
        <Tag>Services</Tag>
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
