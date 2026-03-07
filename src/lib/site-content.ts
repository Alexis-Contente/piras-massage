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
	phoneRaw: "+393514058862",
	phoneDisplay: "+39 351 405 8862",
	email: "dvdpiras@gmail.com",
} as const;

export const practiceAddress = {
	label: "Cagliari, Sardinia",
	googleMapsEmbed:
		"https://www.google.com/maps?q=Cagliari%2C%20Sardinia&output=embed",
} as const;
