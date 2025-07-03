import Image from "next/image"
import Link from "next/link"

export default function CompanyIntro() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0a0b] to-[#141415]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logo and company name */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-16">
                <Image
                  src="https://ext.same-assets.com/2648034400/3084826496.svg"
                  alt="Logo icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-light tracking-wider">
                АКСИОМА КАПИТАЛ
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm uppercase tracking-wide">
              Управляющая компания
            </p>

            <div className="space-y-6 text-gray-300">
              <p>
                Осуществляет доверительное управление индивидуальными
                закрытыми паевыми инвестиционными фондами. ЗПИФ
                обеспечивают защиту интересов пайщиков и высокий{" "}
                <Link href="#" className="text-white underline hover:no-underline">
                  уровень безопасности
                </Link>{" "}
                активов
              </p>

              <Link
                href="#more"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <span className="mr-2">ПОДРОБНЕЕ</span>
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0a0a0b]/30" />
            <Image
              src="https://ext.same-assets.com/2648034400/4062970866.jpeg"
              alt="Axioma Capital Building"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
