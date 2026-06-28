"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) setShow(false);
      else setShow(true);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Articles", href: "/articles" },
    { name: "Pricing", href: "/pricing" },
  ];

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "API / Backend", href: "/services/backend-api" },
    { name: "Company Profile", href: "/services/company-profile" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50"
      >
        <div className="container-custom flex items-center justify-between py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Sadino<span className="text-blue-600">Technology</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            <Dropdown services={services} />
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 rounded-none"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/contact"
            className="btn-primary hidden md:block text-sm"
          >
            Get Free Consultation
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-lg font-extrabold tracking-tight">
                  Sadino<span className="text-blue-600">Technology</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {/* Services with sub-menu */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                      pathname.startsWith("/services")
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mt-1 space-y-1"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block px-4 py-2.5 rounded-xl text-sm transition ${
                              pathname === s.href
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t">
                <Link
                  href="/contact"
                  className="btn-primary block text-center text-sm"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= DESKTOP DROPDOWN ================= */
function Dropdown({ services }: { services: { name: string; href: string }[] }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");

  return (
    <div className="relative group">
      <Link
        href="/services"
        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 rounded-none"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        Services
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
      </Link>

      <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white shadow-xl rounded-2xl p-2 border border-gray-100">
          {services.map((item) => {
            const isSub = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2.5 rounded-xl text-sm transition ${
                  isSub
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
