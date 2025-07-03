"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "О компании" },
    { href: "#library", label: "Инвестиционная библиотека" },
    { href: "#news", label: "Новости" },
    { href: "#funds", label: "Фонды" },
    { href: "#info", label: "Раскрытие информации" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex items-center space-x-3 mb-8">
          <Logo className="h-10 w-10 text-primary" />
          <span className="text-base font-normal tracking-widest uppercase">Аксиома Капитал</span>
        </div>
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide hover:text-primary transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
