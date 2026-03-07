"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type ThemeMode = "light" | "dark";

function applyTheme(theme: ThemeMode) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
}

export default function ThemeSwitcher() {
	const t = useTranslations("theme");
	const [theme, setTheme] = useState<ThemeMode>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

		setTheme(initialTheme);
		applyTheme(initialTheme);
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
		applyTheme(nextTheme);
		localStorage.setItem("theme", nextTheme);
	};

	if (!mounted) {
		return (
			<button
				type="button"
				className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-foreground"
				aria-label={t("toggle")}
			>
				<Sun className="w-4 h-4" />
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
			aria-label={t("toggle")}
		>
			{theme === "light" ? (
				<>
					<Moon className="w-4 h-4 text-foreground" />
					<span className="text-sm font-medium text-foreground hidden sm:inline">
						{t("dark")}
					</span>
				</>
			) : (
				<>
					<Sun className="w-4 h-4 text-foreground" />
					<span className="text-sm font-medium text-foreground hidden sm:inline">
						{t("light")}
					</span>
				</>
			)}
		</button>
	);
}
