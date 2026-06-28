"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

import PortfolioHero from "@/components/portfolio/Hero";
import PortfolioFilter from "@/components/portfolio/Filter";
import PortfolioGrid from "@/components/portfolio/Grid";
import PortfolioCTA from "@/components/portfolio/CTA";

import { usePortfolioFilter } from "@/features/portfolio/hooks/usePortfolioFilter";

export default function PortfolioClient() {
  const { active, setActive, data } = usePortfolioFilter();

  return (
    <div className="pt-24">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <PortfolioHero />
        </motion.div>

        <motion.div variants={fadeUp}>
          <PortfolioFilter active={active} onChange={setActive} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <PortfolioGrid data={data} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <PortfolioCTA />
        </motion.div>
      </motion.div>
    </div>
  );
}
