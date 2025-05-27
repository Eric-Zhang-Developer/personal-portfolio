"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 p-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center text-6xl font-bold text-primary"
        variants={itemVariants}
      >
        Hello, I&apos;m <span className="text-accent">Eric Zhang</span>
      </motion.h1>
      <motion.p
        className="mb-8 text-center text-3xl text-secondary"
        variants={itemVariants}
      >
        Forging robust web applications with precision and purpose
      </motion.p>

      <motion.div className="mb-8" variants={itemVariants}>
        <Link
          href="/projects"
          className="transform rounded-lg border-2 border-primary px-8 py-4 text-xl text-primary shadow-md shadow-accent/30 transition hover:border-accent hover:text-accent hover:shadow-xl"
        >
          View Projects
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>

        <Image
          src="/avatar.png"
          alt="Eric Zhang"
          width={180}
          height={180}
          className="rounded-full border-2 border-primary shadow-md shadow-accent/30 transition hover:scale-105 hover:border-accent hover:shadow-lg"
        ></Image>
      </motion.div>
    </motion.div>
  );
}
