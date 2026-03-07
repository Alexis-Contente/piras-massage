"use client";

import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions/locale";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const languageCodes = ["it", "en", "fr"] as const;

export default function LanguageSwitcher() {
	const router = useRouter();
	const t = useTranslations("language");
	const [isOpen, setIsOpen] = useState(false);
	const [currentLocale, setCurrentLocale] = useState<string>("it");

	useEffect(() => {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("locale="));
		const locale = cookie ? cookie.split("=")[1] : "it";
		setCurrentLocale(locale);
	}, []);

	const handleLanguageChange = async (newLocale: string) => {
		if (newLocale === currentLocale) {
			setIsOpen(false);
			return;
		}

		await setLocale(newLocale);
		setCurrentLocale(newLocale);
		setIsOpen(false);
		router.refresh();
	};

	const localeLabel = languageCodes.includes(
		currentLocale as (typeof languageCodes)[number],
	)
		? t(currentLocale)
		: currentLocale.toUpperCase();

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
				aria-label={t("change")}
			>
				<Globe className="w-4 h-4 text-foreground" />
				<span className="text-sm font-medium text-foreground hidden sm:inline">
					{localeLabel}
				</span>
			</button>

			{isOpen && (
				<>
					<div
						className="fixed inset-0 z-40"
						onClick={() => setIsOpen(false)}
					/>
					<div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[150px]">
						{languageCodes.map((code) => (
							<button
								key={code}
								onClick={() => handleLanguageChange(code)}
								className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg cursor-pointer ${
									currentLocale === code
										? "bg-primary text-primary-foreground font-medium"
										: "text-foreground hover:bg-secondary"
								}`}
							>
								{t(code)}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
