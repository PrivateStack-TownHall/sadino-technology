"use client";

import { motion } from "framer-motion";

import { services } from "@/constants/services";
import { fadeUp, stagger } from "@/lib/animations";

import ServiceSidebar from "@/components/services/Sidebar";
import ServiceHero from "@/components/services/Hero";
import ServiceCapabilities from "@/components/services/Capabilities";
import ServiceProcess from "@/components/services/Process";
import ServiceTechStack from "@/components/services/TechStack";
import ServiceCTA from "@/components/services/CTA";

export default function CompanyProfilePage() {
  const service = services["company-profile"];

  return (
    <div className="flex">
      {/* SIDEBAR (FULL WIDTH AREA) */}
      <div className="w-64 hidden lg:block">
        <ServiceSidebar />
      </div>

      {/* MAIN */}
      <main className="flex-1  ">
        <div className="container-custom">
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
