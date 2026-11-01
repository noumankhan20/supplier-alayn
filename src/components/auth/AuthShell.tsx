import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MAIN_APP_URL } from "@/lib/apiBase";
import AuthShowcase from "./AuthShowcase";

/**
 * Two-pane layout shared by login and signup: the form on the left, the
 * supplier showcase on the right (desktop only, so phones go straight to the form).
 */
export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  /** Line under the form, e.g. "New here? Join as a supplier" */
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh bg-white">
      <div className="flex w-full flex-col px-5 py-6 sm:px-10 lg:w-[46%] xl:w-[42%]">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Alayn Suppliers home" className="inline-flex items-center gap-2.5">
            <Image src="/alayn-logo-tm.png" alt="Alayn" width={960} height={188} sizes="120px" className="h-6 w-auto" priority />
            <span className="rounded-md bg-[#1B2A4A] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Suppliers
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-[#56657C] transition-colors hover:bg-zinc-100 hover:text-[#1B2A4A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>

        <main className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-10">
          <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1B2A4A]">{title}</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-[#56657C]">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-8 text-center text-sm text-[#56657C]">{footer}</div>}
        </main>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#56657C]">
          <span>© 2026 Alayn AI</span>
          <div className="flex gap-4">
            <a href={`${MAIN_APP_URL}/legal/privacy`} className="hover:text-[#1B2A4A]">Privacy</a>
            <a href={`${MAIN_APP_URL}/legal/terms`} className="hover:text-[#1B2A4A]">Terms</a>
            <a href="mailto:info@alaynai.com" className="hover:text-[#1B2A4A]">Help</a>
          </div>
        </div>
      </div>

      <div className="hidden flex-1 lg:sticky lg:top-0 lg:block lg:h-dvh">
        <AuthShowcase />
      </div>
    </div>
  );
}
