import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center text-white bg-gradient-to-br from-blue-700 to-blue-500">
          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's turn your vision into a market-leading digital product. Our
              consultants are ready to help you map out the next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-base shadow-xl hover:bg-gray-50 hover:scale-105 transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
