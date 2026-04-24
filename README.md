# 📱 API WhatsApp (Simulação)
Uma API REST desenvolvida em Node.js que simula o funcionamento básico do WhatsApp, permitindo acesso a usuários, contatos e mensagens.
Projetada para integração com aplicações Front-End, fornecendo dados estruturados de forma eficiente.

## 🚀 Objetivo
Fornecer uma base de dados simulada para um sistema estilo WhatsApp, permitindo:
- Consulta de usuários
- Listagem de contatos
- Acesso a mensagens
- Filtros por número, contato e palavras-chave

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- CORS
- Render (para deploy)
- Postman 

## ⚙️ Como executar o projeto
```bash
1 - Clone o repositório: 
    git clone https://github.com/Lucas-Kolle/exercicio-06-BackEnd.git

2 - Instale as dependências:
    npm install

3 - Execute o servidor:
    node app.js
```

### A API está rodando em:
- Servidor local: http://localhost:8080  
- Render: https://api-watsapp.onrender.com

## 📌 EndPoints
### 🔹 Listar todos os dados
- GET /v1/whatsapp/dados
### 🔹 Buscar usuário por número
- GET /v1/whatsapp/dados/usuario/:numero
### 🔹 Listar contatos de um usuário
- GET /v1/whatsapp/dados/contatos/usuario/:numero
### 🔹 Listar todas as mensagens de um usuário
- GET /v1/whatsapp/dados/mensagens/usuario/:numero
### 🔹 Mensagens entre usuário e contato
- GET /v1/whatsapp/dados/mensagens/usuario/contato/?numero=XXXX&nome=XXXX
### 🔹 Buscar mensagem por palavra-chave
- GET /v1/whatsapp/dados/mensagens/chave/?numero=XXXX&nome=XXXX&frase=XXXX
### 🔹 Documentação auxiliar da API
- GET /v1/whatsapp/help

## 👨‍💻 Autor

Lucas Kolle
📧 lucaskolle2020@gmail.com  
💼 http://www.linkedin.com/in/lucas-kolle



##
## link do render
- https://api-watsapp.onrender.com

## Documentação do postman
- https://documenter.getpostman.com/view/53707653/2sBXqFPNsT
