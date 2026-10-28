import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Factory, Boxes, Truck, Flame, Grid2X2, Hand, HardHat, Plus, FileText, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const advantages = [
  { icon: ShieldCheck, title: "Более 20 лет на рынке", text: "Большой опыт и проверенные решения" },
  { icon: Factory, title: "Собственное производство", text: "Высокое качество продукции и контроль" },
  { icon: Boxes, title: "Продуманный подход", text: "Индивидуальные решения для каждого проекта" },
  { icon: Truck, title: "Доставка и монтаж", text: "От производства до готового объекта" },
];
const services = [
  [Flame, "Производство и монтаж сэндвич-панелей"], [Flame, "Металлические водосточные системы"], [Grid2X2, "Декоративная фасадная облицовка"], [Hand, "Огнестойкая отделка"],
  [Hand, "Производство и применение профнастила"], [Boxes, "Металлические изделия для строительных задач"], [HardHat, "Производство строительных материалов"], [Truck, "Осуществляем поставки и монтаж"],
] as const;
const caseNames = ["Панели эконом — Pixel", "Панели эконом плюс — Econom", "Панели эконом — Econom Loft", "Панели Practic — НРЛ пластик", "Панели с натуральным шпоном — Elite", "Панели с HPL пластиком — Интерпан", "Декоративный профиль для панелей", "Отбойная доска — Design", "Потолочные панели — INTERPAN Mercury", "Фасадные и цокольные панели", "Панели антивандальные — Karma", "Оплата без переплат"];
const news = [
  { title: "Открытие представительства в Крыму", date: "24.09.2026", cls: "news-castle", text: "Мы расширяем географию присутствия и становимся ближе к нашим партнёрам." },
  { title: "Строительная выставка ОСМ 2026", date: "18.09.2026", cls: "news-show", text: "Встречаемся с партнёрами и представляем новые решения." },
  { title: "Выставка в Москве ОСМ 2026", date: "10.09.2026", cls: "news-fair", text: "Рассказываем о новинках и делимся опытом." },
];
export default function Home() {
 return <main id="top"><SiteHeader />
  <div className="page-wrap">
   <section className="hero-grid" aria-label="Главные предложения">
    <div className="hero-main"><div className="hero-copy"><span className="eyebrow">Интерпан · материалы для интерьера</span><h1>Декоративная<br/>фактура Pixel</h1><p>Панели с выразительной текстурой для современных интерьеров и общественных пространств.</p><Link href="#catalog" className="text-link">Подробнее <ChevronRight size={13}/></Link></div><div className="hero-dots"><button aria-label="Предыдущий слайд"><ArrowLeft size={14}/></button><button aria-label="Следующий слайд"><ArrowRight size={14}/></button></div></div>
    <div className="hero-side"><Link href="#catalog" className="promo promo-orange"><span className="promo-tag">Новинка</span><b>Фасадные решения<br/>для вашего объекта</b><span className="promo-circle">%</span></Link><Link href="#catalog" className="promo promo-dark"><span className="promo-tag">Каталог продукции</span><b>Стеновые панели<br/>и комплектующие</b><span className="calc-icon">▦</span></Link></div>
   </section>
   <section className="advantages">{advantages.map(({icon: Icon,title,text}) => <div className="advantage" key={title}><Icon size={26} strokeWidth={1.5}/><div><b>{title}</b><p>{text}</p></div></div>)}</section>
   <section className="solutions" id="catalog"><div className="solutions-copy"><h2>Интерпан — комплексные<br/>решения для вашего бизнеса</h2><p>Подбираем материалы и технологии под задачи вашего объекта. От идеи до реализации — с вниманием к каждой детали.</p><div className="actions"><Link href="#about" className="pill-button">О компании</Link><Link href="#cases" className="pill-button outline">Каталог</Link></div></div><div className="building"><div className="building-roof"/><div className="building-front"><span/><span/><span/></div><div className="building-side"><span/><span/></div>{[[40,22],[55,38],[23,53],[76,47],[62,67],[34,70]].map(([x,y],i)=><span key={i} className="building-plus" style={{left:`${x}%`,top:`${y}%`}}><Plus size={15}/></span>)}</div></section>
  </div>
  <section className="about-section" id="about"><div className="about-inner"><div className="about-copy"><h2>О компании</h2><p>Знания и производственные возможности позволяют нам создавать качественные материалы для строительной отрасли. Мы работаем с 2004 года и постоянно развиваемся, чтобы отвечать на запросы рынка.</p><p>Благодаря разнообразию продукции и комплексному подходу мы помогаем реализовать проекты разного масштаба — от небольших помещений до крупных коммерческих объектов.</p></div><div className="service-grid">{services.map(([Icon,title],i)=><div className="service" key={title}><Icon size={25} strokeWidth={1.5}/><p>{title}</p><span>0{i+1}</span></div>)}</div></div></section>
  <section className="downloads"><div><h2>Посмотрите презентации<br/>о наших продуктах</h2><p>Каталоги и техническая информация</p></div><Link href="#catalog"><FileText size={26}/><span>Стеновые панели<br/>Интерпан <small>PDF · 4.8 МБ</small></span></Link><Link href="#catalog"><FileText size={26}/><span>Потолочные панели<br/>Интерпан <small>PDF · 3.2 МБ</small></span></Link></section>
  <section className="content-section cases-section" id="cases"><div className="section-top"><h2>Кейсы Интерпан</h2><div className="round-arrows"><button aria-label="Назад"><ArrowLeft size={14}/></button><button aria-label="Вперёд"><ArrowRight size={14}/></button></div></div><div className="cases-layout"><ul className="case-list">{caseNames.map((name,i)=><li key={name}><a href="#contact">{name}</a></li>)}</ul><div className="case-tiles"><div className="case-tile tile-one"><span>PIXEL</span></div><div className="case-tile tile-two"><span>ECON</span></div><div className="case-tile tile-three"><span>ELITE</span></div><div className="case-tile tile-four"><span>DESIGN</span></div></div></div></section>
  <section className="content-section news-section" id="news"><div className="section-top"><h2>Новости компании</h2><Link href="#contact" className="more-link">Все новости <ChevronRight size={14}/></Link></div><div className="news-grid">{news.map(item=><article className="news-card" key={item.title}><div className={`news-image ${item.cls}`}><span>{item.cls === "news-castle" ? "КРЫМ" : item.cls === "news-show" ? "INTERPAN EXPO" : "ОСМ 2026"}</span></div><div className="news-info"><h3>{item.title}</h3><p>{item.text}</p><time>{item.date}</time></div></article>)}</div></section>
  <section className="trust-section"><div className="section-top"><h2>Нам доверяют</h2><div className="round-arrows"><button aria-label="Назад"><ArrowLeft size={14}/></button><button aria-label="Вперёд"><ArrowRight size={14}/></button></div></div><div className="logos"><span className="volmix">VOLMIX<small>СТРОИТЕЛЬНЫЕ СМЕСИ</small></span><span className="gefest">◈ GEFEST</span><span className="x5">❯ X5<small>RETAIL GROUP</small></span><span className="dixy">● ДИКСИ</span><span className="petro">◉ ПЕТРОСТРОЙ</span></div></section>
  <SiteFooter />
 </main>;
}
