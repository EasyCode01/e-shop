"use client";

import { useRouter } from "next/navigation";

export default function ProductName() {
  const router = useRouter();

  console.log("Router State:", router);

  return <div>{router.query.name || "No Product Name"}</div>;
}
