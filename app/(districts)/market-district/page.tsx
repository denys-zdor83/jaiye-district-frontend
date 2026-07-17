import type { Metadata } from "next";
import { DISTRICTS } from "@/lib/data/districts";
import { DistrictStub } from "@/components/districts/DistrictStub";

const district = DISTRICTS.find((d) => d.slug === "market-district")!;

export const metadata: Metadata = {
  title: district.name,
  description: district.description,
};

export default function Page() {
  return <DistrictStub district={district} />;
}
