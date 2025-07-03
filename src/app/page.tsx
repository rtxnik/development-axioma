import { PageLayout } from "@/components/layout"
import {
	AboutSection,
	ContactSection,
	HeroSection,
	SchemeSection,
	ServicesSection,
} from "@/components/sections"

export default function Home() {
	return (
		<PageLayout>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<SchemeSection />
			<ContactSection />
		</PageLayout>
	)
}
