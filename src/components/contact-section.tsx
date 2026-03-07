import { useTranslations } from "next-intl";

export default function ContactSection() {
	const t = useTranslations("contact");

	return (
		<section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
			<div className="max-w-4xl mx-auto">
				<div className="bg-card rounded-2xl p-6 sm:p-10 border border-border space-y-6 text-center">
					<h2 className="text-3xl sm:text-5xl font-light text-balance">
						{t("titlePrefix")} <span className="text-primary font-medium">{t("titleHighlight")}</span>
					</h2>
					<p className="text-base sm:text-lg text-foreground/70 leading-relaxed">{t("description")}</p>
				</div>
			</div>
		</section>
	);
}
