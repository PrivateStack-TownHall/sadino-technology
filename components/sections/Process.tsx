"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  { num: "1", title: "Discovery", desc: "In-depth audit of your business goals and market landscape." },
  { num: "2", title: "Design", desc: "Creating high-fidelity prototypes and user experience maps." },
  { num: "3", title: "Development", desc: "Agile coding phases with continuous testing and integration." },
  { num: "4", title: "Deployment", desc: "Launch strategy, performance tuning, and 24/7 monitoring." },
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-gray-900"
        >
          The Road to Launch
        </motion.h2>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+6px)] right-[calc(12.5%+6px)] h-[2px] bg-gray-100" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* NUMBER CIRCLE */}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base mb-6 relative z-10 shadow-lg shadow-blue-200">
                  {step.num}
                </div>

                <h4 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
