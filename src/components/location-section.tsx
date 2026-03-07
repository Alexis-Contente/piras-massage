import { useTranslations } from "next-intl";
import { contactInfo, practiceAddress, socialLinks } from "@/lib/site-content";

export default function LocationSection() {
	const t = useTranslations("location");
	const tContact = useTranslations("contact");

	return (
		<section
			id="location"
			className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center space-y-4 mb-10 sm:mb-16">
					<h2 className="text-3xl sm:text-5xl font-light text-balance">
						{t("titlePrefix")}{" "}
						<span className="text-primary font-medium">
							{t("titleHighlight")}
						</span>
					</h2>
					<div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
					<div className="h-full">
						<div className="bg-secondary rounded-2xl p-6 sm:p-8 h-full flex flex-col">
							<h3 className="text-xl sm:text-2xl font-medium text-foreground">
								{t("practiceTitle")}
							</h3>

							<div className="space-y-4">
								<div className="flex gap-4">
									<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
										<span className="text-lg">📍</span>
									</div>
									<div>
										<p className="font-medium text-foreground">
											{t("addressLabel")}
										</p>
										<p className="text-foreground/70 text-sm">
											{practiceAddress.label}
										</p>
									</div>
								</div>

								<a
									href={`tel:${contactInfo.phoneRaw}`}
									className="flex gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
								>
									<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
										<span className="text-lg">📞</span>
									</div>
									<div>
										<p className="font-medium text-foreground">
											{t("phoneLabel")}
										</p>
										<p className="text-foreground/70 text-sm">
											{contactInfo.phoneDisplay}
										</p>
									</div>
								</a>

								<a
									href={`mailto:${contactInfo.email}`}
									className="flex gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
								>
									<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
										<span className="text-lg">✉️</span>
									</div>
									<div>
										<p className="font-medium text-foreground">
											{t("emailLabel")}
										</p>
										<p className="text-foreground/70 text-sm">
											{contactInfo.email}
										</p>
									</div>
								</a>
							</div>

							<div className="mt-auto pt-6">
								<div>
									<p className="text-sm text-foreground/70 mb-3">
										{tContact("followUs")}
									</p>
									<div className="flex items-center gap-3 sm:gap-4 flex-wrap">
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
					</div>

					<div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl min-h-[320px] sm:min-h-[420px] border border-primary/10 overflow-hidden">
						<iframe
							src={practiceAddress.googleMapsEmbed}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title={t("mapTitle")}
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}
