"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import LocationSection from "@/components/location-section";
import Footer from "@/components/footer";
import { sectionIds, type SectionId } from "@/lib/site-content";

export default function Home() {
	const [activeSection, setActiveSection] = useState<SectionId>("home");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id as SectionId);
					}
				}
			},
			{
				rootMargin: "-35% 0px -55% 0px",
				threshold: 0.01,
			},
		);

		for (const id of sectionIds) {
			const section = document.getElementById(id);
			if (section) {
				observer.observe(section);
			}
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<Header activeSection={activeSection} setActiveSection={setActiveSection} />
			<main>
				<Hero />
				<AboutSection />
				<ServicesSection />
				<LocationSection />
			</main>
			<Footer />
		</div>
	);
}
