export default interface Client {
	getHomeData: () => Promise<HomeData>;
	getProjectsData: () => Promise<ProjectsData>;
	getAboutData: () => Promise<any>;
	getContactData: () => Promise<ContactData>;
}

export interface HomeData {
	mainHeading: string;
	subHeading: string;
	buttons: Button[];
}

export interface ProjectsData {
	projects: Project[];
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
