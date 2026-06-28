"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

type Props = {
  data: {
    title: string;
    description: string;
    highlight: { label: string; text: string };
    steps: { title: string; desc: string }[];
  };
};

export default function ServiceProcess({ data }: Props) {
  return (
    <section id="process" className="py-20">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{data.title}</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">{data.description}</p>

          <div className="bg-[#f7f9fb] border-l-4 border-blue-600 p-5 rounded-r-xl">
            <p className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold mb-2">{data.highlight.label}</p>
            <p className="text-sm text-gray-600 italic leading-relaxed">"{data.highlight.text}"</p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {data.steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 shadow-md shadow-blue-200">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
