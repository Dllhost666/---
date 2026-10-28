import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
export function SiteFooter() {
  return <footer id="contact" className="footer">
    <div className="contact-band"><div><h2>У вас есть проект для нас или<br/> необходима консультация?</h2><p>Мы с удовольствием ответим на ваши вопросы</p></div><form action="#contact"><label>Ваше имя<input aria-label="Ваше имя" placeholder="Как к вам обращаться?" /></label><label>Телефон<input aria-label="Телефон" placeholder="+7 (___) ___-__-__" /></label><button type="submit">Отправить</button></form></div>
    <div className="footer-bottom"><div className="footer-brand"><Link href="#top" className="brand"><span className="brand-mark">И</span><span><b>ИНТЕРПАН</b><small>СТЕНОВЫЕ И ФАСАДНЫЕ СИСТЕМЫ</small></span></Link><p>Комплексные решения для строительства и отделки. Материалы, которым доверяют профессионалы.</p></div><div><b>Меню</b><a href="#catalog">Каталог</a><a href="#about">О компании</a><a href="#cases">Наши проекты</a><a href="#news">Новости</a><a href="#contact">Контакты</a></div><div><b>Связаться с нами</b><span><Phone size={12}/> +7 (495) 730-55-01</span><span><Mail size={12}/> info@interpan.ru</span><p className="footer-social"><Facebook size={15}/><Instagram size={15}/><Youtube size={15}/></p></div></div>
  </footer>;
}
