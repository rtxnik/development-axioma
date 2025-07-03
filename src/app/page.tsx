import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-base font-normal tracking-widest uppercase">Аксиома Капитал</span>
            </Link>

            <ul className="hidden md:flex items-center space-x-10 text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors tracking-wide">О компании</Link></li>
              <li><Link href="#library" className="hover:text-primary transition-colors tracking-wide">Инвестиционная библиотека</Link></li>
              <li><Link href="#news" className="hover:text-primary transition-colors tracking-wide">Новости</Link></li>
              <li><Link href="#funds" className="hover:text-primary transition-colors tracking-wide">Фонды</Link></li>
              <li><Link href="#info" className="hover:text-primary transition-colors tracking-wide">Раскрытие информации</Link></li>
            </ul>

            <MobileMenu />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75 z-10" />
          <Image
            src="https://ext.same-assets.com/2648034400/1276335973.jpeg"
            alt="Financial charts background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 py-32">
          <div className="max-w-5xl">
            <div className="mb-12">
              <Logo className="h-24 w-24 md:h-32 md:w-32 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-thin mb-6 tracking-wider uppercase">
              Аксиома Капитал
            </h1>
            <h2 className="text-2xl md:text-3xl font-thin text-muted-foreground mb-12 tracking-widest uppercase">
              Управляющая компания
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              Осуществляет доверительное управление индивидуальными закрытыми паевыми инвестиционными фондами.
              ЗПИФ обеспечивают защиту интересов бенефициаров и высокий уровень безопасности активов.
            </p>
            <Link
              href="#contact"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Подробнее
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-6 h-6 animate-bounce text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-10">
                <Logo className="h-16 w-16 text-primary" />
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Осуществляет доверительное управление индивидуальными закрытыми паевыми инвестиционными фондами. ЗПИФ
                обеспечивают защиту интересов бенефициаров и высокий уровень безопасности активов.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:underline text-sm uppercase tracking-widest"
              >
                Подробнее
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://ext.same-assets.com/2648034400/3491124997.png"
                alt="Modern building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group border border-border rounded-sm p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-normal mb-6 uppercase tracking-wider leading-tight">
                Структурирование сделок с непрофильными активами
              </h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Для владельцев залоговых активов, имущества дефолтных заемщиков, портфелей разнородных активов,
                земельных участков и зданий вне фокуса, объектов, не приносящих прибыли
              </p>
              <div className="h-48 relative mb-4 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/2648034400/3859537143.webp"
                  alt="Service 1"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group border border-border rounded-sm p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-normal mb-6 uppercase tracking-wider leading-tight">
                M&A и проектное финансирование
              </h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Для собственников бизнеса, стартапов и IT-компаний, застройщиков и девелоперов, энергетических
                и инфраструктурных проектов
              </p>
              <div className="h-48 relative mb-4 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/2648034400/952703600.webp"
                  alt="Service 2"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group border border-border rounded-sm p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-normal mb-6 uppercase tracking-wider leading-tight">
                Финансирование (факторинг)
              </h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Для финансирования экспортеров, поставщиков и покупателей
              </p>
              <div className="h-48 relative mb-4 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/2648034400/3079586106.webp"
                  alt="Service 3"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Section */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-widest uppercase">Простая схема</h2>
          <h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">взаимодействия</h3>
          <h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">участников</h3>
          <h3 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">управляющей</h3>
          <h3 className="text-3xl md:text-4xl font-thin mb-20 tracking-widest uppercase">компании</h3>

          <Link
            href="#"
            className="inline-block px-10 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Подробнее
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">Подать заявку</h2>
            <h3 className="text-2xl md:text-3xl font-thin mb-12 tracking-widest uppercase">на консультацию</h3>

            <p className="mb-12 text-muted opacity-70">Заполните форму и мы свяжемся с Вами</p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <div className="flex items-center space-x-2">
                <select className="px-4 py-4 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>🇷🇺 +7</option>
                </select>
                <input
                  type="tel"
                  placeholder="(999) 999-9999"
                  className="flex-1 px-6 py-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground text-sm tracking-widest uppercase hover:bg-accent/90 transition-all duration-300"
              >
                Отправить
              </button>
            </form>

            <p className="mt-12 text-xs opacity-50 tracking-widest uppercase">
              УК "Аксиома Капитал"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Logo className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-thin mb-2 tracking-widest uppercase">Аксиома Капитал</h3>
            <p className="text-muted-foreground tracking-widest uppercase text-sm">Управляющая компания</p>
          </div>

          <div className="text-center mb-12">
            <p className="mb-2 text-sm">Общество с ограниченной ответственностью</p>
            <p className="mb-2 text-sm">Управляющая компания «Аксиома Капитал»</p>
            <p className="text-sm">ООО УК «Аксиома Капитал»</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16">
            <div>
              <h4 className="font-normal mb-3 text-sm uppercase tracking-wider">Телефон:</h4>
              <p className="text-primary mb-1">+7 (495) 970-37-57</p>
              <p className="text-muted-foreground text-sm">info@axiomacapital.ru</p>
            </div>

            <div>
              <h4 className="font-normal mb-3 text-sm uppercase tracking-wider">Юридический адрес:</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                143084, Московская область, г.о. Одинцовский, с. Усово, стр. 100, часть помещ. 10
              </p>
            </div>

            <div>
              <h4 className="font-normal mb-3 text-sm uppercase tracking-wider">Трудоустройство:</h4>
              <p className="text-primary mb-1">+7 (495) 970-37-57</p>
              <p className="text-muted-foreground text-sm">info@axiomacapital.ru</p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-6xl mx-auto">
              Общество с ограниченной ответственностью Управляющая компания «Аксиома Капитал» действует на основании лицензии, выданной Банком России
              23.05.2024 г. № 21-000-1-01104, на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными фондами и
              негосударственными пенсионными фондами, без ограничения срока действия (Решение Банка России от 23.05.2024 № Р5-14/682). Деятельность ООО УК
              «Аксиома Капитал» по управлению инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами не
              сопровождается с профессиональной деятельностью по доверительному управлению ценными бумагами. В связи с этим отсутствует риск возникновения конфликта
              интересов при осуществлении управления ценными бумагами. ООО УК «Аксиома Капитал» не осуществляет деятельность по инвестиционному консультированию,
              не является инвестиционным советником и не предоставляет индивидуальных инвестиционных рекомендаций. Получить информацию об управляющей компании,
              находящейся в ее управлении паевых инвестиционных фондах, ознакомиться с Правилами доверительного управления паевыми инвестиционными фондами, а
              также сведениями о местах приема заявок на приобретение, погашение инвестиционных паев и иными документами, предусмотренными Федеральным законом
              от 29.11.2001 № 156-ФЗ «Об инвестиционных фондах» и нормативными актами Банка России, можно по адресу ООО УК «Аксиома Капитал»: 143084,
              Московская область, г.о. Одинцовский, с. Усово, стр. 100, часть помещ. 10, по телефону +7 (495) 970-37-57, а также по адресу страницы в сети Интернет
              https://axiomacapital.ru/.
            </p>

            <p className="text-xs text-muted-foreground mt-8">
              ООО УК «Аксиома Капитал» уведомляет, что стоимость инвестиционных паев может увеличиваться и уменьшаться, результаты инвестирования в прошлом не
              определяют доходы в будущем, государство не гарантирует доходность инвестиций в паевые инвестиционные фонды. Прежде чем приобрести инвестиционный
              пай, следует внимательно ознакомиться с правилами доверительного управления паевым инвестиционным фондом.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
