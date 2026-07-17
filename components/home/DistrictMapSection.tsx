import { SectionTitle } from "@/components/ui/SectionTitle";
import { DistrictMap } from "@/components/home/DistrictMap";

export function DistrictMapSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#EDE5CF" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Explore the Continent"
          title="The Jaiyé District Map"
          subtitle="Eight territories, one culinary world. Hover an island and click to explore."
        />
        <div className="mx-auto w-full">
          <div
            className="overflow-hidden rounded-3xl"
            style={{ boxShadow: "0 20px 60px rgba(26,15,0,0.28)" }}
          >
            <DistrictMap />
          </div>
        </div>
      </div>
    </section>
  );
}
