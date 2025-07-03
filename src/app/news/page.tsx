"use client"

import { PageLayout } from "@/components/layout"
import { NewsFilters, NewsGrid, NewsHero } from "@/components/sections/news"
import { useState } from "react"

export default function NewsPage() {
	const [searchQuery, setSearchQuery] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("all")

	return (
		<PageLayout>
			<NewsHero />
			<NewsFilters
				onSearchChange={setSearchQuery}
				onCategoryChange={setSelectedCategory}
			/>
			<NewsGrid searchQuery={searchQuery} selectedCategory={selectedCategory} />
		</PageLayout>
	)
}
