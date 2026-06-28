"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  Share2,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-custom grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* HEADER */}
          <div className="space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-blue-600 font-semibold"
            >
              Connect With Us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Let's Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Something Great
              </span>{" "}
              Together
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted max-w-lg">
              Ready to transform your digital landscape? Whether you have a
              project in mind or just want to explore possibilities, our
              architects are here to guide you.
            </motion.p>
          </div>

          {/* CONTACT LIST */}
          <div className="space-y-6">
            <ContactItem
              icon={Mail}
              title="Email Us"
              value="hello@sadino.tech"
            />

            <ContactItem
              icon={Phone}
              title="Call Us"
              value="+1 (555) 000-TECH"
            />

            <ContactItem
              icon={MapPin}
              title="Office Address"
              value="123 Innovation Drive, Tech Valley"
            />
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-xs uppercase text-muted mb-4">
              Follow Our Journey
            </p>

            <div className="flex gap-3">
              {[Globe, Users, Share2].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* WHATSAPP */}
          <div>
            <button className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border hover:shadow-md transition">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>

              <div className="text-left">
                <p className="text-xs text-muted uppercase">Instant Help</p>
                <p className="font-semibold">WhatsApp Support</p>
              </div>
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* BG GLOW */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100 blur-3xl rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 blur-3xl rounded-full -z-10" />

          {/* FORM CARD */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,74,198,0.08)] border border-gray-100">
            <div className="space-y-8">
              {/* ================= NAME + EMAIL ================= */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Work Email" placeholder="john@company.com" />
              </div>

              {/* ================= SELECT ================= */}
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Project Type"
                  options={[
                    "Web Development",
                    "Mobile App",
                    "UI/UX Design",
                    "Custom Solution",
                  ]}
                />
                <Select
                  label="Budget Range"
                  options={[
                    "$10k - $25k",
                    "$25k - $50k",
                    "$50k - $100k",
                    "$100k+",
                  ]}
                />
              </div>

              {/* ================= TEXTAREA ================= */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tell us about your project
                </label>

                <textarea
                  rows={5}
                  placeholder="Share your vision, goals, and challenges..."
                  className="
          w-full rounded-xl border border-gray-200
          px-4 py-3 text-sm
          focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
          transition
        "
                />
              </div>

              {/* ================= BUTTON ================= */}
              <div className="pt-2">
                <button
                  className="
          w-full rounded-xl py-4 font-semibold text-white
          bg-gradient-to-r from-blue-600 to-blue-500
          shadow-lg shadow-blue-500/30
          hover:shadow-xl hover:-translate-y-0.5
          active:translate-y-0
          transition-all duration-200
        "
                >
                  Get Free Consultation →
                </button>

                <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Terms of Service
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ContactItem({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2 }}
      className="
        flex items-start gap-4 p-4 -ml-2
        rounded-xl transition-all duration-200
        hover:bg-white hover:shadow-md
      "
    >
      {/* ICON */}
      <div
        className="
          w-11 h-11 rounded-xl
          bg-blue-50 text-blue-600
          flex items-center justify-center
          transition group-hover:scale-105
        "
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{value}</p>
      </div>
    </motion.div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      {/* LABEL */}
      <label
        className="
          text-xs font-semibold uppercase tracking-wider
          text-gray-400
        "
      >
        {label}
      </label>

      {/* INPUT */}
      <input
        placeholder={placeholder}
        className="
          w-full px-4 py-3 text-sm
          rounded-xl border border-gray-200
          bg-white

          focus:outline-none
          focus:ring-4 focus:ring-blue-100
          focus:border-blue-500

          transition-all duration-200
        "
      />
    </div>
  );
}

function Select({ label, options = [] }: { label: string; options: string[] }) {
  return (
    <div className="space-y-2">
      {/* LABEL */}
      <label
        className="
          text-xs font-semibold uppercase tracking-wider
          text-gray-400
        "
      >
        {label}
      </label>

      {/* SELECT WRAPPER */}
      <div className="relative">
        <select
          className="
            w-full px-4 py-3 text-sm
            rounded-xl border border-gray-200
            bg-white appearance-none

            focus:outline-none
            focus:ring-4 focus:ring-blue-100
            focus:border-blue-500

            transition-all duration-200
          "
        >
          {options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>

        {/* ICON */}
        <span
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            text-gray-400 pointer-events-none text-sm
          "
        >
          ▼
        </span>
      </div>
    </div>
  );
}
