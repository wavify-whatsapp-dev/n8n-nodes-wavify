# n8n-nodes-wavify-api

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

## 📱 Plugin n8n para Wavify WhatsApp API

Um plugin completo para n8n que integra com a API Wavify, permitindo automação completa do WhatsApp Business.

## ✨ Recursos Implementados

### 📨 **Messaging (Mensagens)**
- ✅ Enviar mensagens de texto
- ✅ Enviar imagem
- ✅ Enviar vídeo  
- ✅ Enviar áudio
- ✅ Enviar documento
- ✅ Enviar localização
- ✅ Enviar sticker
- ✅ Responder mensagem

### 👨‍👩‍👧‍👦 **Group Operations (Operações de Grupo)**
- ✅ Listar grupos disponíveis
- ✅ Enviar mensagem de texto para grupo

## 🚀 Instalação

### Via npm
```bash
npm install n8n-nodes-wavify-api
```

### Via n8n Community Nodes
1. Vá para **Settings** > **Community Nodes** no n8n
2. Instale: `n8n-nodes-wavify-api`

## ⚙️ Configuração

### 1. **Configurar Credenciais**
No n8n, adicione uma nova credencial **Wavify API**:
- **Subscription**: Sua chave de subscription da Wavify
- **Instance**: Sua chave de instance da Wavify  
- **Base URL**: `https://api.wavify.com.br` (padrão)

### 2. **Usar o Nó**
1. Adicione um nó **Wavify** no seu workflow
2. Selecione a credencial configurada
3. Escolha a **Operation** desejada (Send Text, Send Image, etc.)
4. Preencha os campos necessários

## 📖 Exemplos de Uso

### Enviar Mensagem de Texto
```
Operation: Send Text Message
Number: 5511999999999
Text: Olá! Esta é uma mensagem via n8n + Wavify!
```

### Enviar Imagem
```
Operation: Send Image
Number: 5511999999999
Image: [URL da imagem ou base64]
Caption: Enviado via n8n
```

### Listar Grupos
```
Operation: Get Groups
```

### Enviar Mensagem para Grupo
```
Operation: Send Group Text
Group ID: 120363xxxxx@g.us
Text: Mensagem para o grupo via n8n!
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js ≥ 20.15
- npm

### Setup do Projeto
```bash
# Clone o repositório
git clone https://github.com/wavify-whatsapp-dev/n8n-nodes-wavify-api.git
cd n8n-nodes-wavify-api

# Instale as dependências
npm install

# Build do projeto
npm run build

# Verificar linting
npm run lint
```

### Scripts Disponíveis
- `npm run build` - Compilar TypeScript e preparar distribuição
- `npm run dev` - Modo desenvolvimento com watch
- `npm run lint` - Verificar código
- `npm run lintfix` - Corrigir problemas de lint automaticamente
- `npm run format` - Formatar código com Prettier

## 📚 Documentação

- **[TESTE_NOVOS_METODOS.md](TESTE_NOVOS_METODOS.md)** - Guia detalhado para testar todas as funcionalidades
- **[IMPLEMENTACAO_COMPLETA.md](IMPLEMENTACAO_COMPLETA.md)** - Documentação técnica completa
- **[Documentação Oficial Wavify](https://api.wavify.com.br/swagger/index.html)**

## 🔗 API Endpoints Implementados

### Messages (Implementado)
- `POST /messages/send-text` - Enviar texto
- `POST /messages/send-image` - Enviar imagem  
- `POST /messages/send-video` - Enviar vídeo
- `POST /messages/send-audio` - Enviar áudio
- `POST /messages/send-document` - Enviar documento
- `POST /messages/send-location` - Enviar localização
- `POST /messages/send-sticker` - Enviar sticker
- `POST /messages/reply-message` - Responder mensagem

### Groups (Implementado)
- `GET /groups` - Listar grupos
- `POST /groups/send-text` - Enviar texto para grupo

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/wavify/n8n-nodes-wavify-api/issues)
- **Documentação Wavify**: [https://api.wavify.com.br/swagger](https://api.wavify.com.br/swagger)
- **n8n Community**: [https://community.n8n.io](https://community.n8n.io)

## 📊 Versões

### v0.0.2
- ✅ **10 operações de messaging** implementadas
- ✅ **Envio de mensagens** (texto, mídia, localização, sticker)
- ✅ **Operações básicas de grupo** (listar, enviar para grupo)  
- ✅ **Resposta a mensagens**
- ✅ **Integração completa** com API Wavify

---

**Desenvolvido com ❤️ para a comunidade n8n**

# No diretório do projeto
npm run build           # Compilar
node teste-local.js     # Testar funcionamento

# 1. Instalar globalmente
npm install -g ./n8n-nodes-wavify-0.0.2.tgz

# 2. Iniciar n8n
n8n start

# 3. Abrir navegador
# http://localhost:5678

# Criar projeto de teste
mkdir n8n-test
cd n8n-test
npm init -y

# Instalar n8n local + plugin
npm install n8n
npm install ../caminho/para/n8n-nodes-wavify-api-0.0.2.tgz

# Executar
npx n8n start

