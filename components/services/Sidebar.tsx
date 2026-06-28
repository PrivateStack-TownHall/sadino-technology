"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { serviceSections } from "@/constants/serviceSections";
import { iconMap } from "@/constants/iconMap";
import { stagger, fadeLeft } from "@/lib/animations";

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col sticky top-24 self-start w-full max-h-[calc(100vh-6rem)] p-6 overflow-y-auto">
      {/* HEADER */}
      <motion.div variants={fadeLeft} initial="hidden" animate="show" className="mb-6">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
          Project Navigator
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-0.5">Service Deep Dive</p>
      </motion.div>

      {/* NAV */}
      <motion.nav variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-1">
        {serviceSections.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = pathname.includes(item.id);

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              variants={fadeLeft}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-[#f2f4f6] hover:text-gray-700"
              }`}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />}
              <span>{item.label}</span>
            </motion.a>
          );
        })}
      </motion.nav>
    </aside>
  );
}
