import { Logo } from "@/components/Logo"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75 z-10" />
				<Image
					src="https://ext.same-assets.com/2648034400/1276335973.jpeg"
					alt="Financial charts background"
					fill
					className="object-cover"
					priority
				/>
			</div>

			<div className="container mx-auto px-4 relative z-20 py-32">
				<div className="max-w-5xl">
					<div className="mb-12">
						<Logo className="h-24 w-24 md:h-32 md:w-32 text-primary" />
					</div>
					<h1 className="text-5xl md:text-7xl font-thin mb-6 tracking-wider uppercase">
						Аксиома Капитал
					</h1>
					<h2 className="text-2xl md:text-3xl font-thin text-muted-foreground mb-12 tracking-widest uppercase">
						Управляющая компания
					</h2>
					<p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
						Осуществляет доверительное управление индивидуальными закрытыми
						паевыми инвестиционными фондами. ЗПИФ обеспечивают защиту интересов
						бенефициаров и высокий уровень безопасности активов.
					</p>
					<Link
						href="#contact"
						className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
					>
						Подробнее
					</Link>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<svg
					className="w-6 h-6 animate-bounce text-muted-foreground"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	)
}
