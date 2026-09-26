export const NAV = [
  { id: "bevezetes", label: "Bevezetés" },
  { id: "lemez", label: "Lemez" },
  { id: "allvanyok", label: "Állványok" },
  { id: "homerseklet", label: "Meleg / hideg" },
  { id: "cso", label: "Cső" },
  { id: "osszehasonlitas", label: "Összehasonlítás" },
  { id: "fogalmak", label: "Fogalmak" },
] as const;

export const SHEET_STEPS = [
  {
    n: "01",
    title: "Bramma — a kiinduló darab",
    body: "A lapos termékek alapanyaga ma szinte kizárólag a folyamatosan öntött bramma (széles buga). A régi kokillaöntésű tuskó a hengerművekből már kiszorult. A bramma téglalap keresztmetszetű, vastag tömb: ebből kell lemezt vagy szalagot hengerelni.",
    image: "/kep8.png",
    alt: "Melegen hengerelt acéllemez-táblák a hengerműben",
  },
  {
    n: "02",
    title: "Újrahevítés",
    body: "A brammát toló- vagy járógerendás kemencében 1100–1250 °C-ra hevítik. Ennél a hőmérsékletnél az acél képlékeny, a hengerlési erő kezelhető, és a szemcseszerkezet is átalakul. A hevítés egyenletessége döntő: hideg mag később felületi hibát és belső feszültséget okoz.",
    image: "/kep5.png",
    alt: "Izzó acéltuskó hevítése a hengerlés előtt",
  },
  {
    n: "03",
    title: "Revétlenítés",
    body: "A kemencében vastag, kemény reve (oxidréteg) nő a darabon. Ezt nagynyomású vízsugárral, szükség esetén revetörő állvánnyal verdik le, mielőtt a darab a munkahengerekhez érne. Ha a reve bent marad, a hengerbe tapad, és a készlemez felülete tönkremegy.",
    image: "/kep9.png",
    alt: "Izzó acéldarab a hengerlési soron",
  },
  {
    n: "04",
    title: "Előnyújtás",
    body: "Az előnyújtó állvány — gyakran reverzáló kvartó vagy univerzál állvány — több szúrásban csökkenti a vastagságot, és beállítja a szélességet. Durvalemeznél keresztirányú, szélesítő szúrások is vannak: a darabot 90°-kal elforgatják, hogy a bramma szélességénél szélesebb táblát kapjanak.",
    image: "/kep1.png",
    alt: "Izzó acéllemez a munkahengerek között",
  },
  {
    n: "05",
    title: "Készsor — a végső vastagság",
    body: "A készsor több, egymás után álló állvány (tandem): a darab egy irányban, egyre vékonyabban halad át. Szélesszalag-sorokon a végvastagság akár 1,5–2 mm is lehet. A hengerlési sebesség a sor végén több méter/másodperc. Közben a hőmérsékletet, a vastagságot és a síkfekvést folyamatosan szabályozzák.",
    image: "/kep2.png",
    alt: "Kvartó hengerállvány munka- és támhengerekkel",
  },
  {
    n: "06",
    title: "Hűtés, csévélés vagy darabolás",
    body: "A kész szalagot a hűtőasztalon szabályozottan hűtik, majd felcsévélik — egy tekercs tömege 20 tonna körüli is lehet. A tekercsek egy része a hideghengerműbe megy. A táblalemezt nem csévélik: egyengetés, méretre vágás, vizsgálat és csomagolás következik.",
    image: "/kep3.png",
    alt: "Melegen hengerelt acéltekercsek a raktárban",
  },
] as const;

export const TUBE_SEAMLESS_STEPS = [
  {
    n: "01",
    title: "Buga előkészítése",
    body: "A varrat nélküli cső kiinduló anyaga kör, hat- vagy nyolcszögű öntött tuskó, illetve hengerelt vagy folyamatosan öntött négyzet- vagy körszelvényű buga. A darabot 1200–1300 °C-ra hevítik, hogy a magja is képlékeny legyen — a lyukasztásnál ez létfontosságú.",
  },
  {
    n: "02",
    title: "Központosítás",
    body: "A homloklap közepébe kisméretű mélyedést ütnek vagy fúrnak. Ez vezeti a lyukasztódugót, és csökkenti a falvastagság-különbözetet (excentritást). Rossz központosítás ferde furatot és selejtes csövet ad.",
  },
  {
    n: "03",
    title: "Mannesmann-féle ferdehengerlés",
    body: "Két, egymással szöget bezáró, azonos irányban forgó kettős kúpos henger fogja meg a darabot. A buga egyszerre forog és előrehalad: csavarvonalon mozog. A magban váltakozó csúsztatófeszültség lép fel, a közép felszakad, a tengelyben álló dugó pedig szabályos üreggé tágítja. Az eredmény vastag falú hüvely.",
  },
  {
    n: "04",
    title: "Nyújtás — pilger vagy mandrel",
    body: "A hüvelyt vékony falú, hosszú csővé kell nyújtani. A klasszikus út a pilgerhengerlés: periodikus, előre-hátra mozgás tüskén. A mai főirány a folyamatos mandrel-sor: 7–9 állvány, belül mandrelrúd, akár 400% nyúlás egy menetben. Régebbi, nagy átmérőkhöz plug mill is használatos.",
  },
  {
    n: "05",
    title: "Méretezés és nyújtva csökkentés",
    body: "A cső külső átmérőjét méretező soron (sizing mill), a falat és az átmérőt együtt stretch-reducing soron állítják be — belső szerszám nélkül, több kaliberes állványon. Itt korrigálják a falvastagság-egyenetlenséget is.",
  },
  {
    n: "06",
    title: "Kikészítés",
    body: "Hűtés, egyengetés, darabolás, végek megmunkálása, roncsolásmentes vizsgálat (ultrahang, örvényáram), hidraulikus nyomáspróba. A kész cső olaj- és gázvezetékbe, kazánba, gépgyártásba vagy szerkezetbe kerül.",
  },
] as const;

export const TUBE_WELDED_STEPS = [
  {
    n: "01",
    title: "Szalag előkészítése",
    body: "A varratos cső alapanyaga melegen vagy hidegen hengerelt szalag. A széleket tisztítják, a szalagot végtelenítik, hogy a sor folyamatosan járjon.",
  },
  {
    n: "02",
    title: "Fokozatos hajlítás",
    body: "Sorba állított, kaliberes hajlítóhengerek a sík szalagot fokozatosan nyitott csőszelvénnyé görbítik. A varrat vonala felül vagy oldalt fut, a szélek pontosan találkoznak.",
  },
  {
    n: "03",
    title: "Hegesztés",
    body: "ERW: nagyfrekvenciás ellenálláshegesztés — a széleket árammal izzítják, és összenyomják, hozaganyag nélkül. SAW / spirál: fedőporos hegesztés, gyakran spirálvarrattal, nagy átmérőkhöz. UOE: U-prés, O-prés, majd hegesztés és tágítás — vastag falú vezetékcsövekhez.",
  },
  {
    n: "04",
    title: "Varrat kidolgozása",
    body: "A belső és külső varratbordát lehúzzák, a varratot hőkezelhetik. A hegesztési varrat a cső legérzékenyebb vonala: roncsolásmentes vizsgálat kötelező.",
  },
  {
    n: "05",
    title: "Méretezés és vágás",
    body: "Méretező hengerek beállítják a külső átmérőt és a köralakot, majd a csövet hosszméretre vágják. Spirálcsőnél a szalag szélessége és a felcsavarás szöge határozza meg az átmérőt.",
  },
] as const;

export const MILL_TYPES = [
  {
    id: "duo",
    title: "Duó",
    kicker: "Két henger",
    body: "A legegyszerűbb állvány: két munkahenger, egymással szemben. Lehet egyirányú vagy reverzáló (a darab oda-vissza jár). Előnyújtó sorokon és kisebb műhelyekben ma is előfordul. Hátránya, hogy a vékony munkahenger hajlik, ezért a lemez közepén vastagabb marad.",
  },
  {
    id: "trio",
    title: "Trió / Lauth-trió",
    kicker: "Három henger",
    body: "Három henger egymás fölött. A darab hol a felső, hol az alsó résen halad — reverzálás motorirányváltás nélkül. A Lauth-trióban a középső henger kisebb átmérőjű, és gyakran szabadon fut. Régebbi durvalemez-sorok jellegzetes gépe.",
  },
  {
    id: "quarto",
    title: "Kvartó",
    kicker: "Két munka + két támhenger",
    body: "A modern lemezhengerlés alapképlete. A vékony, gyorsabban kopó munkahengerek végzik az alakítást, a vastag támhengerek (támasztóhengerek) megakadályozzák a hajlást. Így egyenletes vastagságú, széles szalag is hengerelhető. A készsorok és a hideghengerművek szinte mindig kvartó vagy még több hengeresek.",
  },
  {
    id: "cluster",
    title: "Sokhengeres / Sendzimir",
    kicker: "6–20 henger",
    body: "A munkahenger itt nagyon vékony: kis átmérő, nagy alakítási nyomás, vékony szalag és nehezen alakítható anyagok (rozsdamentes, szilíciumacél) számára. A támhengerek kaszkádja tartja. A 20 hengeres Sendzimir-állvány a hideg precíziós hengerlés klasszikusa.",
  },
] as const;

export const HOT_COLD = {
  hot: {
    title: "Meleghengerlés",
    temp: "1100–1250 °C",
    finish: "befejezés ≈ 800–900 °C",
    points: [
      "Az újrakristályosodási hőmérséklet fölött megy végbe: a fém nem keményedik fel tartósan.",
      "Kis alakítási ellenállás, nagy vastagságcsökkenés egy szúrásban.",
      "Felület: reve, durvább érdesség, kékesszürke-fekete hengerelt bőr.",
      "Jó képlékenység, könnyebb továbbalakítás. Vastag lemez, szalag, idomacél, sín.",
      "A hengerlés mindig ezzel kezdődik — hidegen a brammát nem lehet megfogni.",
    ],
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
      "Végvastagság akár 0,1 mm, fóliánál 0,007 mm. Tandem-sor vagy reverzáló kvartó.",
    ],
  },
} as const;

export const GLOSSARY = [
  {
    term: "Szúrás",
    def: "A darab egy áthaladása a hengerek között. Egy késztermékhez több szúrás kell.",
  },
  {
    term: "Nyújtási tényező (λ)",
    def: "A belépő és kilépő keresztmetszet hányadosa. λ = A1 / A2 = l2 / l1. Megmutatja, mennyire nyúlik a darab.",
  },
  {
    term: "Munkahenger",
    def: "Az a henger, amely közvetlenül érintkezik a darabbal, és végzi az alakítást.",
  },
  {
    term: "Támhenger",
    def: "Támasztóhenger: a munkahenger mögött áll, átveszi a hengerlési erőt, csökkenti a hajlást.",
  },
  {
    term: "Hengerállvány",
    def: "A hengereket, csapágyakat és a beállító szerkezetet tartó keret. Egy vagy több állvány alkotja a hengersort.",
  },
  {
    term: "Hengermű",
    def: "A teljes üzem: hengersor + kemence, hűtés, csévélés, kikészítés, hőkezelés.",
  },
  {
    term: "Reverzáló állvány",
    def: "A hengerek iránya vált: a darab oda-vissza jár ugyanazon az állványon.",
  },
  {
    term: "Tandem (folytatólagos) sor",
    def: "Több állvány egymás után, a darab egy irányban, egyre vékonyabban halad.",
  },
  {
    term: "Univerzál állvány",
    def: "Vízszintes munkahengerek + függőleges torlóhengerek: vastagság és szélesség együtt szabályozható.",
  },
  {
    term: "Bramma",
    def: "Folyamatosan öntött széles buga, a lemezhengerlés kiinduló darabja.",
  },
  {
    term: "Reve",
    def: "Magas hőmérsékleten növő oxidréteg a darab felületén. Hengerlés előtt el kell távolítani.",
  },
  {
    term: "Dresszírozás",
    def: "Apró, 0,5–2,5%-os hideg utánhengerlés: eltünteti a lágyítás utáni folyáshatár-fogat, beállítja az érdességet és a síkfekvést.",
  },
  {
    term: "Hüvely",
    def: "A lyukasztás után kapott vastag falú, rövid nyerscső, amit tovább kell nyújtani.",
  },
  {
    term: "Mandrel / tüske",
    def: "A cső belsejében haladó rúd vagy dugó, amely a belső átmérőt és a falvastagságot adja.",
  },
  {
    term: "Kaliber",
    def: "A hengerbe vágott üreg, amely a darab szelvényét formálja. Cső- és rúdhengerlésnél nélkülözhetetlen.",
  },
  {
    term: "Előresietés / hátramaradás",
    def: "A semleges vonal előtt a darab lassabb a henger kerületi sebességénél (hátramaradás), utána gyorsabb (előresietés).",
  },
] as const;

export const USES = [
  {
    title: "Járműipar",
    body: "Karosszérialemez, váz, kipufogócső — főként hidegen hengerelt, jól húzható acél.",
  },
  {
    title: "Építés és híd",
    body: "Durvalemez, gerinclemezek, csövek oszlopnak és vezetéknek.",
  },
  {
    title: "Energia",
    body: "Kazáncső, olaj- és gázvezeték, hőcserélő. Itt a varrat nélküli cső a biztonsági alap.",
  },
  {
    title: "Hajó és tartály",
    body: "Vastag táblalemez, nyomástartó edény. A keresztirányú szúrás a széles táblát adja.",
  },
  {
    title: "Gépgyártás",
    body: "Hidraulikus cső, precíziós hidegen húzott cső, kopásálló lemez.",
  },
  {
    title: "Csomagolás és háztartás",
    body: "Fehérlemez, háztartási gép lemeze, vékony szalag — hideghengerlés és bevonatolás.",
  },
] as const;

export const DEFECTS = [
  {
    title: "Élrepedés",
    body: "Túl nagy szélességcsökkenés vagy hideg él. A darab oldala szétnyílik.",
  },
  {
    title: "Hullámosság / kardosodás",
    body: "Egyenetlen nyújtás a szélesség mentén. A szalag nem fekszik síkba, vagy ívben fut.",
  },
  {
    title: "Revebenyomódás",
    body: "A henger a revét a felületbe nyomja. Előtte nem volt megfelelő a revétlenítés.",
  },
  {
    title: "Falvastagság-excentritás",
    body: "Csőnél a furat nem középen halad. Rossz központosítás vagy kopott dugó.",
  },
  {
    title: "Varrathiba",
    body: "Varratos csőnél hideghegedés, hiányos összeolvadás. Nyomáspróbán vagy ultrahangon derül ki.",
  },
  {
    title: "Kéregfolyás, rátapadás",
    body: "Túlmelegedett felület vagy elégtelen hűtés a hengeren. A palást „ráharap” a darabra.",
  },
] as const;
