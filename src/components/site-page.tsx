import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DEFECTS,
  GLOSSARY,
  HOT_COLD,
  MILL_TYPES,
  SHEET_STEPS,
  TUBE_SEAMLESS_STEPS,
  TUBE_WELDED_STEPS,
  USES,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/custom-cursor";
import { SideTabs, SiteFooter, SiteNav } from "@/components/chrome";
import {
  FormulaBar,
  HeroMill,
  MannesmannDiagram,
  MillTypeDiagram,
  WeldedDiagram,
} from "@/components/mill-visuals";
import { Reveal, SectionKicker, SectionTitle } from "@/components/reveal";

const SECTION_IDS = [
  "bevezetes",
  "lemez",
  "allvanyok",
  "homerseklet",
  "cso",
  "osszehasonlitas",
  "fogalmak",
];

function ImageFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]">
        <img
          src={src}
          alt={alt}
          className="content-photo aspect-photo h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 font-display text-xs tracking-[0.16em] text-muted uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

export function SitePage() {
  const active = useActiveSection(SECTION_IDS);
  const [tabsOn, setTabsOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setTabsOn(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-atmosphere relative min-h-dvh overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <SiteNav />
      <SideTabs active={active} visible={tabsOn} />
      <main id="fo">
        <Hero />
        <Intro />
        <SheetSection />
        <MillTypesSection />
        <HotColdSection />
        <TubeSection />
        <CompareSection />
        <GlossarySection />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 hero-heat" />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="hero-rise font-display text-sm tracking-[0.32em] text-accent uppercase">
          Képlékeny alakítás · Technológia
        </p>
        <h1
          className="hero-rise font-display mt-4 max-w-5xl text-5xl leading-[0.92] font-semibold tracking-wide text-foreground uppercase sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "90ms" }}
        >
          Lemez- és csőhengerlés
        </h1>
        <p
          className="hero-rise mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          style={{ animationDelay: "170ms" }}
        >
          A fém két forgó henger között kapja meg a vastagságát, a hosszát és a
          szelvényét. Ez az oldal a folyamatot — a brammától a tekercsig, a
          bugától a varrat nélküli csőig — tanítható rendben mutatja be.
        </p>
        <div
          className="hero-rise mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: "250ms" }}
        >
          <a
            href="#bevezetes"
            className="pressable sheen inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-5 font-display tracking-[0.14em] text-background uppercase"
          >
            A folyamat
            <ChevronRight className="size-4" />
          </a>
          <a
            href="#cso"
            className="pressable sheen inline-flex min-h-12 items-center gap-2 rounded-md bg-card px-5 font-display tracking-[0.14em] text-foreground uppercase shadow-[var(--shadow-border)]"
          >
            Csőhengerlés
          </a>
        </div>
        <div
          className="hero-rise mt-12 max-w-4xl overflow-hidden"
          style={{ animationDelay: "340ms" }}
        >
          <HeroMill />
        </div>
      </div>
      <a
        href="#bevezetes"
        className="scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="font-display text-[11px] tracking-[0.28em] uppercase">Görgetés</span>
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section id="bevezetes" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <SectionKicker index="01">Alapok</SectionKicker>
          <SectionTitle>Mi a hengerlés?</SectionTitle>
          <div className="mt-6 space-y-5 text-base text-muted sm:text-lg">
            <p>
              A hengerlés képlékeny alakítás: a darab két (vagy több), egymással
              ellentétesen forgó henger között halad át. A magassága csökken, a
              hossza nő, a szélessége kismértékben nő. Folyamatos nyújtókovácsolásként
              is szokás jellemezni — a kovácsolásnál termelékenyebb, és a világ
              acéltermelésének legnagyobb részét így alakítják.
            </p>
            <p>
              A hengerek a <strong className="font-medium text-foreground">hengerállványban</strong>{" "}
              állnak. Egy vagy több állvány alkotja a{" "}
              <strong className="font-medium text-foreground">hengersort</strong>, a
              kemencével, hűtéssel és kikészítéssel együtt a{" "}
              <strong className="font-medium text-foreground">hengerművet</strong>.
              Egy áthaladás a hengerek között a{" "}
              <strong className="font-medium text-foreground">szúrás</strong>.
            </p>
            <p>
              A súrlódás húzza be a darabot a résbe (befogás). A semleges vonal
              előtt a darab lassabb a henger palástjánál — hátramaradás —, utána
              gyorsabb — előresietés. A térfogat állandó: ami vastagságban
              eltűnik, hosszban megjelenik.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} x={24}>
          <ImageFrame
            src="/kep1.png"
            alt="Izzó acéllemez a munkahengerek között a meleghengerlés során"
            caption="Meleghengerlés — a darab a munkahengerek résében"
          />
          <div className="mt-6">
            <FormulaBar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SheetSection() {
  const [step, setStep] = useState(0);
  const current = SHEET_STEPS[step] ?? SHEET_STEPS[0];
  const reduce = useReducedMotion();

  return (
    <section id="lemez" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="02">Lapos termékek</SectionKicker>
          <SectionTitle>Lemezhengerlés</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A lapos termék — lemez, szalag, tábla — sima palástú hengerekkel
            készül. Kiinduló anyaga a folyamatosan öntött bramma. Magyarországon
            a szélesszalag-meleghengerlés központja Dunaújváros; az alumíniumot
            Székesfehérváron hengerlik, eltérő technológiával.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-2">
            {SHEET_STEPS.map((item, i) => (
              <button
                key={item.n}
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "pressable rounded-xl px-4 py-4 text-left transition-colors duration-200",
                  i === step
                    ? "bg-foreground text-background"
                    : "metal-panel text-foreground hover:bg-card",
                )}
              >
                <span className="font-display text-xs tracking-[0.22em] uppercase opacity-70">
                  {item.n}
                </span>
                <span className="font-display mt-1 block text-xl tracking-wide">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="metal-panel overflow-hidden rounded-2xl p-2">
            <div className="overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  className="content-photo aspect-photo w-full object-cover"
                  initial={reduce ? false : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <p className="text-base leading-relaxed text-muted">{current.body}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="pressable inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-card"
                  onClick={() => setStep((s) => (s === 0 ? SHEET_STEPS.length - 1 : s - 1))}
                  aria-label="Előző lépés"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <p className="font-display text-sm tracking-[0.2em] text-muted tabular-nums uppercase">
                  {current.n} / {String(SHEET_STEPS.length).padStart(2, "0")}
                </p>
                <button
                  type="button"
                  className="pressable inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-card"
                  onClick={() => setStep((s) => (s === SHEET_STEPS.length - 1 ? 0 : s + 1))}
                  aria-label="Következő lépés"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Durvalemez", d: "Egyedi tábla, gyakran reverzáló kvartón. Hajó, tartály, híd, hadiipar. Hengerek testhossza 4 m fölött is lehet." },
            { t: "Szélesszalag", d: "Félfolytatólagos vagy folytatólagos sor. Végvastagság ~2 mm-től, csévélve. ~70%-a hidegen továbbhengerlődik." },
            { t: "Hideg szalag", d: "Pácolás után tandem-soron vagy reverzáló kvartón. 0,3–3 mm, autólemez, háztartási gép, bevonatos lemez." },
          ].map((c) => (
            <Reveal key={c.t}>
              <article className="metal-panel h-full rounded-2xl p-6">
                <h3 className="font-display text-2xl tracking-wide uppercase">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MillTypesSection() {
  const [id, setId] = useState<(typeof MILL_TYPES)[number]["id"]>("quarto");
  const current = MILL_TYPES.find((m) => m.id === id) ?? MILL_TYPES[2];

  return (
    <section id="allvanyok" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="03">Gépek</SectionKicker>
          <SectionTitle>Hengerállványok</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A hengerléshez legalább két henger kell. Attól, hogy hány henger
            dolgozik egy állványban, és melyik a munkahenger, függ a vastagság
            egyenletessége, a hengerlési erő és az, hogy milyen vékonyra lehet
            menni.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {MILL_TYPES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setId(m.id)}
              className={cn(
                "pressable sheen min-h-11 rounded-md px-4 font-display tracking-[0.14em] uppercase",
                id === m.id
                  ? "bg-foreground text-background"
                  : "bg-card text-foreground shadow-[var(--shadow-border)]",
              )}
            >
              {m.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="metal-panel rounded-2xl p-6">
            <MillTypeDiagram type={current.id} />
          </div>
          <Reveal key={current.id}>
            <p className="font-display text-xs tracking-[0.22em] text-accent uppercase">
              {current.kicker}
            </p>
            <h3 className="font-display mt-2 text-4xl tracking-wide uppercase">{current.title}</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{current.body}</p>
            <ImageFrame
              className="mt-8"
              src="/kep2.png"
              alt="Négyhengeres kvartó hengerállvány munka- és támhengerekkel"
              caption="Kvartó állvány — a modern lemezhengerlés alapképlete"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HotColdSection() {
  return (
    <section id="homerseklet" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="04">Hőmérséklet</SectionKicker>
          <SectionTitle>Meleg és hideg</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A határ nem a „szoba” és a „tűz” hétköznapi különbsége, hanem az{" "}
            <strong className="font-medium text-foreground">újrakristályosodási hőmérséklet</strong>.
            Felette meleghengerlés: a fém folyamatosan újrakristályosodik, nem
            keményedik fel. Alatta hideghengerlés: a rácshibák felhalmozódnak,
            a szilárdság nő, a képlékenység csökken.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="metal-panel h-full rounded-2xl p-6 sm:p-8">
              <p className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                {HOT_COLD.hot.temp}
              </p>
              <h3 className="font-display mt-2 text-3xl tracking-wide uppercase">
                {HOT_COLD.hot.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{HOT_COLD.hot.finish}</p>
              <ul className="mt-6 space-y-3 text-muted">
                {HOT_COLD.hot.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="metal-panel h-full rounded-2xl p-6 sm:p-8">
              <p className="font-display text-xs tracking-[0.22em] text-muted uppercase">
                {HOT_COLD.cold.temp}
              </p>
              <h3 className="font-display mt-2 text-3xl tracking-wide uppercase">
                {HOT_COLD.cold.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{HOT_COLD.cold.finish}</p>
              <ul className="mt-6 space-y-3 text-muted">
                {HOT_COLD.cold.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ImageFrame
            src="/kep3.png"
            alt="Melegen hengerelt acéltekercsek a raktárban"
            caption="Melegtekercs — revees felület, a hideghengermű alapanyaga"
          />
          <ImageFrame
            src="/kep4.png"
            alt="Hideghengermű precíziós alakító sora"
            caption="Hideghengerlés — fényes szalag, szűk mérettűrés"
          />
        </div>
      </div>
    </section>
  );
}

function TubeSection() {
  const [mode, setMode] = useState<"seamless" | "welded">("seamless");
  const steps = mode === "seamless" ? TUBE_SEAMLESS_STEPS : TUBE_WELDED_STEPS;
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [mode]);

  const current = steps[step] ?? steps[0];

  return (
    <section id="cso" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="05">Csőgyártás</SectionKicker>
          <SectionTitle>Csőhengerlés</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A csőhengerlés szűkebb értelemben a{" "}
            <strong className="font-medium text-foreground">varrat nélküli</strong> acélcső
            képlékeny alakítása. A varratos csövet szalagból hajlítják és
            hegesztik — ez nem hengerlés a szó klasszikus értelmében, de ugyanazon
            a technológiaórán a két út mindig együtt szerepel.
          </p>
        </Reveal>

        <div className="mt-8 inline-flex rounded-lg bg-card p-1 shadow-[var(--shadow-border)]">
          {(
            [
              ["seamless", "Varrat nélküli"],
              ["welded", "Varratos"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              className={cn(
                "pressable min-h-11 rounded-md px-5 font-display tracking-[0.14em] uppercase",
                mode === key ? "bg-foreground text-background" : "text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 metal-panel rounded-2xl p-4 sm:p-8">
          {mode === "seamless" ? <MannesmannDiagram /> : <WeldedDiagram />}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-2">
            {steps.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "pressable rounded-xl px-4 py-4 text-left",
                  i === step ? "bg-accent text-foreground" : "metal-panel hover:bg-card",
                )}
              >
                <span className="font-display text-xs tracking-[0.22em] uppercase opacity-80">
                  {item.n}
                </span>
                <span className="font-display mt-1 block text-xl tracking-wide">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          <article className="metal-panel rounded-2xl p-6 sm:p-8">
            <p className="font-display text-xs tracking-[0.22em] text-muted uppercase">
              Lépés {current.n}
            </p>
            <h3 className="font-display mt-2 text-3xl tracking-wide uppercase">
              {current.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{current.body}</p>
            {mode === "seamless" ? (
              <ImageFrame
                className="mt-8"
                src={step < 2 ? "/kep5.png" : step < 4 ? "/kep9.png" : "/kep6.png"}
                alt={
                  step < 2
                    ? "Bugák hevítése a varrat nélküli csőgyártás előtt"
                    : step < 4
                      ? "Izzó darab a lyukasztás és nyújtás szakaszában"
                      : "Kész varrat nélküli acélcsövek"
                }
                caption={
                  step < 2
                    ? "Hevítés — 1200–1300 °C, átmelegedett mag"
                    : step < 4
                      ? "Hüvely készítése — ferdehengerlés és dugó"
                      : "Kész varrat nélküli csövek"
                }
              />
            ) : (
              <ImageFrame
                className="mt-8"
                src={step < 2 ? "/kep7.png" : "/kep6.png"}
                alt={
                  step < 2
                    ? "Szalag hajlítása csőszelvénnyé a varratos soron"
                    : "Kész acélcsövek a hengermű udvarán"
                }
                caption={
                  step < 2 ? "Szalagformázás a varratos soron" : "Kész csövek — varratos vagy varrat nélküli"
                }
              />
            )}
          </article>
        </div>

        <Reveal className="mt-12">
          <h3 className="font-display text-2xl tracking-wide uppercase">Két klasszikus út</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="metal-panel rounded-2xl p-6">
              <h4 className="font-display text-xl tracking-wide uppercase">Mannesmann, 1885</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Ferdehengerléses lyukasztás, majd pilgerhengerlés. A buga magja
                a csavarvonalú mozgás miatt felszakad, a dugó szabályos üreggé
                tágítja. A pilger periodikus: beharapás, nyújtás, simítás, üres
                szakasz 90°-os fordulással.
              </p>
            </article>
            <article className="metal-panel rounded-2xl p-6">
              <h4 className="font-display text-xl tracking-wide uppercase">Ehrhardt-tolás</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Négyzetes buga kitöltő lyukasztása pohárrá, majd a pohár
                tüskére húzva csökkenő kaliberű görgősoron tolódik. A feneket a
                végén lefűrészelik. Nem klasszikus hengerlés, de varrat nélküli
                csövet ad.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section id="osszehasonlitas" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="06">Áttekintés</SectionKicker>
          <SectionTitle>Összehasonlítás és felhasználás</SectionTitle>
        </Reveal>

        <div className="mt-10 min-w-0 overflow-x-auto rounded-2xl shadow-[var(--shadow-border)]">
          <table className="w-full min-w-lg border-collapse text-left text-sm">
            <thead className="bg-card font-display tracking-wide text-muted uppercase">
              <tr>
                <th className="px-4 py-4 font-medium">Szempont</th>
                <th className="px-4 py-4 font-medium">Lemez / szalag</th>
                <th className="px-4 py-4 font-medium">Varrat nélküli cső</th>
                <th className="px-4 py-4 font-medium">Varratos cső</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {[
                ["Kiinduló anyag", "Bramma", "Kör / négyzet buga", "Hengerelt szalag"],
                ["Alakító szerszám", "Sima palástú henger", "Ferdehenger + dugó / tüske", "Hajlítóhenger + hegesztés"],
                ["Fő alakváltozás", "Vastagságcsökkenés", "Lyukasztás + falcsökkenés", "Szelvényzárás"],
                ["Jellemző hiba", "Hullám, revebenyomódás", "Fal-excentritás", "Varrathiba"],
                ["Erősség", "Nagy felület, sík termék", "Nincs varrat, nyomástartó", "Olcsóbb, nagy átmérő"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${cell}`}
                      className={cn("px-4 py-4", i === 0 && "font-medium text-foreground")}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USES.map((u) => (
            <article key={u.title} className="metal-panel rounded-2xl p-5">
              <h3 className="font-display text-xl tracking-wide uppercase">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{u.body}</p>
            </article>
          ))}
        </div>

        <h3 className="font-display mt-14 text-2xl tracking-wide uppercase">Gyakori hibák</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEFECTS.map((d) => (
            <article key={d.title} className="rounded-2xl bg-card/70 p-5 shadow-[var(--shadow-border)]">
              <h4 className="font-display text-lg tracking-wide uppercase">{d.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ImageFrame
            src="/kep8.png"
            alt="Vastag acéllemez-táblák a durvalemezgyártás után"
            caption="Durvalemez — táblában, nem tekercsben"
          />
          <ImageFrame
            src="/kep6.png"
            alt="Kész acélcsövek a hengermű udvarán"
            caption="Cső — varrat nélkül a nyomástartó alkalmazásokhoz"
          />
        </div>
      </div>
    </section>
  );
}

function GlossarySection() {
  return (
    <section id="fogalmak" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionKicker index="07">Tananyag</SectionKicker>
          <SectionTitle>Fogalomtár és tanári vázlat</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A dolgozathoz és a táblai magyarázathoz: rövid definíciók, majd öt
            kérdés, amiből feleletet vagy röpdolgozatot is lehet indítani.
          </p>
        </Reveal>

        <dl className="mt-10 grid gap-3 sm:grid-cols-2">
          {GLOSSARY.map((g) => (
            <div key={g.term} className="metal-panel rounded-xl p-5">
              <dt className="font-display text-lg tracking-wide uppercase">{g.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{g.def}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 metal-panel rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-2xl tracking-wide uppercase">Öt kérdés a táblára</h3>
          <ol className="mt-6 space-y-4 text-muted">
            <li>
              <span className="font-medium text-foreground">1.</span> Mi a különbség
              a hengerállvány, a hengersor és a hengermű között?
            </li>
            <li>
              <span className="font-medium text-foreground">2.</span> Miért kell a
              meleghengerlést mindig a hideg előtt elvégezni, és hol van a
              hőmérsékleti határ?
            </li>
            <li>
              <span className="font-medium text-foreground">3.</span> Rajzold le a
              kvartó állványt, és indokold, miért kellenek támhengerek.
            </li>
            <li>
              <span className="font-medium text-foreground">4.</span> Ismertesd a
              Mannesmann-féle lyukasztást: miért szakad fel a buga közepe?
            </li>
            <li>
              <span className="font-medium text-foreground">5.</span> Mikor
              választunk varrat nélküli, és mikor varratos csövet? Nevezz meg
              egy-egy tipikus hibát mindkettőnél.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
