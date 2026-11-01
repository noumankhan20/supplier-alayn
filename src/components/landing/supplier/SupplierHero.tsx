"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Clock, Package } from "lucide-react";
import { Assemble } from "../motion/primitives";

/**
 * Supplier landing hero. The product visual is an illustrative HTML mock of
 * the order inbox (sample data, not a screenshot), so it stays sharp and
 * matches the real portal's statuses: New → Packing → Dispatched.
 */

const SAMPLE_ORDERS = [
  {
    po: "PO-1042",
    outlet: "Sea Breeze Café · Bandra",
    items: "Paneer 5 kg · Curd 10 kg · Milk 20 L",
    total: "₹4,250",
    status: "New",
    tone: "bg-amber-50 text-amber-800 ring-amber-200",
    action: "Start packing",
  },
  {
    po: "PO-1039",
    outlet: "Spice Route Kitchen · Andheri",
    items: "Chicken 12 kg · Eggs 6 trays",
    total: "₹3,780",
    status: "Packing",
    tone: "bg-sky-50 text-sky-800 ring-sky-200",
    action: "Dispatch",
  },
  {
    po: "PO-1031",
    outlet: "The Corner Bakery · Powai",
    items: "Butter 4 kg · Cream 6 L",
    total: "₹2,960",
    status: "2 of 3 sent",
    tone: "bg-violet-50 text-violet-800 ring-violet-200",
    action: null,
  },
];

function OrderInboxMock() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* Inbox card */}
      <div className="rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(27,42,74,0.35)] ring-1 ring-[#1B2A4A]/10 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
          <div>
            <p className="text-sm font-semibold text-[#1B2A4A]">Orders</p>
            <p className="text-xs text-zinc-500">2 need your action</p>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 text-[11px] font-semibold">
            <span className="rounded-md bg-white px-2 py-1 text-[#1B2A4A] shadow-xs">To do · 2</span>
            <span className="px-2 py-1 text-zinc-500">On the way</span>
            <span className="hidden sm:inline px-2 py-1 text-zinc-500">Delivered</span>
          </div>
        </div>
        <ul className="divide-y divide-zinc-100">
          {SAMPLE_ORDERS.map((o, i) => (
            <motion.li
              key={o.po}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 160, damping: 22 }}
              className="flex items-center gap-3 px-5 py-3.5"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#1B2A4A]">{o.po}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${o.tone}`}>{o.status}</span>
                </div>
                <p className="mt-0.5 truncate text-[13px] font-medium text-zinc-800">{o.outlet}</p>
                <p className="truncate text-[11px] text-zinc-500">{o.items}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="text-sm font-semibold tabular-nums text-[#1B2A4A]">{o.total}</span>
                {o.action ? (
                  <span
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                      o.action === "Dispatch" ? "bg-[#C41E2A] text-white" : "bg-[#1B2A4A] text-white"
                    }`}
                  >
                    {o.action}
                  </span>
                ) : (
                  <span className="text-[11px] text-zinc-500">Rest on 14 Nov</span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Floating "new order" toast */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 180, damping: 20 }}
        className="absolute -left-3 sm:-left-8 -bottom-16 flex items-center gap-3 rounded-xl bg-[#1B2A4A] px-4 py-3 text-white shadow-xl"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
          <Package className="h-4 w-4" />
        </span>
        <div className="text-xs">
          <p className="font-semibold">New order · ₹4,250</p>
          <p className="text-white/60">Sea Breeze Café, just now</p>
        </div>
      </motion.div>

      {/* Floating catalog chip */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 180, damping: 20 }}
        className="absolute -right-2 sm:-right-6 -top-6 hidden sm:flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-[#1B2A4A]/10"
      >
        <span className="text-xs font-medium text-zinc-700">Fresh Paneer</span>
        <span className="text-xs font-semibold tabular-nums text-[#1B2A4A]">₹320/kg</span>
        <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
          <Clock className="h-3 w-3" /> 24h
        </span>
      </motion.div>
    </div>
  );
}

export default function SupplierHero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-section relative px-4 sm:px-6 pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Soft brand wash */}
      <div aria-hidden className="absolute inset-0 -z-0 overflow-hidden">
        <div className="hero-aurora hero-aurora-a" />
        <div className="hero-aurora hero-aurora-b" />
        <div className="hero-aurora hero-aurora-c" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <Assemble
            as="p"
            visibleOnLoad
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#1B2A4A] ring-1 ring-[#1B2A4A]/10 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C41E2A]" />
            Alayn for Suppliers
          </Assemble>

          <Assemble
            as="h1"
            delay={0.05}
            visibleOnLoad
            id="hero-heading"
            className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1B2A4A]"
          >
            Get restaurant orders.{" "}
            <span className="text-[#C41E2A]">Skip the phone calls.</span>
          </Assemble>

          <Assemble
            as="p"
            delay={0.1}
            visibleOnLoad
            className="mt-6 max-w-xl text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-[#56657C]"
          >
            List your products and rates once. Restaurants on Alayn find you, compare your prices and send
            purchase orders straight here. You pack, dispatch and keep them posted from one screen.
          </Assemble>

          <Assemble as="div" delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              id="cta-hero"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#C41E2A] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(196,30,42,0.6)] transition-colors hover:bg-[#A81822] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E2A] focus-visible:ring-offset-2"
            >
              Join as a supplier
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold text-[#1B2A4A] ring-1 ring-[#1B2A4A]/15 transition-colors hover:bg-[#1B2A4A]/5"
            >
              See how it works
            </a>
          </Assemble>

          <Assemble as="ul" delay={0.2} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#56657C]">
            {["Works on phone and laptop", "Nothing to install", "You set your own rates"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                {t}
              </li>
            ))}
          </Assemble>
        </div>

        <Assemble as="div" delay={0.12} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <OrderInboxMock />
          <p className="sr-only">
            Example of the supplier order inbox: new orders, orders being packed, and partly dispatched orders.
          </p>
          <span aria-hidden className="absolute -z-10 inset-x-10 -bottom-10 h-24 rounded-full bg-[#C41E2A]/10 blur-3xl" />
        </Assemble>
      </div>
    </section>
  );
}
