"use client"

import { useState } from "react"

interface SearchInputProps {
	placeholder?: string
	onChange: (value: string) => void
}

export function SearchInput({
	placeholder = "Поиск...",
	onChange,
}: SearchInputProps) {
	const [value, setValue] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setValue(newValue)
		onChange(newValue)
	}

	return (
		<div className="relative">
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="w-full px-4 py-3 pl-10 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
			/>
			<svg
				className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
	)
}
