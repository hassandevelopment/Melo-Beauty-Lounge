"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

type AnimVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "stagger";

const variantMap: Record<AnimVariant, Variants> = {
  fadeUp, fadeIn, slideLeft, slideRight, stagger: staggerContainer,
};

export default function Motion({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  variant?: AnimVariant;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });
  const v = variantMap[variant];

  const tweaked: Variants = {
    hidden: v.hidden,
    visible: {
      ...(v.visible as object),
      transition: {
        ...((v.visible as { transition?: object }).transition ?? {}),
        delay: delay / 1000,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={tweaked}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
