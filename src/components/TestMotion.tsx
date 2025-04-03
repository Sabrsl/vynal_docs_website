"use client";

import React from "react";
import { motion } from "framer-motion";

export function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-blue-100 p-4 rounded-lg"
    >
      Ceci est un test de framer-motion
    </motion.div>
  );
} 