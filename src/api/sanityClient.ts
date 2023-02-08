import { SANITY_PROJECT_ID } from '$env/static/private';
import createClient, { type SanityClient } from '@sanity/client';
import { sanityDataset } from '../constants';
import type { Button } from './client';
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
	getAboutData = async () => ({});
	getContactData = async () => ({
		leftTitle: '',
		rightTitle: '',
		sendButton: {
			title: '',
			icon: '',
			primary: true
		},
		contactItems: []
	});

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
