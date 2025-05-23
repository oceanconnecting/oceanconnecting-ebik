import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

interface ImageTextContainerProps {
  title: string;
  text: string;
  image: string;
}

function ImageTextContainer({ title, text, image }: ImageTextContainerProps) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="md:text-left text-center mb-8 mx-8 md:ml-16 md:mb-0">
          <h1 className="font-sora text-4xl text-accent-200 font-extrabold lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-text-300">{text}</p>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative max-w-xs md:max-w-md mx-auto md:mx-0">
            <div className="relative rounded-xl my-6 z-10 overflow-hidden">
              <Image src={image} alt={title} width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="bg-accent-900 size-32 absolute right-[90px] -z-10 filter blur-3xl" />
        <div className="bg-primary-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
      </div>
    </SectionWrapper>
  );
}

export default ImageTextContainer;
