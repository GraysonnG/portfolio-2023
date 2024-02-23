import { SANITY_PROJECT_ID } from '$env/static/private';
import createClient, { type SanityClient } from '@sanity/client';
import { sanityDataset } from '../constants';
import type { AboutData, BlogData, Button, ContactData } from './client';
import type Client from './client';

class PortfolioSanityClient implements Client {
	_client?: SanityClient;

	constructor() {
		try {
			this._client = createClient({
				projectId: SANITY_PROJECT_ID,
				dataset: sanityDataset,
				apiVersion: '2021-10-21',
				useCdn: false
			});
		} catch (e) {
			console.error(e);
		}
	}

	getImageURL = async (id: string) => {
		if (this._client) {
			const rawImageData: any[] = await this._client?.fetch(`*[_id == "${id}"]`);

			return rawImageData[0].url;
		} else throw new Error('Image Not Found');
	};

	getHomeData = async () => {
		const rawData: any[] = await this.getAllOfTypeFromClient('homedata');

		return {
			mainHeading: rawData[0].mainHeading,
			subHeading: rawData[0].subHeading,
			buttons: [...rawData[0].buttons.map((b: any) => this.convertButton(b))]
		};
	};
	getProjectsData = async () => {
		const rawData: any[] = await this.getAllOfTypeFromClient('project');

		return {
			projects: rawData.map((proj) => ({
				img: `/i/${proj.img.asset._ref}`,
				title: proj.title,
				description: proj.description,
				tags: proj.tags,
				buttons: proj.buttons.map((b: any) => this.convertButton(b)),
				priority: proj.priority
			}))
		};
	};
	getAboutData = async () => {
		const rawData: any = (await this.getAllOfTypeFromClient('aboutdata'))[0];

		return {
			description: rawData.content,
			headshot: `/i/${rawData.headshot.asset._ref}`,
			headshotbg: `/i/${rawData.headshot_bg.asset._ref}`,
			history: rawData.history.map((h: any) => ({
				years: h.years,
				title: h.title,
				content: h.content,
				logo: `/i/${h.logo.asset._ref}`
			})),
			skills: rawData.skills
		} as AboutData;
	};
	getContactData = async () => {
		const rawData: any[] = await this.getAllOfTypeFromClient('contactdata');

		return {
			leftTitle: rawData[0].leftTitle,
			rightTitle: rawData[0].rightTitle,
			sendButton: this.convertButton(rawData[0].sendButton),
			contactItems: rawData[0].contactItems
		} as ContactData;
	};
	getBlogData = async () => {
		const rawData: any[] = await this.getAllOfTypeFromClient('blogdata');

		return rawData.map( rawBlog =>
				({
					id: rawBlog._id,
					title: rawBlog.title,
					date: rawBlog.date,
					img: `/i/${rawBlog.image.asset._ref}`,
					slug: rawBlog.slug.current,
					markdown: rawBlog.contentmd
				} as BlogData)
		)
	}

	private getAllOfTypeFromClient = async (type: string) => {
		const data = await this._client?.fetch(`*[_type=="${type}"]`);
		if (data) return data;
		else return {};
	};

	private convertButton = (sanityButton: any): Button => {
		return {
			title: sanityButton.title,
			icon: sanityButton.icon,
			url: sanityButton.url,
			primary: sanityButton.primary,
			flip: sanityButton.flip
		};
	};
}

export const client: Client = new PortfolioSanityClient();
