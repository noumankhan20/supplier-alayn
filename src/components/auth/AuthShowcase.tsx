import React from "react";
import { Check } from "lucide-react";

/**
 * Right-hand panel on login and signup. Shows what the portal is for, with a
 * small illustrative order card (sample data) in the same style as the landing hero.
 */
const POINTS = [
  "Purchase orders from restaurants, in one inbox",
  "Dispatch in full or in part, with a date for the rest",
  "Change a rate once, and new orders use it",
];

export default function AuthShowcase() {
  return (
    <div className="relative flex h-full min-h-dvh flex-col justify-center overflow-hidden bg-[#1B2A4A] px-12 py-16 text-white xl:px-20">
      <div aria-hidden className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#C41E2A]/25 blur-[120px]" />
      <div aria-hidden className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-white/[0.06] blur-[100px]" />

      <div className="relative max-w-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF8A8F]">Alayn for Suppliers</p>
        <h2 className="mt-4 text-[clamp(2rem,3.2vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
          Your restaurant orders, all in one place.
        </h2>

        <ul className="mt-8 space-y-3.5">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] text-white/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Illustrative order card */}
        <div className="mt-12 rounded-2xl bg-white p-5 text-[#1B2A4A] shadow-2xl shadow-black/30" aria-hidden>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold">PO-1042</span>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 ring-1 ring-amber-200">
                New
              </span>
            </div>
            <span className="text-sm font-semibold tabular-nums">₹4,250</span>
          </div>
          <p className="mt-2 text-sm font-medium">Sea Breeze Café · Bandra</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Paneer · 5 kg", "Curd · 10 kg", "Milk · 20 L"].map((i) => (
              <span key={i} className="rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-700">
                {i}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <span className="flex-1 rounded-lg bg-zinc-100 py-2 text-center text-xs font-semibold text-zinc-700">Start packing</span>
            <span className="flex-1 rounded-lg bg-[#C41E2A] py-2 text-center text-xs font-semibold text-white">Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
