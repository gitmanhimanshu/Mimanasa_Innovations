"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
    >
      {mounted ? (dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <Sun className="h-5 w-5" />}
    </button>
  );
}
