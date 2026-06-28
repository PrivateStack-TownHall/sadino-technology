"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

type Props = {
  data: {
    title: string;
    description: string;
    items: {
      name: string;
      icon: string;
    }[];
  };
};

export default function ServiceTechStack({ data }: Props) {
  return (
    <section id="tech-stack" className="py-20 bg-[#0f172a] text-white">
      <div className="container-custom text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-3">Tech Stack</p>
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto">{data.description}</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition"
            >
              <div className="w-8 h-8 bg-blue-600/30 rounded-lg flex items-center justify-center text-blue-400 text-xs font-bold">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="text-sm font-medium text-gray-200">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
