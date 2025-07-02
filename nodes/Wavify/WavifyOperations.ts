import { INodeProperties } from 'n8n-workflow';

export const wavifyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
			},
		},
		options: [
			{
				name: 'Get Groups',
				value: 'getGroups',
				description: 'Listar grupos disponíveis',
				action: 'Listar grupos',
				routing: {
					request: {
						method: 'GET',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/groups',
						qs: {
							getParticipants: 'false',
						},
					},
				},
			},
			{
				name: 'Reply Message',
				value: 'replyMessage',
				description: 'Responder mensagem',
				action: 'Responder mensagem',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/reply-message',
					},
				},
			},
			{
				name: 'Send Audio',
				value: 'sendAudio',
				description: 'Enviar áudio',
				action: 'Enviar audio',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-audio',
					},
				},
			},
			{
				name: 'Send Document',
				value: 'sendDocument',
				description: 'Enviar documento',
				action: 'Enviar documento',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-document',
					},
				},
			},
			{
				name: 'Send Group Text',
				value: 'sendGroupText',
				description: 'Enviar mensagem de texto para grupo',
				action: 'Enviar texto para grupo',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/groups/send-text',
					},
				},
			},
			{
				name: 'Send Image',
				value: 'sendImage',
				description: 'Enviar imagem',
				action: 'Enviar imagem',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-image',
					},
				},
			},
			{
				name: 'Send Location',
				value: 'sendLocation',
				description: 'Enviar localização',
				action: 'Enviar localizacao',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-location',
					},
				},
			},
			{
				name: 'Send Sticker',
				value: 'sendSticker',
				description: 'Enviar sticker',
				action: 'Enviar sticker',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-sticker',
					},
				},
			},
			{
				name: 'Send Text Message',
				value: 'sendText',
				description: 'Enviar mensagem de texto',
				action: 'Enviar texto',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-text',
					},
				},
			},
			{
				name: 'Send Video',
				value: 'sendVideo',
				description: 'Enviar vídeo',
				action: 'Enviar video',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscription/{{$credentials.subscription}}/instance/{{$credentials.instance}}/messages/send-video',
					},
				},
			},
		],
		default: 'sendText',
	},
];

export const wavifyFields: INodeProperties[] = [
	// Placeholder para campos (manteremos simples)
];
