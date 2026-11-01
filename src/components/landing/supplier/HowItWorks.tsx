import { Assemble } from "../motion/primitives";

const STEPS = [
  {
    title: "List what you sell",
    body:
      "Add each product with its price per unit, minimum order and how fast you deliver. Mark anything out of stock in one tap.",
    detail: ["Fresh Paneer", "₹320 / kg", "Min 2 kg", "24h"],
  },
  {
    title: "Restaurants send orders",
    body:
      "Owners search Alayn for what they need, compare suppliers by price and delivery time, and send you a purchase order with exact quantities and the delivery address.",
    detail: ["PO-1042", "Sea Breeze Café", "3 items", "₹4,250"],
  },
  {
    title: "Pack, dispatch, done",
    body:
      "Mark it packing, then dispatch the full order or what you have now, with a date for the rest. The restaurant sees every update and confirms when it arrives.",
    detail: ["Packing", "Dispatched", "Delivered"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-24 bg-[#F4F5F8] px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Assemble as="div" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C41E2A]">How it works</p>
          <h2 id="how-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#1B2A4A]">
            From your price list to their kitchen in three steps
          </h2>
        </Assemble>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Assemble as="li" key={step.title} delay={i * 0.08} className="flex flex-col rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-[#1B2A4A]/[0.08]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B2A4A] text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-[#1B2A4A]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#56657C]">{step.body}</p>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap items-center gap-1.5 rounded-xl bg-[#F4F5F8] p-2.5">
                  {step.detail.map((d, j) => (
                    <span
                      key={d}
                      className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                        i === 2
                          ? j === 2
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-zinc-500 ring-1 ring-zinc-200"
                          : j === 0
                          ? "bg-white text-[#1B2A4A] ring-1 ring-zinc-200"
                          : "text-zinc-600"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Assemble>
          ))}
        </ol>
      </div>
    </section>
  );
}
