"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO (NO SCROLL ANIMATION) ================= */}
      <Hero />

      {/* ================= SECTIONS ================= */}
      <motion.div variants={stagger} initial="hidden" animate="show">
        <Section>
          <Trusted />
        </Section>

        <Section>
          <Services />
        </Section>

        <Section>
          <WhyUs />
        </Section>

        <Section>
          <Portfolio />
        </Section>

        <Section>
          <Process />
        </Section>

        <Section>
          <CTA />
        </Section>
      </motion.div>
    </main>
  );
}

/* ================= WRAPPER ================= */

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
