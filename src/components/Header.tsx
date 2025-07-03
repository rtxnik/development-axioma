"use client"

import Link from "next/link"
import Image from "next/image"

const navItems = [
  { label: "О компании", href: "#about" },
  { label: "Инвестиционная библиотека", href: "#library" },
  { label: "Новости", href: "#news" },
  { label: "Фонды", href: "#funds" },
  { label: "Раскрытие информации", href: "#disclosure" },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-32 h-10">
              <Image
                src="https://ext.same-assets.com/2648034400/460540093.png"
                alt="Аксиома Капитал"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
