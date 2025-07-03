import { Logo } from "@/components/Logo"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
	return (
		<section id="about" className="py-24 bg-muted/20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div>
						<div className="mb-10">
							<Logo className="h-16 w-16 text-primary" />
						</div>
						<p className="text-lg leading-relaxed text-muted-foreground mb-8">
							Осуществляет доверительное управление индивидуальными закрытыми
							паевыми инвестиционными фондами. ЗПИФ обеспечивают защиту
							интересов бенефициаров и высокий уровень безопасности активов.
						</p>
						<Link
							href="#"
							className="inline-flex items-center text-primary hover:underline text-sm uppercase tracking-widest"
						>
							Подробнее
							<span className="ml-2">→</span>
						</Link>
					</div>
					<div className="relative h-[500px]">
						<Image
							src="https://ext.same-assets.com/2648034400/3491124997.png"
							alt="Modern building"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
