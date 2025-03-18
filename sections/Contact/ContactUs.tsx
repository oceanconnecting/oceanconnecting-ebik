"use client";
import React, { FormEvent, useRef, useState } from "react";
import { sendMail } from "./Actions";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl"; // Import useTranslation hook

const notifySuccess = () => toast.success("form submited Successfully!");
const notifyError = () => toast.error("something went wrong!");

const Map = dynamic(() => import("@/components/MyMap"), {
  ssr: false,
});

function ContactUs() {
  const t = useTranslations(); // Get translation function
  const [formData, setFormData] = useState({
    nomPrenom: "",
    email: "",
    message: "",
  });

  const [IsSubmitting, setIsSubmitting] = useState(false);

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const clearInputs = () => {
    if (nameInput.current) nameInput.current.value = "";
    if (emailInput.current) emailInput.current.value = "";
    if (messageInput.current) messageInput.current.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (IsSubmitting) return;
    setIsSubmitting(true);
    try {
      await sendMail(formData);
      notifySuccess();
      clearInputs();
      setFormData({
        nomPrenom: "",
        email: "",
        message: "",
      });
    } catch (error) {
      notifyError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen relative bg-background-950 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-32"
    >
      <Toaster />
      <Image
        src={"/contact.jpg"}
        alt={t("contactUs.heading")} // Using translation for alt text
        width={1280}
        height={720}
        className=" absolute object-cover w-full h-full z-0"
      ></Image>
      <div className="bg-accent-50/35 z-[1] absolute w-full h-full" />
      <div className="z-[2] relative w-full flex flex-col lg:flex-row items-stretch gap-10 justify-stretch">
        <div className="w-full z-[2] space-y-8 bg-white p-6 rounded-xl shadow-md">
          <div>
            <h2 className="mt-6 font-sora text-center text-3xl font-extrabold text-accent-200">
              {t("contactUs.heading")}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {t("contactUs.subheading")}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-accent-100" htmlFor="nomPrenom">
                  {t("contactUs.nameLabel")}
                </label>
                <input
                  id="nomPrenom"
                  name="nomPrenom"
                  type="text"
                  ref={nameInput}
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder={t("contactUs.namePlaceholder")}
                  value={formData.nomPrenom}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-accent-100" htmlFor="email">
                  {t("contactUs.emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailInput}
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder={t("contactUs.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-accent-100" htmlFor="message">
                  {t("contactUs.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={messageInput}
                  required
                  className="appearance-none min-h-32 max-h-64 rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder={t("contactUs.messagePlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={IsSubmitting}
                className="group gap-3 bg-gradient-to-l from-primary-400 to-primary-500 disabled:bg-gray-400 relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                {IsSubmitting && <Loader className=" animate-spin" />}
                {t("contactUs.submitButton")}
              </button>
            </div>
          </form>
        </div>
        <Map />
      </div>
    </div>
  );
}

export default ContactUs;
