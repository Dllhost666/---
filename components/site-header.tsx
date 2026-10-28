import Link from "next/link";
import { Search, Phone, Mail } from "lucide-react";

const links = ["Главная", "Каталог", "Технологии монтажа", "Прайс", "Кейсы", "Контакты"];
export function SiteHeader() {
  return <header className="site-header" id="top">
    <div className="topline"><span><Mail size={11}/> info@interpan.ru</span><span><Phone size={11}/> +7 (495) 730-55-01</span><a href="#contact">Оставить заявку</a><span className="social-mini">●　●　●</span></div>
    <div className="navline"><Link href="#top" className="brand"><span className="brand-mark">И</span><span><b>ИНТЕРПАН</b><small>СТЕНОВЫЕ И ФАСАДНЫЕ СИСТЕМЫ</small></span></Link><nav>{links.map((item, i) => <a key={item} href={i === 0 ? "#top" : i === 1 ? "#catalog" : i === 4 ? "#cases" : i === 5 ? "#contact" : "#about"}>{item}</a>)}<Search size={13}/></nav></div>
  </header>;
}
