import {
   Layout,
   GitBranch,
   Cpu,
   HelpCircle,

   Gauge,
   ShieldCheck,
   Plug,
   Cloud,
   Activity,

   Server,
   Shield,
   Database,
   Zap,

   Palette,
   TrendingUp,
   Smartphone,
   Search,

   User,
   Grid,
   FlaskConical,

   Bell,
   Fingerprint,

   /* OPTIONAL (biar aman future) */
   CloudOff,
   Touchpad,
   MessageCircle,
} from "lucide-react";

/* ================= ICON MAP ================= */

export const iconMap = {
   /* ===== CORE / SIDEBAR ===== */
   layout: Layout,
   gitBranch: GitBranch,
   cpu: Cpu,
   helpCircle: HelpCircle,
   cta: MessageCircle,

   /* ===== WEB DEVELOPMENT ===== */
   gauge: Gauge,
   shieldCheck: ShieldCheck,
   plug: Plug,
   cloud: Cloud,
   activity: Activity,

   /* ===== BACKEND ===== */
   server: Server,
   shield: Shield,
   database: Database,
   zap: Zap,

   /* ===== COMPANY PROFILE ===== */
   palette: Palette,
   trendingUp: TrendingUp,
   smartphone: Smartphone,
   search: Search,

   /* ===== UI / UX ===== */
   user: User,
   grid: Grid,
   flaskConical: FlaskConical,

   /* ===== MOBILE ===== */
   bell: Bell,
   fingerprint: Fingerprint,

   /* ===== EXTRA (SAFE GUARD) ===== */
   cloudOff: CloudOff,
   touchpad: Touchpad,
  "flask-conical": FlaskConical,
  "shield-check": ShieldCheck,
  "cloud-off": CloudOff,
  "trending-up": TrendingUp,
} as const;

/* ================= TYPES ================= */

export type IconName = keyof typeof iconMap;

/* ================= HELPER ================= */

export const getIcon = (name: IconName) => {
   return iconMap[name];
};