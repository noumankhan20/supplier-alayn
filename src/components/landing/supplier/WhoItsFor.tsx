import { Assemble } from "../motion/primitives";

const CATEGORIES = [
  "Dairy",
  "Vegetables & produce",
  "Meat & poultry",
  "Dry goods & grains",
  "Oils & condiments",
  "Spices & seasonings",
  "Bakery & bread",
  "Beverages",
  "Packaging & disposables",
  "Cleaning & hygiene",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" aria-labelledby="who-heading" className="scroll-mt-24 bg-[#1B2A4A] px-4 sm:px-6 py-24 sm:py-28 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Assemble as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF8A8F]">Who it’s for</p>
          <h2 id="who-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em]">
            Anyone who keeps a restaurant kitchen stocked
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/70">
            Distributors, wholesalers and local vendors supplying restaurants, cafés, cloud kitchens and bakeries,
            whether you serve three outlets or three hundred.
          </p>
        </Assemble>

        <Assemble as="ul" delay={0.08} className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((c) => (
            <li
              key={c}
              className="rounded-full bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10"
            >
              {c}
            </li>
          ))}
        </Assemble>
      </div>
    </section>
  );
}
