"use client";

import { Send, ChevronDown, MessageCircle, RotateCw, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface DropdownOption {
  value: string;
  label: string;
}

function OfflineChat() {
  const t = useTranslations("chatbot");
  const offlineChatbotDataArray = [
    {
      id: 1,
      question: t("question_1"),
      answer: t("answer_1"),
      followUp: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      question: t("question_2"),
      answer: t("answer_2"),
      followUp: [3, 4],
    },
    {
      id: 3,
      question: t("question_3"),
      answer: t("answer_3"),
      followUp: [5, 6],
    },
    {
      id: 4,
      question: t("question_4"),
      answer: t("answer_4"),
      followUp: [7, 8],
    },
    {
      id: 5,
      question: t("question_5"),
      answer: t("answer_5"),
      followUp: [9],
    },
    {
      id: 6,
      question: t("question_6"),
      answer: t("answer_6"),
      followUp: [10],
    },
    {
      id: 7,
      question: t("question_7"),
      answer: t("answer_7"),
      followUp: [11, 12],
    },
    {
      id: 8,
      question: t("question_8"),
      answer: t("answer_8"),
      followUp: [13],
    },
    {
      id: 9,
      question: t("question_9"),
      answer: t("answer_9"),
      followUp: [],
    },
    {
      id: 10,
      question: t("question_10"),
      answer: t("answer_10"),
      followUp: [],
    },
    {
      id: 11,
      question: t("question_11"),
      answer: t("answer_11"),
      followUp: [],
    },
    {
      id: 12,
      question: t("question_12"),
      answer: t("answer_12"),
      followUp: [],
    },
    {
      id: 13,
      question: t("question_13"),
      answer: t("answer_13"),
      followUp: [14],
    },
    {
      id: 14,
      question: t("question_14"),
      answer: t("answer_14"),
      followUp: [],
    },
  ];

  const [availableQuestions, setAvailableQuestions] = useState<
    DropdownOption[]
  >(
    offlineChatbotDataArray.map((q) => ({
      value: q.id.toString(),
      label: q.question,
    }))
  );
  const [conversation, setConversation] = useState<
    { type: "bot" | "user"; content: string }[]
  >([{ type: "bot", content: "how can we help you :)" }]);
  const [toggle, setToggle] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!chatRef.current?.contains(event.target as Node)) {
        setToggle(false); // Close chat if clicked outside it
      } else if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside it but inside chatbox
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function Message({
    type,
    content,
  }: {
    type: "user" | "bot";
    content: string;
  }) {
    return (
      <div
        className={`max-w-[80%] ${
          type === "user" ? "ml-auto" : "mr-auto"
        } mb-2`}
      >
        <div
          className={`p-3 rounded-lg ${
            type === "user"
              ? "bg-primary-500 text-white"
              : "bg-background-800 text-text-200"
          }`}
        >
          {content}
        </div>
      </div>
    );
  }

  function resetChat() {
    setConversation([{ type: "bot", content: "how we can help you?" }]);
    setAvailableQuestions(
      offlineChatbotDataArray.map((q) => ({
        value: q.id.toString(),
        label: q.question,
      }))
    );
  }

  function addQuestion(question: string) {
    const selectedQuestion = offlineChatbotDataArray.find(
      (q) => q.question === question
    );
    if (!selectedQuestion) return;

    setConversation((prev) => [
      ...prev,
      { type: "user", content: selectedQuestion.question },
      {
        type: "bot",
        content: selectedQuestion.answer,
      },
    ]);

    if (selectedQuestion.followUp) {
      const newQuestions = offlineChatbotDataArray
        .filter((q) => selectedQuestion.followUp?.includes(q.id))
        .map((q) => ({ value: q.id.toString(), label: q.question }));
      setAvailableQuestions(newQuestions);
    } else {
      setAvailableQuestions([]);
    }
    setSelectedQuestion(null);
    setIsDropdownOpen(false);
  }

  return (
    <div className="fixed bottom-12 gap-2 justify-center flex flex-col -right-1 z-50 m-6">
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            ref={chatRef}
            className="w-80 h-[26rem] flex flex-col rounded-lg shadow-lg bg-background-950 overflow-hidden"
          >
            <div className="bg-primary-500 flex gap-2 items-center text-text-950 p-4">
              <h2 className="text-xl flex-1 font-semibold">{t("chatbot")}</h2>
              <div className="group cursor-pointer" onClick={() => resetChat()}>
                <RotateCw
                  size={20}
                  className="group-hover:rotate-180 transition-all duration-200"
                />
              </div>
              <div onClick={() => setToggle(false)} className="cursor-pointer">
                <X size={20} />
              </div>
            </div>
            <div className="flex-1 overflow-x-clip border-background-800 overflow-y-auto p-4">
              {conversation.map((message, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: message.type === "bot" ? -100 : 100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: message.type === "bot" ? 0.3 : 0,
                  }}
                >
                  <Message type={message.type} content={message.content} />
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-4 border-t border-background-700">
              {availableQuestions.length > 0 ? (
                <div className="relative" ref={dropdownRef}>
                  <div className="relative">
                    <button
                      className="w-full p-2 border border-background-800 rounded-lg bg-background-950 flex items-center cursor-pointer"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <ChevronDown
                        size={20}
                        className={`text-text-500 mx-1 transition-transform duration-200 ${
                          isDropdownOpen ? "transform rotate-180" : ""
                        }`}
                      />
                      <span className="text-text-100 truncate">
                        {selectedQuestion || t("select")}
                      </span>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute bottom-full left-0 right-0 mb-1 bg-background-950 border border-background-800 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                        {availableQuestions.map((q) => (
                          <div
                            key={q.value}
                            className="p-2 hover:bg-background-900 cursor-pointer"
                            onClick={() => {
                              setSelectedQuestion(q.label);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {q.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 text-primary-500 p-1 bg-background-950/90 hover:text-primary-600 transition-colors duration-200",
                      "right-2"
                    )}
                    onClick={() =>
                      selectedQuestion && addQuestion(selectedQuestion)
                    }
                  >
                    <Send size={20} />
                  </button>
                </div>
              ) : (
                <button
                  className="bg-primary-500 hover:bg-primary-600 text-white block rounded-full font-inter text-button px-2.5 py-2.5 h-fit w-fit transition"
                  onClick={() => resetChat()}
                >
                  <RotateCw />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!toggle && (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            exit={{ scale: 0 }}
            onClick={() => setToggle(!toggle)}
            className="bg-primary-500 absolute right-0 bottom-0 hover:bg-primary-600 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg transition-colors duration-200"
          >
            <MessageCircle size={24} />
            <div className="w-3 h-3 rounded-full bg-red-600 absolute left-0 top-0" />
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                times: [0, 0.1, 1],
              }}
              className="w-3 h-3 rounded-full bg-red-600 absolute left-0 top-0"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OfflineChat;
