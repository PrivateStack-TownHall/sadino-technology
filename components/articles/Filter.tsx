"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Search } from "lucide-react";

interface ArticleFilterProps {
  active: string;
  onFilter: (val: string) => void;
  onSearch: (val: string) => void;
}

export default function ArticleFilter({ active, onFilter, onSearch }: ArticleFilterProps) {
  const filters = ["All Stories", "Web Dev", "AI", "UI/UX", "Business"];

  return (
    <motion.section variants={fadeUp} className="container-custom mb-16">
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-[#f2f4f6] p-5 rounded-2xl">
        {/* FILTER */}
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => onFilter(item)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                active === item
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-600 hover:text-blue-600 border border-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <input
            placeholder="Search articles..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 transition"
          />
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </motion.section>
  );
}
