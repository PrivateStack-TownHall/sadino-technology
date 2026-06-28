export const portfolios = [
   /* ================= 1 ================= */
   {
      slug: "lumina-fintech",
      title: "NexGen Banking Ecosystem",
      category: "Fintech",
      description:
         "A complete digital transformation for a leading financial institution.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",

      hero: {
         badge: ["Case Study", "Fintech"],
         headline: "NexGen Banking Ecosystem",
         subtext:
            "Hyper-personalized banking with real-time transaction processing.",
      },

      meta: {
         client: "Lumina Capital Group",
         year: "2023 - 2024",
         role: "Product Strategy & Development",
         tech: ["React", "Node.js", "AWS"],
      },

      gallery: [
         "https://placehold.co/300?text=Gallery1.jpg",
         "https://placehold.co/300?text=Gallery2.jpg",
         "https://placehold.co/300?text=Gallery3.jpg",
         "https://placehold.co/300?text=Gallery4.jpg",
         "https://placehold.co/300?text=Gallery5.jpg",
         "https://placehold.co/300?text=Gallery6.jpg",
         "https://placehold.co/300?text=Gallery7.jpg",
         "https://placehold.co/300?text=Gallery8.jpg",
      ],

      challenge: {
         title: "The Challenge",
         desc:
            "Legacy system couldn’t scale with rapid growth and caused high latency.",
         points: [
            "Legacy architecture bottleneck",
            "Fragmented mobile UX",
         ],
         image: "https://placehold.co/800x500/png",
      },

      solution: {
         title: "The Solution",
         desc:
            "Rebuilt platform using micro-frontend architecture with scalable deployment.",
         image: "https://placehold.co/800x500/png",
         quote: {
            text: "They transformed our entire digital ecosystem.",
            author: "CTO, Lumina Capital",
         },
      },

      result: {
         title: "The Result",
         desc: "Massive performance and user growth improvements.",
         metrics: [
            { label: "User Retention", value: "+40%" },
            { label: "Load Time", value: "-65%" },
            { label: "Uptime", value: "99.9%" },
            { label: "App Rating", value: "4.9/5" },
         ],
      },
   },

   /* ================= 2 ================= */
   {
      slug: "vanguard-analytics",
      title: "Vanguard Analytics Engine",
      category: "Dashboard",
      description: "Real-time financial analytics with AI fraud detection.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",

      hero: {
         badge: ["Dashboard", "AI"],
         headline: "Vanguard Analytics Engine",
         subtext: "Processing millions of transactions in real-time.",
      },

      meta: {
         client: "Vanguard Corp",
         year: "2022 - 2023",
         role: "Data Platform",
         tech: ["React", "AWS", "Node.js"],
      },

      gallery: Array(5).fill("https://placehold.co/300/png"),

      challenge: {
         title: "The Challenge",
         desc: "Handling massive real-time financial data securely.",
         points: ["High volume data", "Fraud detection complexity"],
         image: "https://placehold.co/800x500/png",
      },

      solution: {
         title: "The Solution",
         desc: "Implemented AI anomaly detection and real-time pipelines.",
         image: "https://placehold.co/800x500/png",
         quote: {
            text: "A game changer for our data team.",
            author: "Head of Analytics",
         },
      },

      result: {
         title: "The Result",
         desc: "Improved fraud detection accuracy drastically.",
         metrics: [
            { label: "Accuracy", value: "+30%" },
            { label: "Latency", value: "-50%" },
            { label: "Processing", value: "2M+/day" },
            { label: "Efficiency", value: "+70%" },
         ],
      },
   },

   /* ================= TEMPLATE GENERATOR ================= */
   /* NOTE: biar gak kepanjangan, sisanya tetap FULL tapi diringkas */

   ...[
      { "slug": "atlas-crm", "category": "Dashboard" },
      { "slug": "nova-luxury", "category": "E-commerce" },
      { "slug": "zenith-dashboard", "category": "Dashboard" },
      { "slug": "orbit-hr", "category": "Dashboard" },
      { "slug": "pulse-health", "category": "Dashboard" },
      { "slug": "aurora-saas", "category": "SaaS" },
      { "slug": "helios-iot", "category": "SaaS" },
      { "slug": "quantum-ai", "category": "Profile Company" },
      { "slug": "neuro-ai-lab", "category": "Profile Company" },
      { "slug": "elevate-edtech", "category": "Profile Company" },
      { "slug": "crypto-trade-x", "category": "E-commerce" },
      { "slug": "people-finder", "category": "Mobile" },
      { "slug": "planting-apps", "category": "Mobile" },
   ].map((slug, i) => ({
      slug: slug.slug,
      title: slug.slug
         .replace(/-/g, " ")
         .replace(/\b\w/g, (c) => c.toUpperCase()),
      category: slug.category,
      description: "Modern scalable digital platform. With robust and precise architecture.",
      image: "https://source.unsplash.com/1200x800/?ai,abstract,technology",

      hero: {
         badge: ["Case Study"],
         headline: slug.slug,
         subtext: "High-performance digital product.",
      },

      meta: {
         client: "Confidential",
         year: "2022 - 2024",
         role: "Full Development",
         tech: ["Next.js", "Node.js",],
      },

      gallery: Array(8).fill("https://placehold.co/300/png"),

      challenge: {
         title: "The Challenge",
         desc: "Scaling product with modern architecture.",
         points: ["Performance", "Scalability"],
         image: "https://placehold.co/800x500/png",
      },

      solution: {
         title: "The Solution",
         desc: "Built modular scalable architecture.",
         image: "https://placehold.co/800x500/png",
         quote: {
            text: "Exceptional execution.",
            author: "Client",
         },
      },

      result: {
         title: "The Result",
         desc: "Strong measurable growth.",
         metrics: [
            { label: "Growth", value: "+120%" },
            { label: "Speed", value: "-60%" },
            { label: "Users", value: "100K+" },
            { label: "Rating", value: "4.8/5" },
         ],
      },
   })),
];