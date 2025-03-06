"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Tag from "@/components/Tag";
import Image from "next/image";
import { Star } from "lucide-react";

interface CardProps {
  image: string;
  name: string;
  descr: string;
  starRate: number;
}

function Card({ image, name, descr, starRate }: CardProps) {
  return (
    <div className="bg-background-950 shadow-md p-6 min-h-24 w-[500px] rounded-lg flex-shrink-0">
      <div className="flex items-center gap-7 mb-2">
        <Image
          className="w-16 h-16 shadow-md rounded-full object-cover"
          src={image}
          width={300}
          height={300}
          alt={name}
        />
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <div className="mt-2 flex gap-4 justify-center w-fit items-center font-semibold">
            <div className="flex gap-2">
              {Array.from({ length: starRate }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              {Array.from({ length: 5 - starRate }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-background-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-text-300 w-full mt-3">{descr}</p>
    </div>
  );
}

function Opinion() {
  const opinions = [
    {
      name: "Alex Smith",
      descr:
        "Fantastic service! My package arrived on time, and I love that they use e-bikes to reduce pollution. Will definitely use them again!",
      starRate: 5,
      image: "/opinion/p1.jpg",
    },
    {
      name: "James Carter",
      descr:
        "Great eco-friendly initiative! The delivery was a bit slower than expected, but I appreciate the effort to go green.",
      starRate: 4,
      image: "/opinion/p2.jpg",
    },
    {
      name: "Mark Rodríguez",
      descr:
        "I had a small issue with tracking, but overall, the service was good. Love the concept of using e-bikes for deliveries!",
      starRate: 3,
      image: "/opinion/p3.jpg",
    },
    {
      name: "Mark Johnson",
      descr:
        "Excellent service! The delivery was quick, and I admire their commitment to sustainability. Highly recommend!",
      starRate: 5,
      image: "/opinion/p4.jpg",
    },
    {
      name: "Adersson White",
      descr:
        "I appreciate companies that care about the environment. My order arrived in perfect condition, and the courier was very friendly.",
      starRate: 5,
      image: "/opinion/p5.jpg",
    },
    {
      name: "darren Brown",
      descr:
        "Very innovative concept! The service was reliable, but I hope they expand their coverage to more areas.",
      starRate: 4,
      image: "/opinion/p6.jpg",
    },
    {
      name: "bill Chen",
      descr:
        "Super fast delivery and excellent customer support! Plus, it's great to see a company committed to sustainability.",
      starRate: 5,
      image: "/opinion/p7.jpg",
    },
  ];

  const FAST_DURATION = 20;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);
  return (
    <section id="opinion" className="bg-background-900 py-16">
      <div className="flex flex-col [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)] overflow-hidden items-center py-6 w-full h-fit">
        <Tag>What people said about us</Tag>
        <div className="overflow-hidden mt-12 py-1 w-full">
          <motion.div
            className="flex gap-6 w-max flex-nowrap"
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onTouchStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onTouchEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...opinions, ...opinions].map((opinion, idx) => (
              <Card key={idx} {...opinion} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Opinion;
