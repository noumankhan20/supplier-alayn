import { Inbox, PackageCheck, PackageX, Tag, MapPin, Search } from "lucide-react";
import { Assemble } from "../motion/primitives";

const FEATURES = [
  {
    icon: Inbox,
    title: "One inbox for every order",
    body: "New orders land in a “to do” list, so nothing gets lost in a chat thread or a missed call.",
  },
  {
    icon: PackageCheck,
    title: "Send part now, the rest later",
    body: "Short on one item? Dispatch what you have and give the restaurant a date for the remainder.",
  },
  {
    icon: PackageX,
    title: "Say no clearly",
    body: "If you can’t fulfil an order, mark it out of stock with a reason. The restaurant knows straight away.",
  },
  {
    icon: Tag,
    title: "Your price list, always current",
    body: "Change a rate or a minimum order and new orders use it. No reprinting, no forwarding PDFs.",
  },
  {
    icon: MapPin,
    title: "Delivery details on every order",
    body: "Each order shows the outlet, branch, delivery address and a contact number for your driver.",
  },
  {
    icon: Search,
    title: "Found when it matters",
    body: "When an owner searches for “paneer” or “chicken”, your rate and delivery time sit right next to the others.",
  },
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="scroll-mt-24 bg-white px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Assemble as="div" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C41E2A]">What you get</p>
          <h2 id="features-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#1B2A4A]">
            Built for how supply actually runs
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#56657C]">
            Short stock, split deliveries and changing rates are normal. The portal handles them instead of fighting them.
          </p>
        </Assemble>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <Assemble as="div" key={title} delay={(i % 3) * 0.06}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C41E2A]/[0.08] text-[#C41E2A]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-bold text-[#1B2A4A]">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#56657C]">{body}</p>
            </Assemble>
          ))}
        </div>
      </div>
    </section>
  );
}
