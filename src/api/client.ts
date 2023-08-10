export default interface Client {
	getHomeData: () => Promise<HomeData>;
	getProjectsData: () => Promise<ProjectsData>;
	getAboutData: () => Promise<AboutData>;
	getContactData: () => Promise<ContactData>;
	getImageURL: (id: string) => Promise<string>;
}

export interface HomeData {
	mainHeading: string;
	subHeading: string;
	buttons: Button[];
}

export interface ProjectsData {
	projects: Project[];
}

export interface AboutData {
	description: string;
	headshot: string;
	headshotbg: string;
	history: HistoryItem[];
	skills: string[];
}

export interface HistoryItem {
	years: string;
	title: string;
	content: string;
	logo: string;
}

export interface ContactData {
	leftTitle: string;
	rightTitle: string;
	sendButton: Button;
	contactItems: ContactItem[];
}

export interface ContactItem {
	text: string;
	icon: string;
}

export interface Project {
	img: string;
	title: string;
	description: string;
	tags: string[];
	buttons: Button[];
	priority: number;
}

export interface Button {
	title: string;
	url?: string;
	icon: string;
	flip?: boolean;
	primary: boolean;
}
