export function ContactSection() {
	return (
		<section id="contact" className="py-24 bg-foreground text-background">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-thin mb-4 tracking-widest uppercase">
						Подать заявку
					</h2>
					<h3 className="text-2xl md:text-3xl font-thin mb-12 tracking-widest uppercase">
						на консультацию
					</h3>

					<p className="mb-12 text-muted opacity-70">
						Заполните форму и мы свяжемся с Вами
					</p>

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
	)
}
