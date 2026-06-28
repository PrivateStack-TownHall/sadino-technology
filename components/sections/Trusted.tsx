export default function Trusted() {
  const brands = ["TECHFLOW", "LUMINAR", "QUANTUM", "NEXUS", "VELOCITY"];

  return (
    <section className="py-14 bg-[#f2f4f6]">
      <div className="container-custom">
        <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-8 font-medium">
          Trusted by innovators at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-base md:text-lg font-extrabold tracking-tight text-gray-300 hover:text-gray-500 transition duration-300 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
