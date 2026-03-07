export const sectionIds = ["home", "about", "services", "location"] as const;

export type SectionId = (typeof sectionIds)[number];

export const serviceKeys = [
	"fasciaTherapy",
	"fasciaMassage",
	"fasciaCombo",
	"deepTissue",
	"aromaHerbalOil",
	"reiki",
	"thaiMassage",
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export const credentialKeys = [
	"fasciaPractitioner",
	"thaiFootReflexology",
	"nuadBoRarn",
	"hotStoneAndAroma",
	"reikiAndIndianHead",
	"ammaAssi",
	"facialShiatsu",
	"reikiMaster",
] as const;

export type CredentialKey = (typeof credentialKeys)[number];

export const venues = [
	{
		name: "Maison 22 Esthetique",
		url: "https://www.maison22cagliari.it/",
		scheduleKey: "maison22",
	},
	{
		name: "Thalassos",
		url: "http://www.thalassos.it/",
		scheduleKey: "thalassos",
	},
] as const;

export const socialLinks = [
	{
		name: "Facebook",
		url: "https://www.facebook.com/groups/954153091395549",
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/piras_massaggi/",
	},
] as const;

export const contactInfo = {
	phoneRaw: "+33628602076",
	phoneDisplay: "+33 6 28 60 20 76",
	email: "dvdpiras@gmail.com",
} as const;

export const practiceAddress = {
	label: "Cagliari, Sardinia",
	googleMapsEmbed:
		"https://www.google.com/maps?q=Cagliari%2C%20Sardinia&output=embed",
} as const;
