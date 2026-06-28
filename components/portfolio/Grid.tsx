import PortfolioCard from "./Card";

type Props = {
  data: any[];
};

export default function PortfolioGrid({ data }: Props) {
  if (data.length === 0) {
    return (
      <section className="container-custom py-24 text-center">
        <p className="text-gray-400 text-lg font-medium">No projects found.</p>
        <p className="text-gray-300 text-sm mt-2">Try a different filter.</p>
      </section>
    );
  }

  return (
    <section className="container-custom py-8 mb-16">
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item) => (
          <PortfolioCard key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
}
