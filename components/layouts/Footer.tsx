"use client";

import Link from "next/link";
import { Globe, Mail, Phone, MapPin, ArrowRight, AtSign } from "lucide-react";
import { contacts } from "@/constants/data";

const Footer = () => {
  const contact = contacts[0];

  const columns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Articles", href: "/articles" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "API / Backend", href: "/services/backend-api" },
        { label: "Company Profile", href: "/services/company-profile" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f7f9fb] border-t border-gray-100">
      {/* TOP */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* BRAND */}
        <div className="md:col-span-2">
          <Link href="/" className="inline-block mb-5">
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Sadino<span className="text-blue-600">Technology</span>
            </span>
          </Link>

          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
            Engineering premium digital experiences for the modern world. Your
            partner in high-performance software.
          </p>

          {/* CONTACT INFO */}
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-blue-500 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-blue-500 shrink-0" />
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={15} className="text-blue-500 shrink-0" />
              <span>{contact.location}</span>
            </li>
          </ul>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-6">
            <a
              href={`https://instagram.com/${contact.instagram}`}
              target="_blank"
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition"
            >
              <AtSign size={15} />
            </a>
            <a
              href={contact.website}
              target="_blank"
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition"
            >
              <Globe size={15} />
            </a>
          </div>
        </div>

        {/* NAV COLUMNS */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-gray-900 mb-5 tracking-wide">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* NEWSLETTER STRIP */}
      <div className="border-t border-gray-100">
        <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            Stay updated with the latest in tech.
          </p>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 transition"
            />
            <button className="bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-100">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Sadino Technology. All rights reserved.</span>
          <span className="hidden md:block">Built for the Digital Architect.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
