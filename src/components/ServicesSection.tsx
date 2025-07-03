import Image from "next/image"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "СТРУКТУРИРОВАНИЕ СДЕЛОК С НЕПРОФИЛЬНЫМИ АКТИВАМИ",
    description: "Для владельцев заложных активов, имущества дефолтных заемщиков, портфелей разнородных активов, земельных участков и зданий вне фокуса, объектов, не приносящих прибыли",
    image: "https://ext.same-assets.com/2648034400/293622853.png",
  },
  {
    title: "M&A и ПРОЕКТНОЕ ФИНАНСИРОВАНИЕ",
    description: "Для собственников бизнеса, стартапов и IT-компаний, застройщиков и девелоперов, энергетических и инфраструктурных проектов",
    image: "https://ext.same-assets.com/2648034400/96725847.png",
  },
  {
    title: "ФИНАНСИРОВАНИЕ (ФАКТОРИНГ)",
    description: "Для финансирования экспортных поставщиков и покупателей",
    image: "https://ext.same-assets.com/2648034400/3455482008.png",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#141415]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border-white/10 hover:from-white/[0.12] hover:to-white/[0.05] hover:border-white/20 transition-all duration-500 p-8 h-[450px] flex flex-col cursor-pointer"
            >
              {/* Abstract 3D graphic */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-lg font-normal mb-8 uppercase tracking-wider leading-relaxed">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
