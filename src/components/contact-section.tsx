import { useTranslations } from "next-intl";
import { contactInfo, socialLinks } from "@/lib/site-content";

export default function ContactSection() {
	const t = useTranslations("contact");

	return (
		<section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-2xl p-6 sm:p-10 border border-border space-y-6 text-center">
					<h2 className="text-3xl sm:text-5xl font-light text-balance">
						{t("titlePrefix")} <span className="text-primary font-medium">{t("titleHighlight")}</span>
					</h2>
					<p className="text-base sm:text-lg text-foreground/70 leading-relaxed">{t("description")}</p>

					<div className="flex flex-col gap-3 sm:gap-4">
						<a
							href={`tel:${contactInfo.phoneRaw}`}
							className="w-full py-3 px-5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
						>
							{t("phoneCta", { phone: contactInfo.phoneDisplay })}
						</a>
						<a
							href={`mailto:${contactInfo.email}`}
							className="w-full py-3 px-5 rounded-lg bg-secondary text-secondary-foreground border border-primary/20 font-medium hover:bg-secondary/80 transition-colors"
						>
							{t("emailCta")}
						</a>
					</div>

					<div className="pt-2">
						<p className="text-sm text-foreground/70 mb-3">{t("followUs")}</p>
						<div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noreferrer"
									className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
								>
									{social.name}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
