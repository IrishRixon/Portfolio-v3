import Link from "next/link";
import { NAV_ITEMS } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6">
        <div>
          <div className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-foreground">
            Rixon<span className="text-primary">.</span>
          </div>
          <div className="mt-0.5 font-sans text-xs text-muted-foreground">
            Junior Software Developer
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[13px] text-muted-foreground no-underline transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Irish Rixon Dela Peña
        </div>
      </div>
    </footer>
  );
}

