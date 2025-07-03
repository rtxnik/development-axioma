import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import Link from "next/link"

export function Header() {
	return (
		<header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/50">
			<div className="container mx-auto px-4">
				<nav className="flex items-center justify-between h-20">
					<Link href="/" className="flex items-center space-x-3">
						<Logo className="h-10 w-10 text-primary" />
						<span className="text-base font-normal tracking-widest uppercase">
							Аксиома Капитал
						</span>
					</Link>

					<ul className="hidden md:flex items-center space-x-10 text-sm">
						<li>
							<Link
								href="/about"
								className="hover:text-primary transition-colors tracking-wide"
							>
								О компании
							</Link>
						</li>
						<li>
							<Link
								href="/library"
								className="hover:text-primary transition-colors tracking-wide"
							>
								Инвестиционная библиотека
							</Link>
						</li>
						<li>
							<Link
								href="/news"
								className="hover:text-primary transition-colors tracking-wide"
							>
								Новости
							</Link>
						</li>
						<li>
							<Link
								href="/funds"
								className="hover:text-primary transition-colors tracking-wide"
							>
								Фонды
							</Link>
						</li>
						<li>
							<Link
								href="/info"
								className="hover:text-primary transition-colors tracking-wide"
							>
								Раскрытие информации
							</Link>
						</li>
					</ul>

					<MobileMenu />
				</nav>
			</div>
		</header>
	)
}
