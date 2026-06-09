"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

import { BRAND, NAV } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="container-x">
          <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
            <a href="#top" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt={BRAND} width={38} height={38} className="rounded-xl ring-1 ring-black/5" />
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                Mimanasa <span className="gradient-text">Innovations</span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {NAV.map((n) => (
                <a key={n.label} href={n.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300 lg:hidden"
                onClick={() => setOpen((o) => !o)} aria-label="Menu">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="glass mt-2 rounded-2xl p-3 lg:hidden">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">Book a Demo</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
