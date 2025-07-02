import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WavifyApi implements ICredentialType {
	name = 'wavifyApi';
	displayName = 'Wavify API';
	documentationUrl = 'https://api.wavify.com.br/swagger/index.html';
	properties: INodeProperties[] = [
		{
			displayName: 'Subscription',
			name: 'subscription',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
			description: 'Chave de subscription da API Wavify',
		},
		{
			displayName: 'Instance',
			name: 'instance',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
			description: 'Chave de instance da API Wavify',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.wavify.com.br',
			description: 'URL base da API Wavify',
		},
	];

	// Configuração de autenticação - método alternativo
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};

	// Teste de credenciais - usando query parameters
	test: ICredentialTestRequest = {
		request: {
			url: '={{$credentials?.baseUrl}}/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/groups',
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			qs: {
				getParticipants: 'false',
			},
		},
	};
} 