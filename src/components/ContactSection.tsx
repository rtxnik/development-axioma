"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative py-24 bg-[#0a0a0b] overflow-hidden">
      {/* Large text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.8] text-center whitespace-pre-line opacity-[0.03] select-none">
          {`ТИПОВАЯ СХЕМА
ВЗАИМОСВЯЗИ
УЧАСТНИКОВ`}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header button */}
          <Button
            variant="outline"
            className="mb-12 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all"
          >
            ПОДРОБНЕЕ
          </Button>

          {/* Form title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 uppercase tracking-wider leading-tight">
            Подать заявку
            <br />
            на консультацию
          </h2>

          <p className="text-gray-400 mb-12 text-lg">
            Заполните форму и мы свяжемся с Вами
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/[0.05] border-white/20 text-white placeholder:text-gray-500 h-14 text-base hover:bg-white/[0.08] focus:bg-white/[0.08] transition-colors"
              required
            />

            <div className="relative">
              <Input
                type="tel"
                name="phone"
                placeholder="+1 (999) 999-9999"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/[0.05] border-white/20 text-white placeholder:text-gray-500 h-14 pl-14 text-base hover:bg-white/[0.08] focus:bg-white/[0.08] transition-colors"
                required
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-lg">
                🇺🇸
              </div>
            </div>

            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/[0.05] border-white/20 text-white placeholder:text-gray-500 h-14 text-base hover:bg-white/[0.08] focus:bg-white/[0.08] transition-colors"
              required
            />

            <Button
              type="submit"
              className="w-full h-14 bg-[#d73630] hover:bg-[#c02b25] text-white font-normal text-base uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,54,48,0.3)]"
            >
              Отправить
            </Button>
          </form>

          {/* Footer text */}
          <p className="mt-12 text-gray-500 text-sm uppercase tracking-wider">
            УК "АКСИОМА КАПИТАЛ"
          </p>
        </div>
      </div>
    </section>
  )
}
