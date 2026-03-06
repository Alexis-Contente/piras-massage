"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: string) {
	const validLocales = ["fr", "en", "it"];
	
	if (!validLocales.includes(locale)) {
		return;
	}

	const cookieStore = await cookies();
	cookieStore.set("locale", locale, {
		path: "/",
		maxAge: 60 * 60 * 24 * 365, // 1 year
	});
}
