import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Logo and company info */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-12">
              <Image
                src="https://ext.same-assets.com/2648034400/460540093.png"
                alt="Аксиома Капитал"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">УПРАВЛЯЮЩАЯ КОМПАНИЯ</p>
        </div>

        {/* Company description */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-700">
            Общество с ограниченной ответственностью
            <br />
            Управляющая компания «Аксиома Капитал»
            <br />
            ООО УК «Аксиома Капитал»
          </p>
        </div>

        {/* Contact information */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-2">Телефон:</h4>
            <Link href="tel:+74959703757" className="text-gray-600 hover:text-gray-800">
              +7 (495) 970-37-57
            </Link>
            <br />
            <Link href="mailto:info@axiomacapital.ru" className="text-gray-600 hover:text-gray-800">
              info@axiomacapital.ru
            </Link>
          </div>

          <div>
            <h4 className="font-medium mb-2">Юридический адрес:</h4>
            <p className="text-sm text-gray-600">
              143084, Московская область, г.о. Одинцовский, с. Усово, стр. 100, часть помещ. 10
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Трудоустройство:</h4>
            <Link href="tel:+74959703757" className="text-gray-600 hover:text-gray-800">
              +7 (495) 970-37-57
            </Link>
            <br />
            <Link href="mailto:info@axiomacapital.ru" className="text-gray-600 hover:text-gray-800">
              info@axiomacapital.ru
            </Link>
          </div>

          <div>
            <h4 className="font-medium mb-2">Трудоустройство:</h4>
            <Link href="tel:+74959703757" className="text-gray-600 hover:text-gray-800">
              +7 (495) 970-37-57
            </Link>
            <br />
            <Link href="mailto:info@axiomacapital.ru" className="text-gray-600 hover:text-gray-800">
              info@axiomacapital.ru
            </Link>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t pt-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            Общество с ограниченной ответственностью Управляющая компания «Аксиома Капитал» действует на основании лицензии, выданной Банком России
            23.05.2024 г. № 21-000-1-01104, на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными фондами и
            негосударственными пенсионными фондами, без ограничения срока действия (Решение Банка России от 23.05.2024 № Р5-14/682). Деятельность ООО УК
            «Аксиома Капитал» по управлению инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами не
            совмещается с профессиональной деятельностью по доверительному управлению ценными бумагами. В связи с этим отсутствует риск возникновения конфликта
            интересов при совмещении указанных видов деятельности.
          </p>

          <p className="text-xs text-gray-500 leading-relaxed mt-4">
            Московская область, г.о. Одинцовский, с. Усово, стр. 100, часть помещ. 10, по телефону +7 (495) 970-37-57, а также по адресу страницы в сети Интернет
            https://axiomacapital.ru/
          </p>

          <p className="text-xs text-gray-500 leading-relaxed mt-4">
            ООО УК «Аксиома Капитал» уведомляет, что стоимость инвестиционных паев может увеличиваться и уменьшаться, результаты инвестирования в прошлом не
            определяют доходы в будущем, государство не гарантирует доходность инвестиций в паевые инвестиционные фонды. Прежде чем приобрести инвестиционный
            пай, следует внимательно ознакомиться с правилами доверительного управления паевым инвестиционным фондом.
          </p>
        </div>

        {/* Made on Tilda */}
        <div className="text-center mt-8">
          <Link href="https://tilda.cc/" className="text-xs text-gray-400 hover:text-gray-600">
            Made on <span className="font-medium">Tilda</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
