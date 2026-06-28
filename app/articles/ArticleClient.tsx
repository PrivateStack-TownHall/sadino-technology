"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { useState } from "react";

import ArticleHero from "@/components/articles/Hero";
import ArticleFilter from "@/components/articles/Filter";
import ArticleFeatured from "@/components/articles/Featured";
import ArticleGrid from "@/components/articles/Grid";
import ArticleNewsletter from "@/components/articles/Newsletter";

export default function ArticleClient() {
  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-28 pb-24">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <ArticleHero />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleFilter
            active={activeFilter}
            onFilter={setActiveFilter}
            onSearch={setSearchQuery}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleFeatured />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleGrid activeFilter={activeFilter} searchQuery={searchQuery} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleNewsletter />
        </motion.div>
      </motion.div>
    </div>
  );
}
