"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/animations/hero-ai.json";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center flex-col text-center px-4">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Xenial Intelligence Ltd
      </motion.h1>
      <motion.p
        className="text-xl max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AI-powered software solutions to optimize and transform your business.
      </motion.p>
      <div className="mt-10 w-80">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </section>
  );
}
