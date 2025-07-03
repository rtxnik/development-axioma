import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
	id: string
	title: string
	excerpt: string
	date: string
	category: string
	image?: string
	featured?: boolean
}

export function NewsCard({
	id,
	title,
	excerpt,
	date,
	category,
	image,
	featured = false,
}: NewsCardProps) {
	return (
		<article
			className={`group border border-border rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 ${
				featured ? "lg:col-span-2 lg:row-span-2" : ""
			}`}
		>
			{image && (
				<div
					className={`relative overflow-hidden ${
						featured ? "h-64 lg:h-80" : "h-48"
					}`}
				>
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					<div className="absolute top-4 left-4">
						<span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wide">
							{category}
						</span>
					</div>
				</div>
			)}

			<div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
				<time className="text-sm text-muted-foreground mb-3 block">
					{new Date(date).toLocaleDateString("ru-RU", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</time>

				<h3
					className={`font-normal mb-3 leading-tight ${
						featured ? "text-xl lg:text-2xl" : "text-lg"
					}`}
				>
					<Link
						href={`/news/${id}`}
						className="hover:text-primary transition-colors"
					>
						{title}
					</Link>
				</h3>

				<p className="text-muted-foreground text-sm leading-relaxed mb-4">
					{excerpt}
				</p>

				<Link
					href={`/news/${id}`}
					className="inline-flex items-center text-primary hover:underline text-sm uppercase tracking-wide"
				>
					Читать далее
					<span className="ml-2">→</span>
				</Link>
			</div>
		</article>
	)
}
