import { useTranslations } from "next-intl";
import { contactInfo } from "@/lib/site-content";

export default function Footer() {
	const t = useTranslations("footer");

	return (
		<footer className="bg-foreground text-primary-foreground py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary-foreground/10">
					<div className="space-y-4">
						<h3 className="font-semibold text-lg">Piras Massaggi</h3>
						<p className="text-sm opacity-80">{t("brandDescription")}</p>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold text-lg">{t("navigationTitle")}</h3>
						<ul className="space-y-2 text-sm opacity-80">
							<li><a href="#about" className="hover:opacity-100 transition-opacity">{t("links.about")}</a></li>
							<li><a href="#services" className="hover:opacity-100 transition-opacity">{t("links.services")}</a></li>
							<li><a href="#location" className="hover:opacity-100 transition-opacity">{t("links.location")}</a></li>
							<li><a href="#contact" className="hover:opacity-100 transition-opacity">{t("links.contact")}</a></li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold text-lg">{t("contactTitle")}</h3>
						<div className="text-sm opacity-80 space-y-2">
							<p>{contactInfo.phoneDisplay}</p>
							<p>{contactInfo.email}</p>
						</div>
					</div>
				</div>

				<div className="text-center text-sm opacity-60">
					<p>{t("copyright")}</p>
				</div>
			</div>
		</footer>
	);
}
