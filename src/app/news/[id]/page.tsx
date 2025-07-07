import { PageLayout } from "@/components/layout"
import Image from "next/image"
import Link from "next/link"

interface NewsDetailPageProps {
	params: Promise<{ id: string }>
}

// Генерируем статические параметры для экспорта
export async function generateStaticParams() {
	// Список всех ID новостей, которые нужно сгенерировать статически
	// В реальном проекте это может быть получено из API или базы данных
	const newsIds = ["1", "2", "3"]

	return newsIds.map(id => ({
		id: id,
	}))
}

// Тип для данных новости
interface NewsData {
	id: string
	title: string
	content: string
	date: string
	category: string
	image?: string
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
	// Ожидаем получения параметров
	const { id } = await params

	// Моковые данные новостей
	const newsData: Record<string, NewsData> = {
		"1": {
			id: "1",
			title: "Новый закрытый паевой инвестиционный фонд запущен",
			content:
				"Управляющая компания «Аксиома Капитал» объявляет о запуске нового ЗПИФ, ориентированного на инвестиции в коммерческую недвижимость. Фонд предназначен для квалифицированных инвесторов и предполагает долгосрочные вложения.",
			date: "2025-01-15",
			category: "Фонды",
			image: "https://ext.same-assets.com/2648034400/1276335973.jpeg",
		},
		"2": {
			id: "2",
			title: "Изменения в регулировании паевых фондов",
			content:
				"Банк России внес изменения в требования к управляющим компаниям паевых инвестиционных фондов. Новые правила вступают в силу с 1 февраля 2025 года.",
			date: "2025-01-10",
			category: "Регулирование",
			image: "https://ext.same-assets.com/2648034400/3491124997.png",
		},
		"3": {
			id: "3",
			title: "Результаты работы за IV квартал 2024 года",
			content:
				"Подведены итоги деятельности управляющей компании за последний квартал 2024 года. Показатели превысили плановые значения.",
			date: "2025-01-05",
			category: "Компания",
		},
	}

	// Получаем данные новости или устанавливаем значения по умолчанию
	const news = newsData[id] || {
		id: id,
		title: "Новость не найдена",
		content: "Запрашиваемая новость не найдена.",
		date: "2025-01-15",
		category: "Общие",
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
