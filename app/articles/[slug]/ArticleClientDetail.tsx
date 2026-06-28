"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CTA from "@/components/sections/CTA";
import { LayoutGrid, Workflow, Layers, HelpCircle, BookOpen } from "lucide-react";

/* ================= MAIN ================= */

export default function ArticleClientDetail({ article }: any) {
  return (
    <div className="pt-28 bg-white">
      <div className="container-custom">
        <div className="flex gap-8 lg:gap-12 relative">
          {/* SIDEBAR */}
          <ArticleSidebar article={article} />

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 max-w-2xl pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <ArticleContent article={article} />
              <div className="mt-16">
                <Tags />
              </div>
              <div className="mt-20">
                <RelatedPosts />
              </div>
            </motion.div>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-28 space-y-8">
              <NewsletterWidget />
              <RelatedInsights />
              <CoreTopics />
            </div>
          </aside>
        </div>
      </div>

      <CTA />
    </div>
  );
}

/* ================= LEFT SIDEBAR ================= */

function ArticleSidebar({ article }: any) {
  const [active, setActive] = useState("Overview");

  const navItems = [
    { label: "Overview", icon: LayoutGrid },
    { label: "Process", icon: Workflow },
    { label: "Tech Stack", icon: Layers },
    { label: "F.A.Q.", icon: HelpCircle },
    { label: "Related Posts", icon: BookOpen },
  ];

  const scrollTo = (label: string) => {
    setActive(label);
    const id = label.toLowerCase().replace(/\./g, "").replace(/ /g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:block w-48 shrink-0">
      <div className="sticky top-28">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
          Project Navigator
        </p>
        <p className="text-xs text-gray-400 mb-6">Service Deep Dive</p>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <Icon size={15} strokeWidth={isActive ? 2 : 1.5} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

/* ================= ARTICLE CONTENT ================= */

function ArticleContent({ article }: any) {
  return (
    <motion.article variants={fadeUp}>
      {/* HEADER */}
      <div className="mb-10" id="overview">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-semibold uppercase tracking-wide">
            {article.category}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-400">{article.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 tracking-tight">
          {article.title}
        </h1>

        {/* AUTHOR */}
        <div className="flex items-center gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{article.author.name}</p>
            <p className="text-sm text-gray-500">{article.author.role}</p>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      {/* BODY */}
      <div className="prose prose-gray max-w-none space-y-8">
        {article.intro && (
          <p className="text-xl text-gray-600 font-medium leading-relaxed">{article.intro}</p>
        )}

        {article.section1 && (
          <div id="process">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.section1.title}</h2>
            <p className="text-gray-600 leading-relaxed">{article.section1.content}</p>
          </div>
        )}

        {article.quote && (
          <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-xl">
            <p className="italic text-blue-700 text-lg leading-relaxed">"{article.quote}"</p>
          </blockquote>
        )}

        {article.section2 && (
          <div id="tech-stack">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.section2.title}</h2>
            <p className="text-gray-600 leading-relaxed">{article.section2.content}</p>
          </div>
        )}

        {article.points && (
          <ul className="space-y-4" id="faq">
            {article.points.map((item: any, i: number) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-600">
                  <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* AUTHOR CARD */}
      <AuthorCard author={article.author} />
    </motion.article>
  );
}

/* ================= AUTHOR CARD ================= */

function AuthorCard({ author }: any) {
  return (
    <div className="mt-16 p-8 bg-[#f7f9fb] rounded-2xl flex gap-6 items-start">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-16 h-16 rounded-xl object-cover shrink-0"
      />
      <div>
        <h4 className="text-base font-bold mb-1 text-gray-900">{author.name}</h4>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{author.bio}</p>
        <div className="flex gap-4 text-blue-600 text-xs font-semibold uppercase tracking-wide">
          <span className="cursor-pointer hover:opacity-70 transition">Twitter</span>
          <span className="cursor-pointer hover:opacity-70 transition">LinkedIn</span>
          <span className="cursor-pointer hover:opacity-70 transition">GitHub</span>
        </div>
      </div>
    </div>
  );
}

/* ================= RIGHT: NEWSLETTER ================= */

function NewsletterWidget() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 text-white">
      <p className="text-xs uppercase tracking-widest font-semibold mb-1 opacity-80">
        The Digital Architect Weekly
      </p>
      <h4 className="text-lg font-bold mb-2 leading-snug">Stay ahead of the curve</h4>
      <p className="text-blue-100 text-xs mb-4 leading-relaxed">
        Deep dives into microservices, UX psychology, and the business of software.
      </p>
      <input
        placeholder="Email address"
        className="w-full px-3 py-2.5 rounded-xl bg-white/20 text-white placeholder:text-blue-200 text-sm border border-white/20 focus:outline-none mb-3"
      />
      <button className="w-full py-2.5 bg-white text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
        Join 12,000+ Engineers
      </button>
    </div>
  );
}

/* ================= RIGHT: RELATED INSIGHTS ================= */

function RelatedInsights() {
  const items = [
    {
      title: "Implementing Observability with OpenTelemetry",
      meta: "5 min read • Engineering",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
    },
    {
      title: "The Cost of Premature Optimization",
      meta: "8 min read • Strategy",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",
    },
  ];

  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-4">
        Related Insights
      </p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="group cursor-pointer flex gap-3 items-start">
            <div className="w-16 h-14 rounded-xl overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={56}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition leading-snug">
                {item.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= RIGHT: CORE TOPICS ================= */

function CoreTopics() {
  const tags = ["Kubernetes", "Cloud Native", "Architecture", "Rust", "DevOps", "Product Design"];

  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-4">
        Core Topics
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-[#f2f4f6] text-gray-600 rounded-lg text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= RELATED POSTS BOTTOM ================= */

function RelatedPosts() {
  const items = [
    {
      title: "Implementing Observability with OpenTelemetry",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      meta: "5 min read • Engineering",
    },
    {
      title: "The Cost of Premature Optimization",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      meta: "8 min read • Strategy",
    },
    {
      title: "Scaling Microservices Efficiently",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      meta: "6 min read • Architecture",
    },
  ];

  return (
    <div id="related-posts">
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Related Insights</p>
        <h2 className="text-2xl font-bold">Continue Reading</h2>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
            <div className="aspect-video rounded-xl overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <h4 className="font-semibold text-sm group-hover:text-blue-600 transition leading-snug">
              {item.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{item.meta}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================= TAGS ================= */

function Tags() {
  const tags = ["Kubernetes", "Cloud Native", "Architecture", "Rust", "DevOps", "Product Design"];

  return (
    <div>
      <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-4">Core Topics</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-[#f2f4f6] text-gray-600 rounded-xl text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
