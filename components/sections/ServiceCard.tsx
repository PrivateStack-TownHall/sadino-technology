"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
};

export default function ServiceCard({ icon, title, desc, href }: Props) {
  return (
    <Link href={href} className="group block">
      <div
        className="
          h-full p-6 rounded-2xl border border-gray-200 bg-white
          transition-all duration-300
          hover:shadow-xl hover:shadow-blue-100 hover:border-blue-200
        "
      >
        {/* 🔷 ICON */}
        <div
          className="
            w-12 h-12 mb-4 rounded-xl flex items-center justify-center
            bg-blue-50 text-blue-600
            transition group-hover:bg-blue-600 group-hover:text-white
          "
        >
          {icon}
        </div>

        {/* 🔷 TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

        {/* 🔷 DESC */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>

        {/* 🔷 CTA */}
        <div className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More →
        </div>
      </div>
    </Link>
  );
}
