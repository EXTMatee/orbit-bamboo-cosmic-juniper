import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as ChevronRight, o as ArrowLeft, r as Menu, s as ArrowDown, t as X } from "../_libs/lucide-react.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-f7MsWzky.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "bevezetes",
		label: "Bevezetés"
	},
	{
		id: "lemez",
		label: "Lemez"
	},
	{
		id: "allvanyok",
		label: "Állványok"
	},
	{
		id: "homerseklet",
		label: "Meleg / hideg"
	},
	{
		id: "cso",
		label: "Cső"
	},
	{
		id: "osszehasonlitas",
		label: "Összehasonlítás"
	},
	{
		id: "fogalmak",
		label: "Fogalmak"
	}
];
var SHEET_STEPS = [
	{
		n: "01",
		title: "Bramma — a kiinduló darab",
		body: "A lapos termékek alapanyaga ma szinte kizárólag a folyamatosan öntött bramma (széles buga). A régi kokillaöntésű tuskó a hengerművekből már kiszorult. A bramma téglalap keresztmetszetű, vastag tömb: ebből kell lemezt vagy szalagot hengerelni.",
		image: "/kep8.png",
		alt: "Melegen hengerelt acéllemez-táblák a hengerműben"
	},
	{
		n: "02",
		title: "Újrahevítés",
		body: "A brammát toló- vagy járógerendás kemencében 1100–1250 °C-ra hevítik. Ennél a hőmérsékletnél az acél képlékeny, a hengerlési erő kezelhető, és a szemcseszerkezet is átalakul. A hevítés egyenletessége döntő: hideg mag később felületi hibát és belső feszültséget okoz.",
		image: "/kep5.png",
		alt: "Izzó acéltuskó hevítése a hengerlés előtt"
	},
	{
		n: "03",
		title: "Revétlenítés",
		body: "A kemencében vastag, kemény reve (oxidréteg) nő a darabon. Ezt nagynyomású vízsugárral, szükség esetén revetörő állvánnyal verdik le, mielőtt a darab a munkahengerekhez érne. Ha a reve bent marad, a hengerbe tapad, és a készlemez felülete tönkremegy.",
		image: "/kep9.png",
		alt: "Izzó acéldarab a hengerlési soron"
	},
	{
		n: "04",
		title: "Előnyújtás",
		body: "Az előnyújtó állvány — gyakran reverzáló kvartó vagy univerzál állvány — több szúrásban csökkenti a vastagságot, és beállítja a szélességet. Durvalemeznél keresztirányú, szélesítő szúrások is vannak: a darabot 90°-kal elforgatják, hogy a bramma szélességénél szélesebb táblát kapjanak.",
		image: "/kep1.png",
		alt: "Izzó acéllemez a munkahengerek között"
	},
	{
		n: "05",
		title: "Készsor — a végső vastagság",
		body: "A készsor több, egymás után álló állvány (tandem): a darab egy irányban, egyre vékonyabban halad át. Szélesszalag-sorokon a végvastagság akár 1,5–2 mm is lehet. A hengerlési sebesség a sor végén több méter/másodperc. Közben a hőmérsékletet, a vastagságot és a síkfekvést folyamatosan szabályozzák.",
		image: "/kep2.png",
		alt: "Kvartó hengerállvány munka- és támhengerekkel"
	},
	{
		n: "06",
		title: "Hűtés, csévélés vagy darabolás",
		body: "A kész szalagot a hűtőasztalon szabályozottan hűtik, majd felcsévélik — egy tekercs tömege 20 tonna körüli is lehet. A tekercsek egy része a hideghengerműbe megy. A táblalemezt nem csévélik: egyengetés, méretre vágás, vizsgálat és csomagolás következik.",
		image: "/kep3.png",
		alt: "Melegen hengerelt acéltekercsek a raktárban"
	}
];
var TUBE_SEAMLESS_STEPS = [
	{
		n: "01",
		title: "Buga előkészítése",
		body: "A varrat nélküli cső kiinduló anyaga kör, hat- vagy nyolcszögű öntött tuskó, illetve hengerelt vagy folyamatosan öntött négyzet- vagy körszelvényű buga. A darabot 1200–1300 °C-ra hevítik, hogy a magja is képlékeny legyen — a lyukasztásnál ez létfontosságú."
	},
	{
		n: "02",
		title: "Központosítás",
		body: "A homloklap közepébe kisméretű mélyedést ütnek vagy fúrnak. Ez vezeti a lyukasztódugót, és csökkenti a falvastagság-különbözetet (excentritást). Rossz központosítás ferde furatot és selejtes csövet ad."
	},
	{
		n: "03",
		title: "Mannesmann-féle ferdehengerlés",
		body: "Két, egymással szöget bezáró, azonos irányban forgó kettős kúpos henger fogja meg a darabot. A buga egyszerre forog és előrehalad: csavarvonalon mozog. A magban váltakozó csúsztatófeszültség lép fel, a közép felszakad, a tengelyben álló dugó pedig szabályos üreggé tágítja. Az eredmény vastag falú hüvely."
	},
	{
		n: "04",
		title: "Nyújtás — pilger vagy mandrel",
		body: "A hüvelyt vékony falú, hosszú csővé kell nyújtani. A klasszikus út a pilgerhengerlés: periodikus, előre-hátra mozgás tüskén. A mai főirány a folyamatos mandrel-sor: 7–9 állvány, belül mandrelrúd, akár 400% nyúlás egy menetben. Régebbi, nagy átmérőkhöz plug mill is használatos."
	},
	{
		n: "05",
		title: "Méretezés és nyújtva csökkentés",
		body: "A cső külső átmérőjét méretező soron (sizing mill), a falat és az átmérőt együtt stretch-reducing soron állítják be — belső szerszám nélkül, több kaliberes állványon. Itt korrigálják a falvastagság-egyenetlenséget is."
	},
	{
		n: "06",
		title: "Kikészítés",
		body: "Hűtés, egyengetés, darabolás, végek megmunkálása, roncsolásmentes vizsgálat (ultrahang, örvényáram), hidraulikus nyomáspróba. A kész cső olaj- és gázvezetékbe, kazánba, gépgyártásba vagy szerkezetbe kerül."
	}
];
var TUBE_WELDED_STEPS = [
	{
		n: "01",
		title: "Szalag előkészítése",
		body: "A varratos cső alapanyaga melegen vagy hidegen hengerelt szalag. A széleket tisztítják, a szalagot végtelenítik, hogy a sor folyamatosan járjon."
	},
	{
		n: "02",
		title: "Fokozatos hajlítás",
		body: "Sorba állított, kaliberes hajlítóhengerek a sík szalagot fokozatosan nyitott csőszelvénnyé görbítik. A varrat vonala felül vagy oldalt fut, a szélek pontosan találkoznak."
	},
	{
		n: "03",
		title: "Hegesztés",
		body: "ERW: nagyfrekvenciás ellenálláshegesztés — a széleket árammal izzítják, és összenyomják, hozaganyag nélkül. SAW / spirál: fedőporos hegesztés, gyakran spirálvarrattal, nagy átmérőkhöz. UOE: U-prés, O-prés, majd hegesztés és tágítás — vastag falú vezetékcsövekhez."
	},
	{
		n: "04",
		title: "Varrat kidolgozása",
		body: "A belső és külső varratbordát lehúzzák, a varratot hőkezelhetik. A hegesztési varrat a cső legérzékenyebb vonala: roncsolásmentes vizsgálat kötelező."
	},
	{
		n: "05",
		title: "Méretezés és vágás",
		body: "Méretező hengerek beállítják a külső átmérőt és a köralakot, majd a csövet hosszméretre vágják. Spirálcsőnél a szalag szélessége és a felcsavarás szöge határozza meg az átmérőt."
	}
];
var MILL_TYPES = [
	{
		id: "duo",
		title: "Duó",
		kicker: "Két henger",
		body: "A legegyszerűbb állvány: két munkahenger, egymással szemben. Lehet egyirányú vagy reverzáló (a darab oda-vissza jár). Előnyújtó sorokon és kisebb műhelyekben ma is előfordul. Hátránya, hogy a vékony munkahenger hajlik, ezért a lemez közepén vastagabb marad."
	},
	{
		id: "trio",
		title: "Trió / Lauth-trió",
		kicker: "Három henger",
		body: "Három henger egymás fölött. A darab hol a felső, hol az alsó résen halad — reverzálás motorirányváltás nélkül. A Lauth-trióban a középső henger kisebb átmérőjű, és gyakran szabadon fut. Régebbi durvalemez-sorok jellegzetes gépe."
	},
	{
		id: "quarto",
		title: "Kvartó",
		kicker: "Két munka + két támhenger",
		body: "A modern lemezhengerlés alapképlete. A vékony, gyorsabban kopó munkahengerek végzik az alakítást, a vastag támhengerek (támasztóhengerek) megakadályozzák a hajlást. Így egyenletes vastagságú, széles szalag is hengerelhető. A készsorok és a hideghengerművek szinte mindig kvartó vagy még több hengeresek."
	},
	{
		id: "cluster",
		title: "Sokhengeres / Sendzimir",
		kicker: "6–20 henger",
		body: "A munkahenger itt nagyon vékony: kis átmérő, nagy alakítási nyomás, vékony szalag és nehezen alakítható anyagok (rozsdamentes, szilíciumacél) számára. A támhengerek kaszkádja tartja. A 20 hengeres Sendzimir-állvány a hideg precíziós hengerlés klasszikusa."
	}
];
var HOT_COLD = {
	hot: {
		title: "Meleghengerlés",
		temp: "1100–1250 °C",
		finish: "befejezés ≈ 800–900 °C",
		points: [
			"Az újrakristályosodási hőmérséklet fölött megy végbe: a fém nem keményedik fel tartósan.",
			"Kis alakítási ellenállás, nagy vastagságcsökkenés egy szúrásban.",
			"Felület: reve, durvább érdesség, kékesszürke-fekete hengerelt bőr.",
			"Jó képlékenység, könnyebb továbbalakítás. Vastag lemez, szalag, idomacél, sín.",
			"A hengerlés mindig ezzel kezdődik — hidegen a brammát nem lehet megfogni."
		]
	},
	cold: {
		title: "Hideghengerlés",
		temp: "szobahőmérséklet",
		finish: "határ: újrakristályosodás alatt",
		points: [
			"Nagyobb hengerlési erő, erősebb állvány, precízebb vastagságszabályozás.",
			"Fényes, sima felület, szűk mérettűrés — autólemez, háztartási gép, csomagolószalag.",
			"A fém felkeményedik: a szilárdság nő, a képlékenység csökken. Közben lágyítani kell.",
			"Előtte pácolás (a melegtekercs revéjének oldása), utána dresszírozás 0,5–2,5% nyújtással.",
			"Végvastagság akár 0,1 mm, fóliánál 0,007 mm. Tandem-sor vagy reverzáló kvartó."
		]
	}
};
var GLOSSARY = [
	{
		term: "Szúrás",
		def: "A darab egy áthaladása a hengerek között. Egy késztermékhez több szúrás kell."
	},
	{
		term: "Nyújtási tényező (λ)",
		def: "A belépő és kilépő keresztmetszet hányadosa. λ = A1 / A2 = l2 / l1. Megmutatja, mennyire nyúlik a darab."
	},
	{
		term: "Munkahenger",
		def: "Az a henger, amely közvetlenül érintkezik a darabbal, és végzi az alakítást."
	},
	{
		term: "Támhenger",
		def: "Támasztóhenger: a munkahenger mögött áll, átveszi a hengerlési erőt, csökkenti a hajlást."
	},
	{
		term: "Hengerállvány",
		def: "A hengereket, csapágyakat és a beállító szerkezetet tartó keret. Egy vagy több állvány alkotja a hengersort."
	},
	{
		term: "Hengermű",
		def: "A teljes üzem: hengersor + kemence, hűtés, csévélés, kikészítés, hőkezelés."
	},
	{
		term: "Reverzáló állvány",
		def: "A hengerek iránya vált: a darab oda-vissza jár ugyanazon az állványon."
	},
	{
		term: "Tandem (folytatólagos) sor",
		def: "Több állvány egymás után, a darab egy irányban, egyre vékonyabban halad."
	},
	{
		term: "Univerzál állvány",
		def: "Vízszintes munkahengerek + függőleges torlóhengerek: vastagság és szélesség együtt szabályozható."
	},
	{
		term: "Bramma",
		def: "Folyamatosan öntött széles buga, a lemezhengerlés kiinduló darabja."
	},
	{
		term: "Reve",
		def: "Magas hőmérsékleten növő oxidréteg a darab felületén. Hengerlés előtt el kell távolítani."
	},
	{
		term: "Dresszírozás",
		def: "Apró, 0,5–2,5%-os hideg utánhengerlés: eltünteti a lágyítás utáni folyáshatár-fogat, beállítja az érdességet és a síkfekvést."
	},
	{
		term: "Hüvely",
		def: "A lyukasztás után kapott vastag falú, rövid nyerscső, amit tovább kell nyújtani."
	},
	{
		term: "Mandrel / tüske",
		def: "A cső belsejében haladó rúd vagy dugó, amely a belső átmérőt és a falvastagságot adja."
	},
	{
		term: "Kaliber",
		def: "A hengerbe vágott üreg, amely a darab szelvényét formálja. Cső- és rúdhengerlésnél nélkülözhetetlen."
	},
	{
		term: "Előresietés / hátramaradás",
		def: "A semleges vonal előtt a darab lassabb a henger kerületi sebességénél (hátramaradás), utána gyorsabb (előresietés)."
	}
];
var USES = [
	{
		title: "Járműipar",
		body: "Karosszérialemez, váz, kipufogócső — főként hidegen hengerelt, jól húzható acél."
	},
	{
		title: "Építés és híd",
		body: "Durvalemez, gerinclemezek, csövek oszlopnak és vezetéknek."
	},
	{
		title: "Energia",
		body: "Kazáncső, olaj- és gázvezeték, hőcserélő. Itt a varrat nélküli cső a biztonsági alap."
	},
	{
		title: "Hajó és tartály",
		body: "Vastag táblalemez, nyomástartó edény. A keresztirányú szúrás a széles táblát adja."
	},
	{
		title: "Gépgyártás",
		body: "Hidraulikus cső, precíziós hidegen húzott cső, kopásálló lemez."
	},
	{
		title: "Csomagolás és háztartás",
		body: "Fehérlemez, háztartási gép lemeze, vékony szalag — hideghengerlés és bevonatolás."
	}
];
var DEFECTS = [
	{
		title: "Élrepedés",
		body: "Túl nagy szélességcsökkenés vagy hideg él. A darab oldala szétnyílik."
	},
	{
		title: "Hullámosság / kardosodás",
		body: "Egyenetlen nyújtás a szélesség mentén. A szalag nem fekszik síkba, vagy ívben fut."
	},
	{
		title: "Revebenyomódás",
		body: "A henger a revét a felületbe nyomja. Előtte nem volt megfelelő a revétlenítés."
	},
	{
		title: "Falvastagság-excentritás",
		body: "Csőnél a furat nem középen halad. Rossz központosítás vagy kopott dugó."
	},
	{
		title: "Varrathiba",
		body: "Varratos csőnél hideghegedés, hiányos összeolvadás. Nyomáspróbán vagy ultrahangon derül ki."
	},
	{
		title: "Kéregfolyás, rátapadás",
		body: "Túlmelegedett felület vagy elégtelen hűtés a hengeren. A palást „ráharap” a darabra."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function isHotTarget(el) {
	if (!(el instanceof Element)) return false;
	return Boolean(el.closest("a, button, [role='button'], input, textarea, select, label, summary, [data-cursor='hot']"));
}
function CustomCursor() {
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		const root = rootRef.current;
		if (!root) return;
		document.documentElement.classList.add("has-custom-cursor");
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let rx = x;
		let ry = y;
		let raf = 0;
		const tick = () => {
			rx += (x - rx) * .28;
			ry += (y - ry) * .28;
			root.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;
			root.classList.toggle("is-hot", isHotTarget(e.target));
		};
		const onDown = () => root.classList.add("is-down");
		const onUp = () => root.classList.remove("is-down");
		const onLeave = () => {
			root.style.opacity = "0";
		};
		const onEnter = () => {
			root.style.opacity = "1";
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("pointerdown", onDown);
		window.addEventListener("pointerup", onUp);
		document.addEventListener("mouseleave", onLeave);
		document.addEventListener("mouseenter", onEnter);
		raf = requestAnimationFrame(tick);
		return () => {
			document.documentElement.classList.remove("has-custom-cursor");
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerdown", onDown);
			window.removeEventListener("pointerup", onUp);
			document.removeEventListener("mouseleave", onLeave);
			document.removeEventListener("mouseenter", onEnter);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "cursor-root hidden lg:block",
		"aria-hidden": "true",
		style: { opacity: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cursor-ring absolute top-0 left-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cursor-dot absolute top-0 left-0" })]
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300", scrolled || open ? "bg-background/88 shadow-[0_1px_0_color-mix(in_oklab,var(--color-foreground)_12%,transparent)] backdrop-blur-xl" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#fo",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-card focus:px-3 focus:py-2",
				children: "Ugrás a tartalomra"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#fo",
						className: "pressable flex items-center gap-3",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-md bg-card shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_14%,transparent)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 24 24",
								className: "size-5",
								"aria-hidden": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "3",
										y: "10.6",
										width: "18",
										height: "2.8",
										rx: "0.4",
										fill: "currentColor",
										className: "text-accent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "6.4",
										r: "3.6",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "17.6",
										r: "3.6",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.4"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display block text-[11px] tracking-[0.28em] text-muted uppercase",
								children: "Technológia"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg tracking-wide text-foreground",
								children: "Hengerlés"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Szakaszok",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							className: "pressable sheen rounded-md px-3 py-2 font-display text-sm tracking-wide text-muted uppercase transition-colors duration-200 hover:text-foreground",
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "pressable relative flex size-11 items-center justify-center rounded-md lg:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Menü bezárása" : "Menü megnyitása",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("overflow-hidden border-t border-border lg:hidden", open ? "max-h-[80dvh]" : "max-h-0 border-transparent"),
				style: { transition: "max-height 280ms cubic-bezier(0.22, 1, 0.36, 1)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1 bg-background/95 px-4 py-4",
					"aria-label": "Mobil menü",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						onClick: () => setOpen(false),
						className: "pressable rounded-md px-3 py-3 font-display text-lg tracking-wide uppercase",
						children: item.label
					}, item.id))
				})
			})
		]
	});
}
function SideTabs({ active, visible }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Szakaszfülek",
		className: cn("pointer-events-none fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex", "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", visible ? "translate-x-0" : "translate-x-full"),
		children: NAV.map((item, i) => {
			const on = active === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `#${item.id}`,
				"data-cursor": "hot",
				className: cn("side-tab pointer-events-auto flex items-center gap-3 rounded-l-md border-l-2 py-2.5 pr-4 pl-3", on ? "is-active border-foreground bg-accent text-background" : "border-accent/80 bg-card text-foreground"),
				style: { transitionDelay: on ? "0ms" : `${i * 20}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display w-6 text-center text-sm tabular-nums tracking-wider",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm tracking-[0.16em] whitespace-nowrap uppercase",
					children: item.label
				})]
			}, item.id);
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.28em] text-muted uppercase",
					children: "Impresszum"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display mt-3 text-3xl tracking-wide text-foreground uppercase",
					children: "Weboldalt készítette xmatee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-sm text-muted",
					children: "Minden jog fenntartva. Oktatási célú ismertető a lemez- és csőhengerlés technológiájáról."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "Elérhetőség"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://discord.com/users/1003078723198795846",
					target: "_blank",
					rel: "noreferrer",
					className: "pressable sheen inline-flex w-fit rounded-md bg-card px-4 py-3 font-display tracking-wide uppercase",
					children: "Discord — xmatee"
				})]
			})]
		})
	});
}
function Roll({ cx, cy, r, reverse, fast }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: cn("roll-spin", reverse && "roll-spin-rev", fast && "roll-spin-fast"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r,
				fill: "#2a3036",
				stroke: "#c5ccd3",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r: r * .62,
				fill: "none",
				stroke: "#6d757e",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r: r * .18,
				fill: "#0c0e11",
				stroke: "#aeb6be",
				strokeWidth: "1"
			}),
			Array.from({ length: 8 }).map((_, i) => {
				const a = i * Math.PI / 4;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: cx + Math.cos(a) * r * .22,
					y1: cy + Math.sin(a) * r * .22,
					x2: cx + Math.cos(a) * r * .9,
					y2: cy + Math.sin(a) * r * .9,
					stroke: "#8b939c",
					strokeWidth: "1.1"
				}, i);
			})
		]
	});
}
function HeroMill({ className }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 760 300",
		className: cn("h-auto w-full overflow-hidden", className),
		role: "img",
		"aria-label": "Két munkahenger között áthaladó izzó lemez sematikus ábrája",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${id}-slab`,
					x1: "0",
					x2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#6a2410"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0.5",
							stopColor: "#f0a45c"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#6a2410"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${id}-frame`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "#3a4148"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "#161a1f"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
					id: `${id}-glow`,
					x: "-30%",
					y: "-80%",
					width: "160%",
					height: "260%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
						stdDeviation: "6",
						result: "b"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "18",
				width: "44",
				height: "264",
				rx: "4",
				fill: `url(#${id}-frame)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "646",
				y: "18",
				width: "44",
				height: "264",
				rx: "4",
				fill: `url(#${id}-frame)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "18",
				width: "620",
				height: "14",
				rx: "2",
				fill: "#4a525b"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "268",
				width: "620",
				height: "14",
				rx: "2",
				fill: "#4a525b"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 380,
				cy: 78,
				r: 52,
				reverse: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 380,
				cy: 222,
				r: 52
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				filter: `url(#${id}-glow)`,
				className: "slab-pass",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "120",
					y: "138",
					width: "520",
					height: "24",
					rx: "3",
					fill: `url(#${id}-slab)`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "120",
					y: "146",
					width: "520",
					height: "6",
					fill: "white",
					opacity: "0.28",
					className: "heat-pulse"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "380",
				y: "24",
				textAnchor: "middle",
				fill: "#c5ccd3",
				fontSize: "11",
				letterSpacing: "2.4",
				children: "MUNKAHENGEREK · SZÚRÁS"
			})
		]
	});
}
function MillTypeDiagram({ type }) {
	if (type === "duo") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 260",
		className: "h-auto w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "20",
				width: "20",
				height: "220",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "242",
				y: "20",
				width: "20",
				height: "220",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 78,
				r: 46,
				reverse: true,
				fast: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "54",
				y: "122",
				width: "172",
				height: "16",
				rx: "2",
				fill: "#c45a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 182,
				r: 46,
				fast: true
			})
		]
	});
	if (type === "trio") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 260",
		className: "h-auto w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "12",
				width: "20",
				height: "236",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "242",
				y: "12",
				width: "20",
				height: "236",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 48,
				r: 32,
				reverse: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "82",
				width: "140",
				height: "12",
				rx: "2",
				fill: "#c45a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 130,
				r: 28,
				fast: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "166",
				width: "140",
				height: "12",
				rx: "2",
				fill: "#c45a2a",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 210,
				r: 32
			})
		]
	});
	if (type === "quarto") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 280",
		className: "h-auto w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "10",
				width: "22",
				height: "260",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "244",
				y: "10",
				width: "22",
				height: "260",
				rx: "3",
				fill: "#2c333a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 52,
				r: 38,
				reverse: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 112,
				r: 22,
				reverse: true,
				fast: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "62",
				y: "132",
				width: "156",
				height: "14",
				rx: "2",
				fill: "#c45a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 168,
				r: 22,
				fast: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 228,
				r: 38
			})
		]
	});
	const satellites = Array.from({ length: 8 }).map((_, i) => {
		const a = i * Math.PI / 4 + Math.PI / 8;
		return {
			cx: 140 + Math.cos(a) * 78,
			cy: 130 + Math.sin(a) * 86
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 260",
		className: "h-auto w-full",
		"aria-hidden": true,
		children: [
			satellites.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: s.cx,
				cy: s.cy,
				r: 16,
				fill: "#3a424a",
				stroke: "#8b939c",
				strokeWidth: "1"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 104,
				r: 18,
				reverse: true,
				fast: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "88",
				y: "122",
				width: "104",
				height: "10",
				rx: "2",
				fill: "#c45a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
				cx: 140,
				cy: 154,
				r: 18,
				fast: true
			})
		]
	});
}
function MannesmannDiagram({ className }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 560 260",
		className: cn("h-auto w-full", className),
		role: "img",
		"aria-label": "Mannesmann-féle ferdehengerlés: két ferde henger, izzó buga és lyukasztódugó",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: `${id}-hot`,
				x1: "0",
				x2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "#5a1e0c"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0.5",
						stopColor: "#e08940"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "#5a1e0c"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "280",
				y: "22",
				textAnchor: "middle",
				fill: "#8c929b",
				fontSize: "11",
				letterSpacing: "2",
				children: "FERDEHENGERLÉS · LYUKASZTÁS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				transform: "rotate(-18 200 130)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
					cx: 200,
					cy: 78,
					r: 48,
					reverse: true,
					fast: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				transform: "rotate(18 200 130)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roll, {
					cx: 200,
					cy: 182,
					r: 48,
					fast: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "118",
				cy: "130",
				rx: "70",
				ry: "28",
				fill: `url(#${id}-hot)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "300",
				cy: "130",
				rx: "86",
				ry: "22",
				fill: `url(#${id}-hot)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "300",
				cy: "130",
				rx: "48",
				ry: "10",
				fill: "#1a0d08",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "348,130 430,118 430,142",
				fill: "#c5ccd3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "428",
				y: "124",
				width: "92",
				height: "12",
				rx: "2",
				fill: "#9aa3ad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "118",
				y: "178",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "buga"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "300",
				y: "172",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "hüvely"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "455",
				y: "158",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "dugó"
			})
		]
	});
}
function WeldedDiagram({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 560 200",
		className: cn("h-auto w-full", className),
		role: "img",
		"aria-label": "Varratos csőgyártás: szalag fokozatos hajlítása, majd hegesztés",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "280",
				y: "22",
				textAnchor: "middle",
				fill: "#8c929b",
				fontSize: "11",
				letterSpacing: "2",
				children: "SZALAG → CSŐSZELVÉNY → VARRAT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "92",
				width: "110",
				height: "10",
				fill: "#9aa3ad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 97 C 190 97 190 70 230 70 S 270 97 300 97",
				fill: "none",
				stroke: "#9aa3ad",
				strokeWidth: "10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M300 97 C 340 97 350 60 380 72",
				fill: "none",
				stroke: "#9aa3ad",
				strokeWidth: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "430",
				cy: "97",
				r: "28",
				fill: "none",
				stroke: "#9aa3ad",
				strokeWidth: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "430",
				y1: "69",
				x2: "430",
				y2: "78",
				stroke: "#c45a2a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "510",
				cy: "97",
				r: "28",
				fill: "none",
				stroke: "#c5ccd3",
				strokeWidth: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "78",
				y: "128",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "szalag"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "230",
				y: "150",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "hajlítás"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "430",
				y: "150",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "hegesztés"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "510",
				y: "150",
				textAnchor: "middle",
				fill: "#ece8e1",
				fontSize: "11",
				children: "cső"
			})
		]
	});
}
function FormulaBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: [
			{
				k: "Térfogat-állandóság",
				v: "h₁·b₁·l₁ = h₂·b₂·l₂"
			},
			{
				k: "Nyújtási tényező",
				v: "λ = A₁ / A₂ = l₂ / l₁"
			},
			{
				k: "Nyomott ív vetülete",
				v: "lₐ ≈ √(R · Δh)"
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "metal-panel rounded-xl px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs tracking-[0.18em] text-muted uppercase",
				children: item.k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl tracking-wide text-foreground",
				children: item.v
			})]
		}, item.k))
	});
}
function Reveal({ children, className, delay = 0, x = 0 }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 18,
			x,
			filter: "blur(4px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			x: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-12% 0px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionKicker({ index, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center gap-3 text-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm tracking-[0.28em] tabular-nums",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm tracking-[0.22em] uppercase",
				children
			})
		]
	});
}
function SectionTitle({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("font-display text-4xl font-semibold tracking-wide text-foreground uppercase sm:text-5xl", className),
		children
	});
}
var SECTION_IDS = [
	"bevezetes",
	"lemez",
	"allvanyok",
	"homerseklet",
	"cso",
	"osszehasonlitas",
	"fogalmak"
];
function ImageFrame({ src, alt, caption, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("group", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "content-photo aspect-photo h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
				loading: "lazy"
			})
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 font-display text-xs tracking-[0.16em] text-muted uppercase",
			children: caption
		}) : null]
	});
}
function useActiveSection(ids) {
	const [active, setActive] = (0, import_react.useState)(ids[0] ?? "");
	(0, import_react.useEffect)(() => {
		const nodes = ids.map((id) => document.getElementById(id)).filter((n) => Boolean(n));
		if (!nodes.length) return;
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-28% 0px -48% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((n) => obs.observe(n));
		return () => obs.disconnect();
	}, [ids]);
	return active;
}
function SitePage() {
	const active = useActiveSection(SECTION_IDS);
	const [tabsOn, setTabsOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setTabsOn(window.scrollY > window.innerHeight * .4);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-atmosphere relative min-h-dvh overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideTabs, {
				active,
				visible: tabsOn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "fo",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MillTypesSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotColdSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TubeSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlossarySection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-dvh flex-col justify-end overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hero-heat" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise font-display text-sm tracking-[0.32em] text-accent uppercase",
						children: "Képlékeny alakítás · Technológia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "hero-rise font-display mt-4 max-w-5xl text-5xl leading-[0.92] font-semibold tracking-wide text-foreground uppercase sm:text-7xl lg:text-8xl",
						style: { animationDelay: "90ms" },
						children: "Lemez- és csőhengerlés"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise mt-6 max-w-2xl text-lg text-muted sm:text-xl",
						style: { animationDelay: "170ms" },
						children: "A fém két forgó henger között kapja meg a vastagságát, a hosszát és a szelvényét. Ez az oldal a folyamatot — a brammától a tekercsig, a bugától a varrat nélküli csőig — tanítható rendben mutatja be."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rise mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "250ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#bevezetes",
							className: "pressable sheen inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-5 font-display tracking-[0.14em] text-background uppercase",
							children: ["A folyamat", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cso",
							className: "pressable sheen inline-flex min-h-12 items-center gap-2 rounded-md bg-card px-5 font-display tracking-[0.14em] text-foreground uppercase shadow-[var(--shadow-border)]",
							children: "Csőhengerlés"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-rise mt-12 max-w-4xl overflow-hidden",
						style: { animationDelay: "340ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMill, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#bevezetes",
				className: "scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[11px] tracking-[0.28em] uppercase",
					children: "Görgetés"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
			})
		]
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "bevezetes",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
					index: "01",
					children: "Alapok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Mi a hengerlés?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-5 text-base text-muted sm:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A hengerlés képlékeny alakítás: a darab két (vagy több), egymással ellentétesen forgó henger között halad át. A magassága csökken, a hossza nő, a szélessége kismértékben nő. Folyamatos nyújtókovácsolásként is szokás jellemezni — a kovácsolásnál termelékenyebb, és a világ acéltermelésének legnagyobb részét így alakítják." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"A hengerek a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "hengerállványban"
							}),
							" ",
							"állnak. Egy vagy több állvány alkotja a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "hengersort"
							}),
							", a kemencével, hűtéssel és kikészítéssel együtt a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "hengerművet"
							}),
							". Egy áthaladás a hengerek között a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "szúrás"
							}),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A súrlódás húzza be a darabot a résbe (befogás). A semleges vonal előtt a darab lassabb a henger palástjánál — hátramaradás —, utána gyorsabb — előresietés. A térfogat állandó: ami vastagságban eltűnik, hosszban megjelenik." })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .08,
				x: 24,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
					src: "/kep1.png",
					alt: "Izzó acéllemez a munkahengerek között a meleghengerlés során",
					caption: "Meleghengerlés — a darab a munkahengerek résében"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBar, {})
				})]
			})]
		})
	});
}
function SheetSection() {
	const [step, setStep] = (0, import_react.useState)(0);
	const current = SHEET_STEPS[step] ?? SHEET_STEPS[0];
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lemez",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "02",
						children: "Lapos termékek"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Lemezhengerlés" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted",
						children: "A lapos termék — lemez, szalag, tábla — sima palástú hengerekkel készül. Kiinduló anyaga a folyamatosan öntött bramma. Magyarországon a szélesszalag-meleghengerlés központja Dunaújváros; az alumíniumot Székesfehérváron hengerlik, eltérő technológiával."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: SHEET_STEPS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep(i),
							className: cn("pressable rounded-xl px-4 py-4 text-left transition-colors duration-200", i === step ? "bg-foreground text-background" : "metal-panel text-foreground hover:bg-card"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-[0.22em] uppercase opacity-70",
								children: item.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display mt-1 block text-xl tracking-wide",
								children: item.title
							})]
						}, item.n))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "metal-panel overflow-hidden rounded-2xl p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: current.image,
									alt: current.alt,
									className: "content-photo aspect-photo w-full object-cover",
									initial: reduce ? false : {
										opacity: 0,
										scale: 1.02
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: reduce ? void 0 : { opacity: 0 },
									transition: {
										duration: .35,
										ease: [
											.22,
											1,
											.36,
											1
										]
									}
								}, current.image)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-5 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-muted",
								children: current.body
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "pressable inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-card",
										onClick: () => setStep((s) => s === 0 ? SHEET_STEPS.length - 1 : s - 1),
										"aria-label": "Előző lépés",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-sm tracking-[0.2em] text-muted tabular-nums uppercase",
										children: [
											current.n,
											" / ",
											String(SHEET_STEPS.length).padStart(2, "0")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "pressable inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-card",
										onClick: () => setStep((s) => s === SHEET_STEPS.length - 1 ? 0 : s + 1),
										"aria-label": "Következő lépés",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
									})
								]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-3",
					children: [
						{
							t: "Durvalemez",
							d: "Egyedi tábla, gyakran reverzáló kvartón. Hajó, tartály, híd, hadiipar. Hengerek testhossza 4 m fölött is lehet."
						},
						{
							t: "Szélesszalag",
							d: "Félfolytatólagos vagy folytatólagos sor. Végvastagság ~2 mm-től, csévélve. ~70%-a hidegen továbbhengerlődik."
						},
						{
							t: "Hideg szalag",
							d: "Pácolás után tandem-soron vagy reverzáló kvartón. 0,3–3 mm, autólemez, háztartási gép, bevonatos lemez."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "metal-panel h-full rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-wide uppercase",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: c.d
						})]
					}) }, c.t))
				})
			]
		})
	});
}
function MillTypesSection() {
	const [id, setId] = (0, import_react.useState)("quarto");
	const current = MILL_TYPES.find((m) => m.id === id) ?? MILL_TYPES[2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "allvanyok",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "03",
						children: "Gépek"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Hengerállványok" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted",
						children: "A hengerléshez legalább két henger kell. Attól, hogy hány henger dolgozik egy állványban, és melyik a munkahenger, függ a vastagság egyenletessége, a hengerlési erő és az, hogy milyen vékonyra lehet menni."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					children: MILL_TYPES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setId(m.id),
						className: cn("pressable sheen min-h-11 rounded-md px-4 font-display tracking-[0.14em] uppercase", id === m.id ? "bg-foreground text-background" : "bg-card text-foreground shadow-[var(--shadow-border)]"),
						children: m.title
					}, m.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "metal-panel rounded-2xl p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MillTypeDiagram, { type: current.id })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.22em] text-accent uppercase",
							children: current.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-2 text-4xl tracking-wide uppercase",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lg leading-relaxed text-muted",
							children: current.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
							className: "mt-8",
							src: "/kep2.png",
							alt: "Négyhengeres kvartó hengerállvány munka- és támhengerekkel",
							caption: "Kvartó állvány — a modern lemezhengerlés alapképlete"
						})
					] }, current.id)]
				})
			]
		})
	});
}
function HotColdSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "homerseklet",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "04",
						children: "Hőmérséklet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Meleg és hideg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted",
						children: [
							"A határ nem a „szoba” és a „tűz” hétköznapi különbsége, hanem az",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "újrakristályosodási hőmérséklet"
							}),
							". Felette meleghengerlés: a fém folyamatosan újrakristályosodik, nem keményedik fel. Alatta hideghengerlés: a rácshibák felhalmozódnak, a szilárdság nő, a képlékenység csökken."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "metal-panel h-full rounded-2xl p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.22em] text-accent uppercase",
								children: HOT_COLD.hot.temp
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-2 text-3xl tracking-wide uppercase",
								children: HOT_COLD.hot.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: HOT_COLD.hot.finish
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3 text-muted",
								children: HOT_COLD.hot.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
								}, p))
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metal-panel h-full rounded-2xl p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs tracking-[0.22em] text-muted uppercase",
									children: HOT_COLD.cold.temp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-2 text-3xl tracking-wide uppercase",
									children: HOT_COLD.cold.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: HOT_COLD.cold.finish
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3 text-muted",
									children: HOT_COLD.cold.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
									}, p))
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
						src: "/kep3.png",
						alt: "Melegen hengerelt acéltekercsek a raktárban",
						caption: "Melegtekercs — revees felület, a hideghengermű alapanyaga"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
						src: "/kep4.png",
						alt: "Hideghengermű precíziós alakító sora",
						caption: "Hideghengerlés — fényes szalag, szűk mérettűrés"
					})]
				})
			]
		})
	});
}
function TubeSection() {
	const [mode, setMode] = (0, import_react.useState)("seamless");
	const steps = mode === "seamless" ? TUBE_SEAMLESS_STEPS : TUBE_WELDED_STEPS;
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setStep(0);
	}, [mode]);
	const current = steps[step] ?? steps[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cso",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "05",
						children: "Csőgyártás"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Csőhengerlés" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted",
						children: [
							"A csőhengerlés szűkebb értelemben a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "varrat nélküli"
							}),
							" acélcső képlékeny alakítása. A varratos csövet szalagból hajlítják és hegesztik — ez nem hengerlés a szó klasszikus értelmében, de ugyanazon a technológiaórán a két út mindig együtt szerepel."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 inline-flex rounded-lg bg-card p-1 shadow-[var(--shadow-border)]",
					children: [["seamless", "Varrat nélküli"], ["welded", "Varratos"]].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(key),
						className: cn("pressable min-h-11 rounded-md px-5 font-display tracking-[0.14em] uppercase", mode === key ? "bg-foreground text-background" : "text-muted"),
						children: label
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 metal-panel rounded-2xl p-4 sm:p-8",
					children: mode === "seamless" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MannesmannDiagram, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeldedDiagram, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: steps.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep(i),
							className: cn("pressable rounded-xl px-4 py-4 text-left", i === step ? "bg-accent text-foreground" : "metal-panel hover:bg-card"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-[0.22em] uppercase opacity-80",
								children: item.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display mt-1 block text-xl tracking-wide",
								children: item.title
							})]
						}, item.title))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "metal-panel rounded-2xl p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xs tracking-[0.22em] text-muted uppercase",
								children: ["Lépés ", current.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-2 text-3xl tracking-wide uppercase",
								children: current.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg leading-relaxed text-muted",
								children: current.body
							}),
							mode === "seamless" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
								className: "mt-8",
								src: step < 2 ? "/kep5.png" : step < 4 ? "/kep9.png" : "/kep6.png",
								alt: step < 2 ? "Bugák hevítése a varrat nélküli csőgyártás előtt" : step < 4 ? "Izzó darab a lyukasztás és nyújtás szakaszában" : "Kész varrat nélküli acélcsövek",
								caption: step < 2 ? "Hevítés — 1200–1300 °C, átmelegedett mag" : step < 4 ? "Hüvely készítése — ferdehengerlés és dugó" : "Kész varrat nélküli csövek"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
								className: "mt-8",
								src: step < 2 ? "/kep7.png" : "/kep6.png",
								alt: step < 2 ? "Szalag hajlítása csőszelvénnyé a varratos soron" : "Kész acélcsövek a hengermű udvarán",
								caption: step < 2 ? "Szalagformázás a varratos soron" : "Kész csövek — varratos vagy varrat nélküli"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl tracking-wide uppercase",
						children: "Két klasszikus út"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metal-panel rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-xl tracking-wide uppercase",
								children: "Mannesmann, 1885"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: "Ferdehengerléses lyukasztás, majd pilgerhengerlés. A buga magja a csavarvonalú mozgás miatt felszakad, a dugó szabályos üreggé tágítja. A pilger periodikus: beharapás, nyújtás, simítás, üres szakasz 90°-os fordulással."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metal-panel rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-xl tracking-wide uppercase",
								children: "Ehrhardt-tolás"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: "Négyzetes buga kitöltő lyukasztása pohárrá, majd a pohár tüskére húzva csökkenő kaliberű görgősoron tolódik. A feneket a végén lefűrészelik. Nem klasszikus hengerlés, de varrat nélküli csövet ad."
							})]
						})]
					})]
				})
			]
		})
	});
}
function CompareSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "osszehasonlitas",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
					index: "06",
					children: "Áttekintés"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Összehasonlítás és felhasználás" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 min-w-0 overflow-x-auto rounded-2xl shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-lg border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-card font-display tracking-wide text-muted uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-4 font-medium",
									children: "Szempont"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-4 font-medium",
									children: "Lemez / szalag"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-4 font-medium",
									children: "Varrat nélküli cső"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-4 font-medium",
									children: "Varratos cső"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "text-muted",
							children: [
								[
									"Kiinduló anyag",
									"Bramma",
									"Kör / négyzet buga",
									"Hengerelt szalag"
								],
								[
									"Alakító szerszám",
									"Sima palástú henger",
									"Ferdehenger + dugó / tüske",
									"Hajlítóhenger + hegesztés"
								],
								[
									"Fő alakváltozás",
									"Vastagságcsökkenés",
									"Lyukasztás + falcsökkenés",
									"Szelvényzárás"
								],
								[
									"Jellemző hiba",
									"Hullám, revebenyomódás",
									"Fal-excentritás",
									"Varrathiba"
								],
								[
									"Erősség",
									"Nagy felület, sík termék",
									"Nincs varrat, nyomástartó",
									"Olcsóbb, nagy átmérő"
								]
							].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "border-t border-border",
								children: row.map((cell, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("px-4 py-4", i === 0 && "font-medium text-foreground"),
									children: cell
								}, `${row[0]}-${cell}`))
							}, row[0]))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: USES.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "metal-panel rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl tracking-wide uppercase",
							children: u.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: u.body
						})]
					}, u.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-14 text-2xl tracking-wide uppercase",
					children: "Gyakori hibák"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: DEFECTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-card/70 p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg tracking-wide uppercase",
							children: d.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: d.body
						})]
					}, d.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
						src: "/kep8.png",
						alt: "Vastag acéllemez-táblák a durvalemezgyártás után",
						caption: "Durvalemez — táblában, nem tekercsben"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
						src: "/kep6.png",
						alt: "Kész acélcsövek a hengermű udvarán",
						caption: "Cső — varrat nélkül a nyomástartó alkalmazásokhoz"
					})]
				})
			]
		})
	});
}
function GlossarySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "fogalmak",
		className: "scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "07",
						children: "Tananyag"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Fogalomtár és tanári vázlat" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted",
						children: "A dolgozathoz és a táblai magyarázathoz: rövid definíciók, majd öt kérdés, amiből feleletet vagy röpdolgozatot is lehet indítani."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid gap-3 sm:grid-cols-2",
					children: GLOSSARY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "metal-panel rounded-xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-lg tracking-wide uppercase",
							children: g.term
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: g.def
						})]
					}, g.term))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 metal-panel rounded-2xl p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl tracking-wide uppercase",
						children: "Öt kérdés a táblára"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-6 space-y-4 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "1."
							}), " Mi a különbség a hengerállvány, a hengersor és a hengermű között?"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "2."
							}), " Miért kell a meleghengerlést mindig a hideg előtt elvégezni, és hol van a hőmérsékleti határ?"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "3."
							}), " Rajzold le a kvartó állványt, és indokold, miért kellenek támhengerek."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "4."
							}), " Ismertesd a Mannesmann-féle lyukasztást: miért szakad fel a buga közepe?"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "5."
							}), " Mikor választunk varrat nélküli, és mikor varratos csövet? Nevezz meg egy-egy tipikus hibát mindkettőnél."] })
						]
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePage, {});
}
//#endregion
export { Home as component };
