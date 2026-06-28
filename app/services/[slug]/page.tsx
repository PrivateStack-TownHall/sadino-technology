import { notFound } from "next/navigation";
import { services } from "@/constants/services";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) return notFound();

  return <ServiceDetailClient service={service} />;
}
