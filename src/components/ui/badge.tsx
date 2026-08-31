import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em] w-fit whitespace-nowrap shrink-0 rounded-[2px]",
  {
    variants: {
      variant: {
        default: "border-indigo/30 bg-indigo/[0.06] text-indigo",
        outline: "border-ink/25 text-ink-muted bg-transparent",
        brass: "border-brass/40 bg-brass/[0.08] text-brass",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
