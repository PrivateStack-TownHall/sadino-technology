import { notFound } from "next/navigation";
import PortfolioClientDetail from "./PortfolioClientDetail";
import { portfolios } from "@/constants/portfolios";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const portfolio = portfolios.find((p) => p.slug === slug);

  if (!portfolio) return notFound();

  return <PortfolioClientDetail portfolio={portfolio} />;
}
