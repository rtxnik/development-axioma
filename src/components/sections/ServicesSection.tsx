import { ServiceCard } from "@/components/ui/ServiceCard"

const services = [
	{
		title: "Структурирование сделок с непрофильными активами",
		description:
			"Для владельцев залоговых активов, имущества дефолтных заемщиков, портфелей разнородных активов, земельных участков и зданий вне фокуса, объектов, не приносящих прибыли",
		imageSrc: "https://ext.same-assets.com/2648034400/3859537143.webp",
		imageAlt: "Service 1",
	},
	{
		title: "M&A и проектное финансирование",
		description:
			"Для собственников бизнеса, стартапов и IT-компаний, застройщиков и девелоперов, энергетических и инфраструктурных проектов",
		imageSrc: "https://ext.same-assets.com/2648034400/952703600.webp",
		imageAlt: "Service 2",
	},
	{
		title: "Финансирование (факторинг)",
		description: "Для финансирования экспортеров, поставщиков и покупателей",
		imageSrc: "https://ext.same-assets.com/2648034400/3079586106.webp",
		imageAlt: "Service 3",
	},
]

export function ServicesSection() {
	return (
		<section className="py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							description={service.description}
							imageSrc={service.imageSrc}
							imageAlt={service.imageAlt}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
