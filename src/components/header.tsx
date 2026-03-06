"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { sectionIds, type SectionId } from "@/lib/site-content";

interface HeaderProps {
	activeSection: SectionId;
	setActiveSection: (section: SectionId) => void;
}

export default function Header({
	activeSection,
	setActiveSection,
}: HeaderProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const t = useTranslations();

	const scrollToSection = (section: SectionId) => {
		setActiveSection(section);
		setIsMobileMenuOpen(false);

		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navItems = sectionIds.map((id) => ({
		id,
		label: t(`nav.${id}`),
	}));

	return (
		<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
			<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
				<div className="hidden md:flex items-center gap-4 lg:gap-8">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`text-sm font-medium transition-colors pb-1 border-b-2 cursor-pointer ${
								activeSection === item.id
									? "text-primary border-primary"
									: "text-foreground/60 border-transparent hover:text-foreground"
							}`}
						>
							{item.label}
						</button>
					))}
				</div>

				<div className="hidden md:block md:ml-auto">
					<LanguageSwitcher />
				</div>

				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden ml-auto p-2 hover:bg-secondary rounded-lg transition-colors"
					aria-label={t("nav.menu")}
				>
					{isMobileMenuOpen ? (
						<X className="w-5 h-5 text-foreground" />
					) : (
						<Menu className="w-5 h-5 text-foreground" />
					)}
				</button>
			</nav>

			{isMobileMenuOpen && (
				<div className="md:hidden bg-white border-t border-border">
					<div className="px-4 py-4 space-y-3">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
									activeSection === item.id
										? "bg-primary text-primary-foreground"
										: "text-foreground hover:bg-secondary"
								}`}
							>
								{item.label}
							</button>
						))}
						<div className="pt-2 border-t border-border">
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
