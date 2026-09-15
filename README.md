# Dashboard de Frota Ford

Aplicação web para consultar indicadores de veículos Ford e telemetria por VIN, desenvolvida como desafio individual do curso de Front End da parceria Ford/SENAI.

O fluxo da aplicação é **Login → Home → Dashboard**. No painel, o usuário seleciona um modelo, acompanha seus indicadores e consulta os dados de um veículo pelo código de identificação (VIN).

![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)

## Funcionalidades

- **Login e logout:** autenticação via API, estado de sessão em `sessionStorage` e controle de navegação com `authGuard` e `guestGuard`.
- **Home:** tela de boas-vindas com destaque visual de veículo.
- **Indicadores por modelo:** total de vendas, veículos conectados e atualizações de software.
- **Vitrine de veículos:** imagem atualizada conforme o modelo selecionado.
- **Consulta por VIN:** odômetro, nível de combustível, status, latitude e longitude.
- **Busca reativa:** espera de 400 ms após a digitação, descarte de termos vazios e cancelamento de consultas anteriores com RxJS.
- **Interface responsiva:** navegação lateral, cabeçalho e componentes reutilizáveis, com estilos em CSS puro.

## Tecnologias

| Área | Tecnologias |
| --- | --- |
| Interface | Angular 20.3 e componentes standalone |
| Linguagem | TypeScript 5.9 |
| Estado e reatividade | Angular Signals e RxJS 7.8 |
| Integração | HttpClient e API REST |
| Estilos | CSS com custom properties |
| Testes | Jasmine e Karma |
| Desenvolvimento e build | Angular CLI e concurrently |

## Como executar

### 1. Pré-requisitos

- Git e npm.
- Node.js compatível com Angular 20.3: **20.19+ na linha 20, 22.12+ na linha 22 ou 24.x**, conforme a [tabela oficial de compatibilidade](https://angular.dev/reference/versions).
- API de apoio disponível em `http://localhost:3001`, com credenciais e VINs válidos.

### 2. Instalar o front-end

```bash
git clone https://github.com/Juniklx/desafio-angular.git
cd desafio-angular
npm ci
```

O Angular CLI já é uma dependência do projeto; os comandos abaixo usam a instalação local.

### 3. Iniciar a aplicação

Com a API de apoio em execução, inicie apenas o front-end:

```bash
npx ng serve
```

Acesse [http://localhost:4200](http://localhost:4200) e entre com as credenciais fornecidas pela API.

### Inicialização conjunta com a API

O comando `npm start` inicia o Angular e executa `npm run start --prefix .env/Api-Sprint7` em paralelo.

Para utilizá-lo, é necessário colocar previamente a API de apoio em `.env/Api-Sprint7`, instalar suas dependências e garantir que ela tenha um script `start`:

```bash
npm install --prefix .env/Api-Sprint7
npm start
```

**A API não está incluída neste repositório.** A pasta `.env` é ignorada pelo Git, portanto um clone novo não contém `.env/Api-Sprint7`. Se a API estiver em outro diretório, execute-a separadamente e use `npx ng serve`.

## Integração com a API

URL base: `http://localhost:3001`, definida em [auth.ts](src/app/services/auth.ts) e [frota.ts](src/app/services/frota.ts).

| Método | Endpoint | Entrada | Resposta esperada pelo front-end |
| --- | --- | --- | --- |
| POST | `/login` | `{ nome, senha }` | Dados do usuário |
| GET | `/vehicles` | — | Objeto com a propriedade `vehicles`, contendo a lista de modelos |
| POST | `/vehicleData` | `{ vin }` | Dados de telemetria do veículo |

Os modelos de dados estão em [src/app/models](src/app/models):

- **Modelo de veículo:** `id`, `vehicle`, `volumetotal`, `connected`, `softwareUpdates` e `img`.
- **Telemetria:** `id`, `odometro`, `nivelCombustivel`, `status`, `lat` e `long`.

Sem a API, o front-end pode ser iniciado, mas não é possível autenticar nem carregar os dados do dashboard. Credenciais e VINs de exemplo dependem da API utilizada.

## Rotas

| Rota | Tela | Acesso |
| --- | --- | --- |
| `/` | Redireciona para o login | — |
| `/login` | Autenticação | Visitantes, via `guestGuard` |
| `/home` | Boas-vindas | Sessão autenticada, via `authGuard` |
| `/dashboard` | Indicadores e telemetria | Sessão autenticada, via `authGuard` |

## Estrutura do projeto

```text
public/
├── icons/                    # Logotipo
└── img/                      # Imagens dos veículos
src/
├── app/
│   ├── components/
│   │   ├── campo-icone/      # Campo com ícone por projeção de conteúdo
│   │   ├── header/           # Cabeçalho do painel
│   │   ├── icone/            # Ícones reutilizáveis
│   │   ├── metrica-cartao/   # Cartão de indicador
│   │   ├── painel-layout/   # Layout compartilhado das rotas autenticadas
│   │   ├── sidebar/          # Navegação lateral
│   │   └── pages/
│   │       ├── login/
│   │       ├── home/
│   │       └── dashboard/
│   ├── guards/              # Controle de acesso às rotas
│   ├── models/              # Interfaces de usuário, veículos e telemetria
│   ├── services/            # Autenticação e consultas à API
│   ├── app.config.ts
│   └── app.routes.ts
└── styles.css               # Estilos globais e tokens visuais
```

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npx ng serve` | Inicia somente o front-end |
| `npm start` | Inicia front-end e API em `.env/Api-Sprint7` |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run watch` | Recompila em modo de desenvolvimento a cada alteração |
| `npm test` | Executa os testes com Karma/Jasmine |
| `npm test -- --watch=false --browsers=ChromeHeadless` | Executa os testes uma vez, sem abrir a interface do navegador |

Os testes com `ChromeHeadless` exigem Chrome instalado no ambiente.

## Escopo do projeto

Projeto educacional voltado à **consulta de dados**. A interface não inclui cadastro ou edição de veículos, gerenciamento de usuários, mapas ou exportação de relatórios.

O controle de sessão no front-end usa uma flag em `sessionStorage`. Os guards controlam a navegação; a autorização dos dados deve ser garantida pela API.

## Documentação complementar

- [PRODUCT.md](PRODUCT.md): contexto de uso, propósito e escopo do produto.
- [DESIGN.md](DESIGN.md): diretrizes visuais da interface.

## Autor

**Marcelo Soares Teixeira Junior**  
[GitHub · Juniklx](https://github.com/Juniklx)
