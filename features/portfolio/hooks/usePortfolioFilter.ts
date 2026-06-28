"use client";

import { useState, useMemo } from "react";
import { portfolios } from "@/constants/portfolios";

export function usePortfolioFilter() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return portfolios;

    return portfolios.filter((item) => {
      if (active === "Profile Company") return item.category === "Profile Company";
      if (active === "Mobile") return item.category === "Mobile";
      if (active === "Dashboards") return item.category === "Dashboard";
      if (active === "E-commerce") return item.category === "E-commerce";
      if (active === "SaaS") return item.category === "SaaS";

      return true;
    });
  }, [active]);

  return {
    active,
    setActive,
    data: filtered,
  };
}