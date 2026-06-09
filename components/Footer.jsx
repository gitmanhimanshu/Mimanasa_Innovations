import Image from "next/image";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";

import { BRAND, FOOTER, LINKEDIN, TAGLINE } from "@/lib/site";

const SOCIAL = [
  { Icon: Linkedin, href: LINKEDIN },
  { Icon: Twitter, href: "#" },
  { Icon: Youtube, href: "#" },
  { Icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt={BRAND} width={40} height={40} className="rounded-xl ring-1 ring-black/5" />
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                Mimanasa <span className="gradient-text">Innovations</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              AI-driven software, education platforms, business automation and data intelligence —
              engineered to help organizations scale faster and operate smarter.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL.map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-400">
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p className="font-medium gradient-text">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
