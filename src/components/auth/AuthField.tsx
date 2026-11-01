import React from "react";
import { cn } from "@/lib/utils";

/** Input styling shared by the auth forms. */
export function authInputClass(hasError?: boolean, extra?: string) {
  return cn(
    "block w-full rounded-xl border bg-white px-3.5 text-[15px] text-[#1B2A4A] placeholder:text-zinc-400 transition-colors",
    "focus:outline-none focus:ring-4",
    hasError
      ? "border-[#C41E2A] focus:border-[#C41E2A] focus:ring-[#C41E2A]/10"
      : "border-zinc-300 hover:border-zinc-400 focus:border-[#1B2A4A] focus:ring-[#1B2A4A]/10",
    extra
  );
}

/** Label + control + hint/error, with the error wired to aria-describedby. */
export default function AuthField({
  id,
  label,
  optional,
  hint,
  error,
  labelAction,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  /** Something on the right of the label, e.g. "Forgot password?" */
  labelAction?: React.ReactNode;
  children: (describedBy: string | undefined) => React.ReactNode;
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-[#1B2A4A]">
          {label}
          {optional && <span className="ml-1 font-normal text-zinc-400">(optional)</span>}
        </label>
        {labelAction}
      </div>
      {children(describedBy)}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-[#C41E2A]">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-zinc-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
