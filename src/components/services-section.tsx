import { useTranslations } from "next-intl";
import { serviceKeys } from "@/lib/site-content";

export default function ServicesSection() {
	const t = useTranslations("services");

	return (
		<section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
			<div className="max-w-6xl mx-auto">
				<div className="text-center space-y-4 mb-10 sm:mb-16">
					<h2 className="text-3xl sm:text-5xl font-light text-balance">
						{t("titlePrefix")} <span className="text-primary font-medium">{t("titleHighlight")}</span>
					</h2>
					<div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
					<p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
						{t("subtitle")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 sm:gap-8">
					{serviceKeys.map((key) => (
						<article
							key={key}
							className="bg-white rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
						>
							<div className="mb-4">
								<h3 className="text-lg sm:text-xl font-medium text-foreground mb-2">
									{t(`items.${key}.name`)}
								</h3>
							</div>

							<p className="text-foreground/70 mb-6 leading-relaxed text-sm sm:text-base">
								{t(`items.${key}.description`)}
							</p>

							<div className="mb-6 pt-4 border-t border-border">
								<p className="text-sm font-medium text-primary">{t(`items.${key}.price`)}</p>
							</div>

							<a
								href="#contact"
								className="block w-full py-2 text-center border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
							>
								{t("bookCta")}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
