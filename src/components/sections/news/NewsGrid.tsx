"use client"

import { NewsCard, Pagination } from "@/components/ui"
import { useEffect, useState } from "react"

// Моковые данные (замените на реальные)
const mockNews = [
	{
		id: "1",
		title: "Новый закрытый паевой инвестиционный фонд запущен",
		excerpt:
			"Управляющая компания «Аксиома Капитал» объявляет о запуске нового ЗПИФ, ориентированного на инвестиции в коммерческую недвижимость.",
		date: "2025-01-15",
		category: "Фонды",
		image: "https://ext.same-assets.com/2648034400/1276335973.jpeg",
		featured: true,
	},
	{
		id: "2",
		title: "Изменения в регулировании паевых фондов",
		excerpt:
			"Банк России внес изменения в требования к управляющим компаниям паевых инвестиционных фондов.",
		date: "2025-01-10",
		category: "Регулирование",
		image: "https://ext.same-assets.com/2648034400/3491124997.png",
	},
	{
		id: "3",
		title: "Результаты работы за IV квартал 2024 года",
		excerpt:
			"Подведены итоги деятельности управляющей компании за последний квартал 2024 года.",
		date: "2025-01-05",
		category: "Компания",
	},
]

interface NewsGridProps {
	searchQuery: string
	selectedCategory: string
}

export function NewsGrid({ searchQuery, selectedCategory }: NewsGridProps) {
	const [filteredNews, setFilteredNews] = useState(mockNews)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 6

	useEffect(() => {
		let filtered = mockNews

		// Фильтр по категории
		if (selectedCategory !== "all") {
			filtered = filtered.filter(
				news => news.category.toLowerCase() === selectedCategory
			)
		}

		// Поиск
		if (searchQuery) {
			filtered = filtered.filter(
				news =>
					news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
			)
		}

		setFilteredNews(filtered)
		setCurrentPage(1)
	}, [searchQuery, selectedCategory])

	const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const displayedNews = filteredNews.slice(
		startIndex,
		startIndex + itemsPerPage
	)

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				{filteredNews.length === 0 ? (
					<div className="text-center py-16">
						<p className="text-lg text-muted-foreground">Новости не найдены</p>
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
							{displayedNews.map(news => (
								<NewsCard key={news.id} {...news} />
							))}
						</div>

						{totalPages > 1 && (
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						)}
					</>
				)}
			</div>
		</section>
	)
}
