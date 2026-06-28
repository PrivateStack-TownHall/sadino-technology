import ServicesOverview from "@/components/services/ServiceOverview";
import ServiceBlock from "@/components/sections/ServiceBlock";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="py-24 text-center container-custom">
        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Our Expertise
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Building the{" "}
          <span className="text-blue-600">Digital Architecture</span>{" "}
          of Tomorrow.
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          We blend engineering precision with creative vision to deliver
          software that scales, resonates, and dominates.
        </p>
      </section>

      {/* SERVICE OVERVIEW */}
      <ServicesOverview />

      {/* SERVICE BLOCK 1 */}
      <ServiceBlock
        title="High-Performance Web Ecosystems"
        desc="We don't just build websites; we architect scalable web applications that handle massive traffic while maintaining millisecond response times."
        features={["Cloud-Native Microservices Architecture", "Server-Side Rendering & Dynamic Content", "Real-time Data Processing & WebSockets"]}
        tech={["React", "Node.js", "TypeScript", "PostgreSQL"]}
        reverse={false}
        badge="99.9%"
        badgeLabel="Performance"
      />

      {/* SERVICE BLOCK 2 */}
      <ServiceBlock
        title="Intentional Product Design"
        desc="We move beyond aesthetics to create intuitive journey maps and emotional connections."
        features={["User Research & Persona Mapping", "High-Fidelity Prototyping", "Scalable Design Systems"]}
        tech={["Figma", "Adobe XD", "Protopie", "Storybook"]}
        reverse={true}
        badge="4.9/5"
        badgeLabel="User Rating"
      />

      {/* SERVICE BLOCK 3 */}
      <ServiceBlock
        title="Native & Hybrid Mobile Solutions"
        desc="We develop seamless mobile experiences with native performance and cross-platform consistency."
        features={["iOS & Android Native Performance", "Offline-first Sync", "Push Notification Engine"]}
        tech={["React Native", "Swift", "Kotlin", "Firebase"]}
        reverse={false}
        badge="85%"
        badgeLabel="Retention"
      />

      {/* CTA */}
      <section className="py-24 container-custom">
        <div className="rounded-[2rem] p-12 md:p-20 bg-gradient-to-br from-blue-700 to-blue-500 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to build your next breakthrough?
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
              Join 100+ innovative companies building the future of technology with Sadino.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
                Book a Strategy Call
              </Link>
              <Link href="/portfolio" className="border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
