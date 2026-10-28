import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Интерпан — решения для вашего бизнеса", description: "Стеновые панели, фасадные системы и комплексные решения для строительства." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
