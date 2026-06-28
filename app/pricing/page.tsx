"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Check, Shield, Zap, Rocket } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    label: "Let's Talk",
    sub: "Consultation-First",
    icon: Zap,
    features: ["MVP Development", "UI/UX Prototype", "Cloud Deployment", "Basic Maintenance"],
    cta: "Schedule Intro",
    highlight: false,
  },
  {
    name: "Business",
    label: "Custom Quote",
    sub: "Scaling Infrastructure",
    icon: Shield,
    features: ["Dedicated Team", "Scalable Architecture", "Maintenance & Support", "Full DevOps Integration", "Bi-weekly Syncs"],
    cta: "Start Consultation",
    highlight: true,
  },
  {
    name: "Custom",
    label: "Let's Connect",
    sub: "Enterprise Solutions",
    icon: Rocket,
    features: ["Legacy System Migration", "Custom AI Integration", "24/7 Priority Support", "Global Infrastructure"],
    cta: "Inquire Now",
    highlight: false,
  },
];

export default function PricingPage() {
  const [form, setForm] = useState({ name: "", email: "", objective: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inquiry submitted!\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="pt-28 pb-24 bg-white">

      {/* ===== HERO ===== */}
      <section className="container-custom text-center mb-20">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Architectural{" "}
            <span className="text-blue-600">Precision</span>,
            <br />Flexible Pricing.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't believe in one-size-fits-all software. Every digital masterpiece
            requires a tailored foundation. Explore our consultation-led engagement models.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="container-custom max-w-5xl mb-32">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                  plan.highlight
                    ? "bg-white shadow-2xl shadow-blue-100 border-2 border-blue-200 scale-105 z-10"
                    : "bg-[#f7f9fb]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* ICON + NAME */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlight ? "bg-blue-100 text-blue-600" : "bg-white text-gray-500"}`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-gray-700">{plan.name}</span>
                </div>

                {/* PRICE */}
                <div className="mb-8">
                  <p className="text-3xl font-extrabold tracking-tight text-gray-900">{plan.label}</p>
                  <p className={`text-xs font-semibold uppercase tracking-wider mt-1 ${plan.highlight ? "text-blue-600" : "text-gray-400"}`}>
                    {plan.sub}
                  </p>
                </div>

                {/* FEATURES */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-blue-600" : "bg-gray-200"}`}>
                        <Check size={11} color="white" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:opacity-90"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== CUSTOM QUOTE FORM ===== */}
      <section className="container-custom mb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-[#f7f9fb]"
        >
          {/* LEFT — FORM */}
          <div className="p-10 lg:p-14">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">Get a Custom Quote</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our architects are ready to blueprint your next innovation. Fill out
                the brief below and we'll contact you within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block mb-1.5">Your Name</label>
                  <input
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block mb-1.5">Company Email</label>
                  <input
                    placeholder="john@company.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block mb-1.5">Project Objective</label>
                <div className="relative">
                  <select
                    value={form.objective}
                    onChange={(e) => setForm({ ...form, objective: e.target.value })}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition appearance-none"
                  >
                    <option value="">New Product Development</option>
                    <option value="migration">System Migration</option>
                    <option value="redesign">UI/UX Redesign</option>
                    <option value="custom">Custom Development</option>
                    <option value="ai">AI Integration</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition resize-none"
                />
              </div>

              <button
                type="button" onClick={handleSubmit}
                className="w-full h-12 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-200 hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Submit Inquiry →
              </button>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative min-h-[400px] bg-[#0f172a] flex flex-col justify-end">
            {/* Dark tech background SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="500" fill="url(#grid)" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="12" fill="#3b82f6" opacity="0.6" />
            </svg>

            {/* Floating person silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-56 bg-gradient-to-b from-gray-600/40 to-gray-800/40 rounded-2xl backdrop-blur-sm border border-white/10 flex items-end justify-center pb-4">
                <div className="text-center text-white/60 text-xs">Consultation</div>
              </div>
            </div>

            {/* Floating trust card */}
            <div className="relative z-10 p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/30 flex items-center justify-center">
                    <MessageIcon />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Live Consultation</p>
                    <p className="text-white/50 text-[10px]">Typical response: Under 2 hours</p>
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed italic">
                  "The Sadino team didn't just give us a price; they gave us a
                  roadmap that saved our company 30% in infrastructure costs within the first quarter."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== BOTTOM STATS ===== */}
      <section className="container-custom">
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="md:col-span-1 bg-blue-600 text-white p-10 rounded-2xl"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Shield size={20} color="white" />
            </div>
            <p className="text-4xl font-extrabold mb-2">99.9%</p>
            <p className="text-blue-100 text-sm leading-relaxed">
              Infrastructure uptime for Business & Custom clients.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="bg-[#f7f9fb] p-10 rounded-2xl"
          >
            <p className="text-4xl font-extrabold mb-2">500+</p>
            <p className="text-sm text-gray-500">Digital projects delivered globally.</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="bg-[#f7f9fb] p-10 rounded-2xl border-l-4 border-blue-600"
          >
            <p className="text-4xl font-extrabold mb-2">15min</p>
            <p className="text-sm text-gray-500">Average initial response time for inquiries.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
