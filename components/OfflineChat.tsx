"use client";

import { Send, ChevronDown, MessageCircle, RotateCw, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownOption {
  value: string;
  label: string;
}

function OfflineChat() {
  const offlineChatbotDataArray = [
    {
      id: 1,
      question: "How does your company deliver packages?",
      answer:
        "We use electric bikes (e-bikes) to deliver packages efficiently and sustainably.",
      followUp: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      question: "Why do you use e-bikes instead of cars?",
      answer:
        "E-bikes are environmentally friendly, reduce traffic congestion, and are more cost-effective for local deliveries.",
      followUp: [3, 4],
    },
    {
      id: 3,
      question: "How fast can your e-bikes deliver packages?",
      answer:
        "Our e-bikes can deliver packages within an hour for most local deliveries, depending on traffic and distance.",
      followUp: [5, 6],
    },
    {
      id: 4,
      question: "Do you deliver in all areas of the city?",
      answer:
        "We focus on urban areas with high demand for eco-friendly delivery options, but we're expanding to more regions.",
      followUp: [7, 8],
    },
    {
      id: 5,
      question:
        "Are there any restrictions on the types of packages you can deliver?",
      answer:
        "We deliver most small to medium-sized packages. However, there are restrictions for oversized or hazardous items.",
      followUp: [9],
    },
    {
      id: 6,
      question: "How can I track my package?",
      answer:
        "You can track your package in real-time via our app, which shows the location of your delivery rider.",
      followUp: [10],
    },
    {
      id: 7,
      question: "What happens if my delivery is delayed?",
      answer:
        "If there is a delay, you'll receive a notification with an updated estimated delivery time.",
      followUp: [11, 12],
    },
    {
      id: 8,
      question: "How much does it cost for a delivery?",
      answer:
        "Our pricing is based on the delivery distance and package size. Check our website or app for accurate pricing.",
      followUp: [13],
    },
    {
      id: 9,
      question: "Can I schedule a delivery in advance?",
      answer:
        "Yes, you can schedule a delivery up to 7 days in advance through our app.",
      followUp: [],
    },
    {
      id: 10,
      question: "What if I need to change my delivery address?",
      answer:
        "You can update the delivery address through our app before the package is picked up by the rider.",
      followUp: [],
    },
    {
      id: 11,
      question: "Do you offer any eco-friendly packaging options?",
      answer:
        "Yes, we offer recyclable and sustainable packaging for our deliveries.",
      followUp: [],
    },
    {
      id: 12,
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team through the contact section of our app or website.",
      followUp: [],
    },
    {
      id: 13,
      question: "Is your delivery service available outside of business hours?",
      answer:
        "We offer deliveries during extended hours, including weekends, to accommodate customers' needs.",
      followUp: [14],
    },
    {
      id: 14,
      question: "How can I sign up for your delivery service?",
      answer:
        "You can sign up easily through our website or app by providing basic details and setting up a delivery account.",
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
              <h2 className="text-xl flex-1 font-semibold">offline chat</h2>
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
                        {selectedQuestion || "select question"}
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
