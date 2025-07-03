import Image from "next/image"

interface ServiceCardProps {
	title: string
	description: string
	imageSrc: string
	imageAlt: string
}

export function ServiceCard({
	title,
	description,
	imageSrc,
	imageAlt,
}: ServiceCardProps) {
	return (
		<div className="group border border-border rounded-sm p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
			<h3 className="text-lg font-normal mb-6 uppercase tracking-wider leading-tight">
				{title}
			</h3>
			<p className="text-sm text-muted-foreground mb-8 leading-relaxed">
				{description}
			</p>
			<div className="h-48 relative mb-4 overflow-hidden">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-contain group-hover:scale-110 transition-transform duration-300"
				/>
			</div>
		</div>
	)
}
