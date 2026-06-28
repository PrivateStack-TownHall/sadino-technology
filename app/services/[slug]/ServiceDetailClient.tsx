"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

import ServiceSidebar from "@/components/services/Sidebar";
import ServiceHero from "@/components/services/Hero";
import ServiceCapabilities from "@/components/services/Capabilities";
import ServiceProcess from "@/components/services/Process";
import ServiceTechStack from "@/components/services/TechStack";
import ServiceCTA from "@/components/services/CTA";

type Props = {
  service: any;
};

export default function ServiceDetailClient({ service }: Props) {
  return (
    <div className="flex pt-20">
      {/* SIDEBAR */}
      <aside className="w-56 shrink-0 hidden lg:block">
        <ServiceSidebar />
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0">
        <div className="container-custom pl-8">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <ServiceHero data={service.hero} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ServiceCapabilities data={service.capabilities} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ServiceProcess data={service.process} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ServiceTechStack data={service.techStack} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ServiceCTA data={service.cta} />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
