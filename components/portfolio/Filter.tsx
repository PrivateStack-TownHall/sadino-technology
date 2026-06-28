"use client";

type Props = {
  active: string;
  onChange: (value: string) => void;
};

export default function PortfolioFilter({ active, onChange }: Props) {
  const filters = ["All", "Profile Company", "Mobile", "Dashboards", "E-commerce", "SaaS"];

  return (
    <div className="container-custom mb-10 flex flex-wrap gap-2">
      {filters.map((item) => {
        const isActive = active === item;
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-[#f2f4f6] text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
