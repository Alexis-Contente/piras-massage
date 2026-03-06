import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const locale = cookieStore.get("locale")?.value || "it";

	// Validate locale
	const validLocales = ["it", "en", "fr"];
	const validLocale = validLocales.includes(locale) ? locale : "it";

	// Load from filesystem
	const messages = (await import(`./messages/${validLocale}.json`)).default;

	return {
		locale: validLocale,
		messages,
	};
});
