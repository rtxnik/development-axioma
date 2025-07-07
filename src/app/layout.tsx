import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import ClientBody from "./ClientBody"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Аксиома Капитал - Управляющая компания",
	description:
		"Доверительное управление индивидуальными закрытыми паевыми инвестиционными фондами",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
		>
			<head>
				<Script
					crossOrigin="anonymous"
					src="//unpkg.com/same-runtime/dist/index.global.js"
				/>
			</head>
			<body suppressHydrationWarning className="antialiased">
				<ClientBody>{children}</ClientBody>
			</body>
		</html>
	)
}
