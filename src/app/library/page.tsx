import { PageLayout } from "@/components/layout"
import { ContactSection } from "@/components/sections"

export default function LibraryPage() {
	return (
		<PageLayout>
			<section className="pt-32 pb-16 bg-muted/20">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-thin mb-6 tracking-wider uppercase">
						Инвестиционная библиотека
					</h1>
				</div>
			</section>
			<ContactSection />
		</PageLayout>
	)
}
