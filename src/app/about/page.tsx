import { PageLayout } from "@/components/layout"
import { AboutSection, ContactSection } from "@/components/sections"

export default function AboutPage() {
	return (
		<PageLayout>
			<section className="pt-32 pb-16 bg-muted/20">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-thin mb-6 tracking-wider uppercase">
						О компании
					</h1>
				</div>
			</section>
			<AboutSection />
			<ContactSection />
		</PageLayout>
	)
}
