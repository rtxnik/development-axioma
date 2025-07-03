import Link from "next/link"

export function SchemeSection() {
	return (
		<section className="py-32 bg-muted/20">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-widest uppercase">
					Простая схема
				</h2>
				<h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">
					взаимодействия
				</h3>
				<h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">
					участников
				</h3>
				<h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">
					управляющей
				</h3>
				<h3 className="text-3xl md:text-4xl font-thin mb-20 tracking-widest uppercase">
					компании
				</h3>

				<Link
					href="#"
					className="inline-block px-10 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
				>
					Подробнее
				</Link>
			</div>
		</section>
	)
}
