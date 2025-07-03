import { Footer } from "./Footer"
import { Header } from "./Header"

interface PageLayoutProps {
	children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
