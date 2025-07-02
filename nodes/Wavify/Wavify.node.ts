import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { wavifyOperations, wavifyFields } from './WavifyOperations';

export class Wavify implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wavify',
		name: 'wavify',
		icon: { light: 'file:wavify.svg', dark: 'file:wavify.svg' },
		group: ['communication'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Integração com API Wavify para envio de mensagens WhatsApp',
		defaults: {
			name: 'Wavify',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'wavifyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl || "https://api.wavify.com.br"}}/subscription/={{$credentials.subscription}}/instance/={{$credentials.instance}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Messaging',
						value: 'messaging',
						description: 'Wavify WhatsApp API operations',
					},
				],
				default: 'messaging',
			},
			...wavifyOperations,
			...wavifyFields,
		],
	};
}