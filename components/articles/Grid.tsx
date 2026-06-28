"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { articles } from "@/constants/articles";
import ArticleCard from "./Card";
import { useState } from "react";

interface ArticleGridProps {
  activeFilter?: string;
  searchQuery?: string;
}

const CATEGORY_MAP: Record<string, string[]> = {
  "All Stories": [],
  "Web Dev": ["Web Dev", "Web Development"],
  "AI": ["AI", "AI & Machine Learning"],
  "UI/UX": ["UI/UX", "UX"],
  "Business": ["Business"],
};

export default function ArticleGrid({ activeFilter = "All Stories", searchQuery = "" }: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const nonFeatured = articles.filter((a) => !a.featured);

  const filtered = nonFeatured.filter((a) => {
    const matchesCategory =
      activeFilter === "All Stories" ||
      (CATEGORY_MAP[activeFilter] || []).some((c) =>
        a.category?.toLowerCase().includes(c.toLowerCase())
      );

    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="container-custom mb-24">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-3xl font-bold whitespace-nowrap">Latest Perspectives</h3>
        <div className="h-[1px] bg-gray-100 flex-1" />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No articles found</p>
          <p className="text-sm mt-2">Try a different filter or search term</p>
        </div>
      ) : (
        <motion.div
          key={activeFilter + searchQuery}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((item) => (
            <ArticleCard key={item.slug} data={item} />
          ))}
        </motion.div>
      )}

      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((v) => v + 6)}
            className="px-8 py-3 bg-[#f2f4f6] hover:bg-gray-200 rounded-xl font-medium text-sm transition"
          >
            Load More Articles
          </button>
        </div>
      )}
    </section>
  );
}
