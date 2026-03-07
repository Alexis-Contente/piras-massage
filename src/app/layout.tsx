import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Piras Massaggi",
	description:
		"Découvrez les services de massage thérapeutique pour votre bien-être et relaxation",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const messages = await getMessages();
	const cookieStore = await cookies();
	const locale = cookieStore.get("locale")?.value || "it";

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`font-sans antialiased`}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
				<Analytics />
			</body>
		</html>
	);
}
