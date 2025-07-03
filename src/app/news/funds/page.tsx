import { PageLayout } from "@/components/layout"
import Image from "next/image"
import Link from "next/link"

interface NewsDetailPageProps {
	params: { id: string }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
	// В реальном проекте здесь будет загрузка данных по ID
	const news = {
		id: params.id,
		title: "Новый закрытый паевой инвестиционный фонд запущен",
		content: "Полный текст новости...",
		date: "2025-01-15",
		category: "Фонды",
		image: "https://ext.same-assets.com/2648034400/1276335973.jpeg",
	}

	return (
		<PageLayout>
			<article className="pt-32 pb-16">
				<div className="container mx-auto px-4 max-w-4xl">
					{/* Хлебные крошки */}
					<nav className="mb-8">
						<Link href="/news" className="text-primary hover:underline">
							← Все новости
						</Link>
					</nav>

					{/* Заголовок */}
					<header className="mb-8">
						<div className="mb-4">
							<span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wide">
								{news.category}
							</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-thin mb-4 leading-tight">
							{news.title}
						</h1>
						<time className="text-muted-foreground">
							{new Date(news.date).toLocaleDateString("ru-RU", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
					</header>

					{/* Изображение */}
					{news.image && (
						<div className="relative h-96 mb-8 overflow-hidden rounded-sm">
							<Image
								src={news.image}
								alt={news.title}
								fill
								className="object-cover"
							/>
						</div>
					)}

					{/* Контент */}
					<div className="prose prose-lg max-w-none">
						<p>{news.content}</p>
					</div>
				</div>
			</article>
		</PageLayout>
	)
}
