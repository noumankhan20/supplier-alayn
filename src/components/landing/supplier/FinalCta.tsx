import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Assemble } from "../motion/primitives";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white px-4 sm:px-6 pb-24 sm:pb-32">
      <Assemble
        as="div"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#C41E2A] px-6 py-14 sm:px-14 sm:py-16 text-white"
      >
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#1B2A4A]/30 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em]">
              Ready to take restaurant orders?
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-white/80">
              Create your supplier account, add your first products, and you’re ready for orders.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#C41E2A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#C41E2A]"
            >
              Join as a supplier
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </Assemble>
    </section>
  );
}
