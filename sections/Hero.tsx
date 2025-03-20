"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden py-12 md:py-20">
      {/* Background decorative elements */}
      <div className="bg-accent-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
      <div className="bg-primary-800 size-32 absolute bottom-1/2 right-[90px] -z-10 filter blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300/10 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="relative z-10 grid grid-cols-1 md:flex justify-center gap-8 items-center">
          {/* Left column image */}
          <motion.div
            initial={{ left: -300, rotate: -25 }}
            whileInView={{ left: -80, rotate: -6 }}
            exit={{ left: -80, rotate: -6 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="absolute hidden -z-10 lg:flex justify-center items-center"
          >
            <div className="relative max-w-xs md:max-w-xs mx-auto md:mx-0">
              <div className="relative z-10 overflow-hidden p-2">
                <Image
                  src="/hero/hero.jpg"
                  alt="Delivery service illustration"
                  width={800}
                  height={700}
                  className="w-full rounded-2xl h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Center column - Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto max-w-lg mb-8 md:mb-0"
          >
            <div className="inline-flex items-center border bg-gradient-to-t from-background-900 to-white shadow-md border-background-950 gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex justify-center -space-x-2">
                {["/hero/p1.jpg", "/hero/p2.jpg", "/hero/p3.jpg"].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <Image src={i} width={100} height={100} alt="" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium">{t("trusted_by")}</span>
            </div>

            <h1 className="font-sora text-4xl font-extrabold lg:text-5xl">
              {t("headline_main")}
              <strong className="font-extrabold bg-clip-text text-transparent p-1 rounded-md bg-gradient-to-r from-primary-400 to-primary-600 block mt-2">
                {t("headline_strong")}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-text-300">
              {t("description")}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Button variant="primary" href="#contact">
                {t("get_started")}
              </Button>

              <Button variant="secondary" href="#contact">
                {t("contact_us")}
              </Button>
            </div>
          </motion.div>

          {/* Right column image */}
          <motion.div
            initial={{ right: -300, rotate: 25 }}
            whileInView={{ right: -80, rotate: 6 }}
            exit={{ right: -80, rotate: 6 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="absolute hidden -z-10 lg:flex justify-center items-center"
          >
            <div className="relative max-w-xs md:max-w-xs mx-auto md:mx-0">
              <div className="relative z-10 overflow-hidden p-2">
                <Image
                  src="/hero/hero2.jpg"
                  alt="Delivery service illustration"
                  width={800}
                  height={700}
                  className="w-full rounded-2xl h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
