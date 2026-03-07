import { useTranslations } from "next-intl";
import { credentialKeys } from "@/lib/site-content";
import Image from "next/image";
import image9061 from "@/public/1000009061.jpg";
import image9060 from "@/public/1000009060.jpg";
import image9062 from "@/public/1000009062.jpg";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
	const t = useTranslations("about");

	return (
		<section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
			<div className="max-w-6xl mx-auto">
				<div className="space-y-10 sm:space-y-12">
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-5xl font-light text-balance">
							{t("titlePrefix")}{" "}
							<span className="text-primary font-medium">
								{t("titleHighlight")}
							</span>
						</h2>
						<div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
						<div className="h-full flex flex-col justify-between space-y-6 sm:space-y-9 md:py-1">
							<p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-9 sm:leading-10 tracking-[0.012em]">
								{t("paragraph1")}
							</p>
							<p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-9 sm:leading-10 tracking-[0.012em]">
								{t("paragraph2")}
							</p>
							<p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-9 sm:leading-10 tracking-[0.012em]">
								{t("paragraph3")}
							</p>
						</div>

						<div className="space-y-4">
							<Carousel opts={{ loop: true }} className="w-full">
								<CarouselContent>
									<CarouselItem>
										<Image
											src={image9061}
											alt="Cabinet de massage - photo 1"
											className="w-full rounded-2xl object-cover aspect-[4/5]"
											priority
										/>
									</CarouselItem>
									<CarouselItem>
										<Image
											src={image9060}
											alt="Cabinet de massage - photo 2"
											className="w-full rounded-2xl object-cover aspect-[4/5]"
										/>
									</CarouselItem>
									<CarouselItem>
										<Image
											src={image9062}
											alt="Cabinet de massage - photo 3"
											className="w-full rounded-2xl object-cover aspect-[4/5]"
										/>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
								<CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
							</Carousel>
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
											<p className="text-sm font-medium text-foreground">
												{t(`credentials.${key}.title`)}
											</p>
											<p className="text-xs text-foreground/50">
												{t(`credentials.${key}.school`)}
											</p>
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
