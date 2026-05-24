"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ArrowRight, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { easeOut, easeExpo } from "@/lib/motion";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]));
  return (
    <Link
      href={href}
      className={cn(
        "link-underline text-[13.5px] font-medium tracking-tight transition-colors duration-200",
        isActive ? "text-[#0F172A]" : "text-slate-500 hover:text-[#0F172A]"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-0" : "py-3")}
        initial={{ y: -80, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.55 }}
      >
        <div className="mx-auto max-w-[1780px] px-4 lg:px-8">
          <div
            className={cn(
              "aviation-card flex h-[68px] items-center gap-4 rounded-2xl px-5 transition-all duration-300 lg:px-7",
              scrolled
                ? "border border-white/70 bg-white/90 shadow-navbar backdrop-blur-2xl"
                : "border border-white/30 bg-white/70 shadow-glass backdrop-blur-xl"
            )}
          >
            {/* Logo */}
            <div className="shrink-0">
              <Logo variant="light" />
            </div>

            {/* Desktop nav — centered */}
            <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, ease: easeOut, delay: 0.7 + i * 0.05 }}
                >
                  <NavLink href={item.href} label={item.label} />
                </motion.div>
              ))}
            </nav>

            {/* Right actions */}
            <motion.div
              className="ml-auto flex shrink-0 items-center gap-2.5"
              initial={{ opacity: 0, x: 16 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.75 }}
            >
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition-all duration-200 hover:scale-105 hover:bg-white hover:text-slate-900 lg:inline-flex"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Phone quick link */}
              <a
                href="tel:+971541761644"
                className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-900 hover:shadow-sm xl:inline-flex"
              >
                <Phone className="h-3 w-3" />
                +971 54 176 1644
              </a>

              {/* CTA */}
              <Button
                asChild
                className="hidden h-9 rounded-full bg-[#FF7A3D] px-5 text-[13px] font-semibold text-white shadow-none transition-all duration-200 hover:scale-[1.03] hover:bg-[#E55A1C] lg:inline-flex"
              >
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:scale-105 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Search bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="mt-2 overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-premium backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 px-5 py-4">
                  <Search className="h-4 w-4 shrink-0 text-slate-400" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search services, industries, solutions…"
                    className="flex-1 bg-transparent text-[15px] text-slate-900 placeholder-slate-400 outline-none"
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-slate-400 transition-colors hover:text-slate-700">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[320px] flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: easeExpo }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <Logo variant="light" />
                <motion.button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-slate-700" whileTap={{ scale: 0.9 }}>
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Mobile search */}
              <div className="border-b border-slate-100 px-6 py-4">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input type="text" placeholder="Search…" className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none" />
                </div>
              </div>

              {/* Nav links with stagger */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div key={item.href} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, ease: easeOut, delay: 0.05 + i * 0.045 }}>
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900">
                        {item.label}
                        <ArrowRight className="h-4 w-4 text-slate-300" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Mobile contact/CTA */}
              <motion.div className="border-t border-slate-100 px-6 py-5 space-y-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: easeOut, delay: 0.28 }}>
                <a href="mailto:info@aerbavs.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Mail className="h-4 w-4 text-slate-400" />
                  info@aerbavs.com
                </a>
                <a href="tel:+971541761644" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Phone className="h-4 w-4 text-slate-400" />
                  +971 54 176 1644
                </a>
                <Button asChild className="mt-2 w-full rounded-full bg-[#FF7A3D] font-semibold hover:bg-[#E55A1C]">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
