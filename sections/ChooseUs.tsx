import ImageTextContainer from "@/components/ImageTextContainer";
import { useTranslations } from "next-intl";
import React from "react";

function ChooseUs() {
  const t = useTranslations();

  return (
    <section id="career">
      <ImageTextContainer
        title={t("choose_us.title")}
        text={t("choose_us.text")}
        image="/chooseusimage.jpg"
      />
    </section>
  );
}

export default ChooseUs;
