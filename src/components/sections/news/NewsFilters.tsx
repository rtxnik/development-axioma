"use client"

import { SearchInput } from "@/components/ui"
import { useState } from "react"

interface NewsFiltersProps {
	onSearchChange: (search: string) => void
	onCategoryChange: (category: string) => void
}

export function NewsFilters({
	onSearchChange,
	onCategoryChange,
}: NewsFiltersProps) {
	const [activeCategory, setActiveCategory] = useState("all")

	const categories = [
		{ id: "all", label: "Все новости" },
		{ id: "funds", label: "Фонды" },
		{ id: "market", label: "Рынок" },
		{ id: "regulation", label: "Регулирование" },
		{ id: "company", label: "Компания" },
	]

	const handleCategoryClick = (categoryId: string) => {
		setActiveCategory(categoryId)
		onCategoryChange(categoryId)
	}

	return (
		<section className="py-8 border-b border-border">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
					{/* Поиск */}
					<div className="w-full lg:w-96">
						<SearchInput
							placeholder="Поиск новостей..."
							onChange={onSearchChange}
						/>
					</div>

					{/* Категории */}
					<div className="flex flex-wrap gap-2">
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => handleCategoryClick(category.id)}
								className={`px-4 py-2 text-sm rounded-sm transition-colors ${
									activeCategory === category.id
										? "bg-primary text-primary-foreground"
										: "bg-muted text-muted-foreground hover:bg-muted/80"
								}`}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
