import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled || open
          ? "bg-background/88 shadow-[0_1px_0_color-mix(in_oklab,var(--color-foreground)_12%,transparent)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <a
        href="#fo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
      >
        Ugrás a tartalomra
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#fo" className="pressable flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-card shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_14%,transparent)]">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
              <rect x="3" y="10.6" width="18" height="2.8" rx="0.4" fill="currentColor" className="text-accent" />
              <circle cx="12" cy="6.4" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="17.6" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[11px] tracking-[0.28em] text-muted uppercase">
              Technológia
            </span>
            <span className="font-display text-lg tracking-wide text-foreground">Hengerlés</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Szakaszok">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="pressable sheen rounded-md px-3 py-2 font-display text-sm tracking-wide text-muted uppercase transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="pressable relative flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border lg:hidden",
          open ? "max-h-[80dvh]" : "max-h-0 border-transparent",
        )}
        style={{ transition: "max-height 280ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <nav className="flex flex-col gap-1 bg-background/95 px-4 py-4" aria-label="Mobil menü">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="pressable rounded-md px-3 py-3 font-display text-lg tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SideTabs({ active, visible }: { active: string; visible: boolean }) {
  return (
    <nav
      aria-label="Szakaszfülek"
      className={cn(
        "pointer-events-none fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex",
        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible ? "translate-x-0" : "translate-x-full",
      )}
    >
      {NAV.map((item, i) => {
        const on = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-cursor="hot"
            className={cn(
              "side-tab pointer-events-auto flex items-center gap-3 rounded-l-md border-l-2 py-2.5 pr-4 pl-3",
              on
                ? "is-active border-foreground bg-accent text-background"
                : "border-accent/80 bg-card text-foreground",
            )}
            style={{ transitionDelay: on ? "0ms" : `${i * 20}ms` }}
          >
            <span className="font-display w-6 text-center text-sm tabular-nums tracking-wider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-sm tracking-[0.16em] whitespace-nowrap uppercase">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-muted uppercase">Impresszum</p>
          <p className="font-display mt-3 text-3xl tracking-wide text-foreground uppercase">
            Weboldalt készítette xmatee
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Minden jog fenntartva. Oktatási célú ismertető a lemez- és csőhengerlés technológiájáról.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Elérhetőség</span>
          <a
            href="https://discord.com/users/1003078723198795846"
            target="_blank"
            rel="noreferrer"
            className="pressable sheen inline-flex w-fit rounded-md bg-card px-4 py-3 font-display tracking-wide uppercase"
          >
            Discord — xmatee
          </a>
        </div>
      </div>
    </footer>
  );
}
