"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/nav";
import { useScrolled } from "./hooks/useNav";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export default function Nav({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
    const scrolled = useScrolled();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header
            className={cn(
                "fixed top-0 right-0 left-0 z-[100] transition-[background,border-color,box-shadow] duration-300",
                scrolled
                    ? "border-border bg-background/90 shadow-[0_1px_24px_rgba(0,0,0,0.06)] backdrop-blur-md border-b"
                    : "border-b border-transparent bg-transparent",
            )}
        >
            <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
                <Link
                    href="#"
                    className="font-display text-lg font-extrabold tracking-[-0.03em] text-foreground no-underline"
                >
                    Rixon<span className="text-primary">.</span>
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-sans text-sm font-medium text-muted-foreground no-underline transition-colors duration-200 hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={onToggle}
                        aria-label="Toggle theme"
                        variant="secondary"
                        size="icon"
                        className="size-9 rounded-lg border-border text-base"
                    >
                        {dark ? <Sun /> : <Moon />}
                    </Button>
                    <Link
                        href="/Resume.pdf"
                        download
                        prefetch={false}
                        className="hidden font-sans text-[13px] font-semibold tracking-[0.01em] text-primary-foreground bg-primary no-underline px-4 py-[7px] rounded-lg transition-opacity duration-200 hover:opacity-90 md:block"
                    >
                        Resume
                    </Link>
                    <Button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                        variant="secondary"
                        size="icon"
                        className="size-9 rounded-lg border-border text-lg md:hidden"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </Button>
                </div>
            </nav>
            {menuOpen && (
                <div className="flex flex-col gap-4 border-b border-border bg-card px-6 pt-4 pb-5 md:hidden">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-sans text-[15px] font-medium text-foreground no-underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/Resume.pdf"
                        download
                        prefetch={false}
                        onClick={() => setMenuOpen(false)}
                        className="font-sans text-sm font-semibold text-primary no-underline"
                    >
                        Download Resume ↓
                    </Link>
                </div>
            )}
        </header>
    );
}


