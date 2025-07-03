interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const getVisiblePages = () => {
		const delta = 2
		const range = []
		const rangeWithDots = []

		for (
			let i = Math.max(2, currentPage - delta);
			i <= Math.min(totalPages - 1, currentPage + delta);
			i++
		) {
			range.push(i)
		}

		if (currentPage - delta > 2) {
			rangeWithDots.push(1, "...")
		} else {
			rangeWithDots.push(1)
		}

		rangeWithDots.push(...range)

		if (currentPage + delta < totalPages - 1) {
			rangeWithDots.push("...", totalPages)
		} else {
			rangeWithDots.push(totalPages)
		}

		return rangeWithDots
	}

	if (totalPages <= 1) return null

	return (
		<nav className="flex justify-center">
			<div className="flex items-center space-x-2">
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-3 py-2 text-sm border border-border rounded-sm hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
				>
					←
				</button>

				{getVisiblePages().map((page, index) => (
					<button
						key={index}
						onClick={() => typeof page === "number" && onPageChange(page)}
						disabled={page === "..."}
						className={`px-3 py-2 text-sm border rounded-sm ${
							page === currentPage
								? "bg-primary text-primary-foreground border-primary"
								: "border-border hover:bg-muted"
						} ${page === "..." ? "cursor-default" : ""}`}
					>
						{page}
					</button>
				))}

				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-3 py-2 text-sm border border-border rounded-sm hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
				>
					→
				</button>
			</div>
		</nav>
	)
}
