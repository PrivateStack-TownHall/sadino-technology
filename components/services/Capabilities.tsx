"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { iconMap } from "@/constants/iconMap";

type Props = {
  data: {
    title: string;
    items: {
      title: string;
      desc: string;
      variant: string;
      icon: string;
    }[];
  };
};

export default function ServiceCapabilities({ data }: Props) {
  return (
    <section id="capabilities" className="section-muted">
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase text-blue-600 mb-2">Capabilities</p>
          <h2 className="heading-lg">{data.title}</h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.items.map((item, i) => {
            const isLarge = item.variant === "large";
            const isHighlight = item.variant === "highlight";

            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`
                  card
                  ${isLarge ? "md:col-span-2" : ""}
                  ${isHighlight ? "bg-blue-600 text-white" : ""}
                `}
              >
                {/* ICON */}
                {Icon && <Icon className="w-6 h-6 mb-4 opacity-80" />}

                {/* CONTENT */}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
