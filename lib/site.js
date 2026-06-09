import {
  GraduationCap, BookOpen, Sparkles, BarChart3, Workflow, ShieldCheck, Zap, Database,
  Rocket, BrainCircuit, Building2, Landmark, Briefcase, Cpu, Layers,
} from "lucide-react";

// ---- Reused from the Mimanasa product landing ------------------------------
export const BRAND = "Mimanasa Innovations";
export const WEBSITE = "https://www.mimanasa.online";
export const CONTACT_EMAIL = "hello@mimanasa.online";
export const CAREERS_EMAIL = "careers@mimanasa.online";
export const OFFICE = "Lucknow, Uttar Pradesh, India";
export const LINKEDIN = "https://www.linkedin.com/company/124854223/";
export const TAGLINE = "Where Intelligence Meets Innovation.";

export const NAV = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CARDS = [
  { icon: BarChart3, label: "AI Analytics", color: "from-brand-600 to-cyan-500" },
  { icon: GraduationCap, label: "School ERP", color: "from-violet-500 to-brand-600" },
  { icon: Layers, label: "Student Management", color: "from-cyan-500 to-teal-500" },
  { icon: BrainCircuit, label: "Business Insights", color: "from-brand-500 to-violet-500" },
  { icon: Workflow, label: "Automation", color: "from-teal-500 to-cyan-500" },
];

export const TRUST_STATS = [
  { to: 50000, suffix: "+", label: "Users" },
  { to: 100, suffix: "+", label: "Institutions" },
  { to: 5, suffix: "M+", label: "Records Managed" },
  { to: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
];

export const PRODUCTS = [
  {
    icon: GraduationCap, accent: "from-brand-600 to-violet-500", name: "Mimanasa School ERP",
    tagline: "The complete operating system for schools.",
    features: ["Student Management", "Attendance Tracking", "Fee Management", "Examination System",
      "Timetable Management", "Parent & Teacher Portals", "Principal Dashboard", "Report Cards", "Analytics"],
  },
  {
    icon: BookOpen, accent: "from-cyan-500 to-teal-500", name: "Digital Library",
    tagline: "A modern reading and research universe.",
    features: ["Books & Audiobooks", "Research Content", "Literature Collection",
      "Smart Search Engine", "Reading Analytics"],
  },
  {
    icon: Sparkles, accent: "from-violet-500 to-brand-600", name: "AI Content Studio",
    tagline: "Generate stunning media at the speed of thought.",
    features: ["AI Images", "AI Videos", "AI Reels", "UGC Generation",
      "Character Generation", "Social Media Assets"],
  },
  {
    icon: BarChart3, accent: "from-brand-600 to-cyan-500", name: "Business Analytics Platform",
    tagline: "Turn raw data into confident decisions.",
    features: ["Dashboards", "KPIs", "Reports", "Forecasting", "Predictive Analytics"],
  },
  {
    icon: Workflow, accent: "from-teal-500 to-brand-500", name: "Workflow Automation",
    tagline: "Automate the busywork, end to end.",
    features: ["Process Automation", "Approval Systems", "Task Tracking", "Notifications", "Integrations"],
  },
];

export const SOLUTIONS = [
  { icon: GraduationCap, title: "Education", desc: "Digital transformation for schools and colleges.", color: "from-brand-600 to-violet-500" },
  { icon: Building2, title: "Enterprises", desc: "Automation and analytics solutions at scale.", color: "from-cyan-500 to-brand-600" },
  { icon: Rocket, title: "Startups", desc: "Rapid SaaS development and AI integration.", color: "from-violet-500 to-cyan-500" },
  { icon: Landmark, title: "Government", desc: "Digital governance and citizen services.", color: "from-teal-500 to-brand-500" },
];

export const WHY = [
  { icon: BrainCircuit, title: "AI First", desc: "Intelligent systems built with AI at the core." },
  { icon: ShieldCheck, title: "Secure", desc: "Enterprise-grade security and compliance." },
  { icon: Layers, title: "Scalable", desc: "Cloud-native, multi-tenant architecture." },
  { icon: Zap, title: "Fast", desc: "Rapid deployment and implementation." },
  { icon: BarChart3, title: "Data Driven", desc: "Every decision powered by analytics." },
  { icon: Rocket, title: "Future Ready", desc: "Engineered for long-term growth." },
];

export const TECH = [
  "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Redis",
  "Docker", "Kubernetes", "AWS", "Azure", "OpenAI", "Gemini",
];

export const ACHIEVEMENTS = [
  { to: 5, suffix: "+", label: "Products Built", icon: Cpu },
  { to: 100, suffix: "+", label: "Institutions Served", icon: Building2 },
  { to: 50000, suffix: "+", label: "Active Users", icon: GraduationCap },
  { to: 10, suffix: "M+", label: "API Requests Processed", icon: Database },
  { to: 1, suffix: "M+", label: "Automation Tasks Executed", icon: Workflow },
];

export const CASE_STUDIES = [
  {
    tag: "Education", title: "School Digital Transformation", color: "from-brand-600 to-violet-500",
    desc: "Replaced paper registers with a unified ERP — improving attendance accuracy and administrative efficiency across every department.",
    metric: "60% less admin time",
  },
  {
    tag: "Creative AI", title: "AI Content Generation", color: "from-violet-500 to-cyan-500",
    desc: "Teams generate images, reels and social assets in minutes — dramatically reducing content creation time and cost.",
    metric: "10x faster content",
  },
  {
    tag: "Analytics", title: "Analytics Deployment", color: "from-cyan-500 to-teal-500",
    desc: "Live dashboards and forecasting put the right numbers in front of leaders — enabling faster, sharper business decisions.",
    metric: "Decisions in real time",
  },
];

export const TESTIMONIALS = [
  { name: "Dr. A. Verma", role: "Principal", quote: "Mimanasa turned our entire school digital. Attendance, fees and results — all in one place. Parents finally trust the process." },
  { name: "S. Iyer", role: "Administrator", quote: "What used to take our office days now takes minutes. The reports look professional and the team loves how simple it is." },
  { name: "R. Khan", role: "Teacher", quote: "Entering marks and generating report cards is effortless now. I spend my time teaching, not on paperwork." },
  { name: "P. Mehta", role: "Business Owner", quote: "Their analytics platform gave us visibility we never had. We make decisions on data now, not guesswork." },
];

export const ROADMAP = [
  { year: "2025", title: "School ERP Launch", desc: "A complete, multi-tenant school management platform goes live.", color: "from-brand-600 to-violet-500" },
  { year: "2026", title: "AI Content Studio", desc: "AI images, video and reels generation for creators and brands.", color: "from-violet-500 to-cyan-500" },
  { year: "2027", title: "Enterprise Analytics Suite", desc: "Predictive analytics and forecasting for businesses at scale.", color: "from-cyan-500 to-teal-500" },
  { year: "2028", title: "Global Expansion", desc: "Bringing intelligent products to organizations worldwide.", color: "from-teal-500 to-brand-500" },
];

export const CAREERS = [
  { icon: Cpu, title: "Engineering" },
  { icon: Briefcase, title: "Product" },
  { icon: Sparkles, title: "Design" },
  { icon: BrainCircuit, title: "AI Research" },
  { icon: Rocket, title: "Marketing" },
];

export const FOOTER = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Products: [
    { label: "School ERP", href: "#products" },
    { label: "Digital Library", href: "#products" },
    { label: "Analytics", href: "#products" },
    { label: "Automation", href: "#products" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
