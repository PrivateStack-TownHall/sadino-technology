import { notFound } from "next/navigation";
import ArticleClientDetail from "./ArticleClientDetail";
import { articles } from "@/constants/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return <ArticleClientDetail article={article} />;
}
