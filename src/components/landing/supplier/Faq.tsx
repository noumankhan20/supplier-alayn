import { Plus } from "lucide-react";
import { Assemble } from "../motion/primitives";

const FAQS = [
  {
    q: "How do restaurants find me?",
    a: "Restaurants using Alayn have a marketplace inside their inventory screen. When an owner searches for a product or picks a category, suppliers who list it appear with their rate and delivery time, and the owner can order from you in a few clicks.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. The portal runs in the browser on your phone, tablet or computer. Sign in and your orders are there.",
  },
  {
    q: "Who decides the price?",
    a: "You do. Restaurants order at the rate on your catalog. Update a price any time and new orders use the new rate.",
  },
  {
    q: "What if I can’t send the whole order?",
    a: "Dispatch the quantities you have and set the date the rest will arrive. If you can’t fulfil it at all, mark it out of stock with a short reason so the restaurant can plan around it.",
  },
  {
    q: "What does the restaurant see?",
    a: "They see each status change (packing, dispatched, partly dispatched) along with your delivery notes, and they confirm the quantities they received when the delivery arrives.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-white px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Assemble as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C41E2A]">Questions</p>
          <h2 id="faq-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#1B2A4A]">
            Good to know before you join
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#56657C]">
            Something else on your mind? Write to{" "}
            <a href="mailto:info@alaynai.com" className="font-semibold text-[#1B2A4A] underline underline-offset-4">
              info@alaynai.com
            </a>
            .
          </p>
        </Assemble>

        <Assemble as="div" delay={0.06} className="divide-y divide-[#1B2A4A]/10 border-y border-[#1B2A4A]/10">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-[#1B2A4A] [&::-webkit-details-marker]:hidden">
                {q}
                <Plus className="h-5 w-5 shrink-0 text-[#56657C] transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[#56657C]">{a}</p>
            </details>
          ))}
        </Assemble>
      </div>
    </section>
  );
}
