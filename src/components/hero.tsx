"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
	const t = useTranslations("hero");

	const scrollTo = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-background via-[#fef9fe] to-primary/5 dark:via-secondary dark:to-primary/25"
		>
			<div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
				<h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-balance">
					{t("titlePrefix")}{" "}
					<span className="text-primary font-medium">
						{t("titleHighlight")}
					</span>
				</h1>

				<p className="text-base sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
					{t("description")}
				</p>

				<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
					<button
						onClick={() => scrollTo("services")}
						className="px-8 py-3 bg-primary cursor-pointer text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
					>
						{t("primaryCta")}
					</button>
				</div>
			</div>
		</section>
	);
}
