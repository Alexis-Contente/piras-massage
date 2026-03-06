import { useTranslations } from "next-intl";
import { credentialKeys } from "@/lib/site-content";

export default function AboutSection() {
	const t = useTranslations("about");

	return (
		<section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-6xl mx-auto">
				<div className="space-y-10 sm:space-y-12">
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-5xl font-light text-balance">
							{t("titlePrefix")} <span className="text-primary font-medium">{t("titleHighlight")}</span>
						</h2>
						<div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
						<div className="space-y-4 sm:space-y-6">
							<p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t("paragraph1")}</p>
							<p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t("paragraph2")}</p>
							<p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t("paragraph3")}</p>
						</div>

						<div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 h-fit">
							<div className="text-center space-y-6">
								<div className="space-y-2">
									<div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
										<span className="text-3xl">🧘</span>
									</div>
									<p className="text-foreground/60 font-medium">{t("experience")}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-primary/20 pt-10 sm:pt-12">
						<h3 className="text-center text-sm font-semibold text-primary/70 uppercase tracking-widest mb-8">
							{t("credentialsTitle")}
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{credentialKeys.map((key) => (
								<div key={key} className="group">
									<div className="flex gap-3">
										<div className="w-1 bg-primary/40 group-hover:bg-primary transition-colors rounded-full flex-shrink-0"></div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">{t(`credentials.${key}.title`)}</p>
											<p className="text-xs text-foreground/50">{t(`credentials.${key}.school`)}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
