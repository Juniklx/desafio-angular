# Dashboard de Frota Ford

Aplicação Angular para gestão de frota, com autenticação, visão geral de veículos e um dashboard com métricas, vitrine do modelo selecionado e busca de telemetria por VIN. Projeto desenvolvido como desafio individual do curso de Front End (parceria Ford/Senai).

![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)

## Funcionalidades

- Autenticação com proteção de rotas por guards (`authGuard` e `guestGuard`)
- Listagem de veículos da frota consumida via API
- Seleção de modelo com atualização reativa de métricas (total de vendas, conectados, updates de software)
- Vitrine com imagem do veículo selecionado
- Busca de telemetria por VIN com debounce, filtro e cancelamento de requisições anteriores
- Layout responsivo com sidebar fixa e design system próprio em CSS custom properties

## Tecnologias utilizadas

| Categoria       | Tecnologia                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| Framework       | Angular 20 (standalone components)                                        |
| Linguagem       | TypeScript 5.9                                                             |
| Reatividade     | RxJS (`debounceTime`, `distinctUntilChanged`, `filter`, `switchMap`, `map`, `catchError`) e Signals |
| Estilo          | CSS puro com custom properties (`:root`), sem frameworks de UI            |
| Testes          | Karma + Jasmine                                                            |
| Build/CLI       | Angular CLI                                                                |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [Angular CLI](https://angular.dev/tools/cli) 20.x (`npm install -g @angular/cli`)
- Uma instância da API de apoio rodando localmente (ver seção abaixo)

## API

A aplicação consome uma API REST local, que **não faz parte deste repositório** e precisa ser executada separadamente na porta `3001`. Os endpoints utilizados são:

| Método | Endpoint         | Descrição                          |
| ------ | ---------------- | ----------------------------------- |
| POST   | `/login`          | Autentica o usuário                 |
| GET    | `/vehicles`        | Retorna a lista de veículos da frota |
| POST   | `/vehicleData`     | Retorna a telemetria de um veículo pelo VIN |

Sem a API em execução, as telas de login, home e dashboard não conseguirão carregar dados.

## Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Juniklx/desafio-angular.git
cd desafio-angular
npm install
```

Com a API de apoio já rodando em `http://localhost:3001`, inicie o servidor de desenvolvimento:

```bash
ng serve
```

Acesse `http://localhost:4200` no navegador. A aplicação recarrega automaticamente a cada alteração nos arquivos fonte.

## Estrutura de pastas

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho da aplicação
│   │   ├── sidebar/          # Menu lateral fixo
│   │   └── pages/
│   │       ├── login/        # Tela de autenticação
│   │       ├── home/          # Tela inicial
│   │       └── dashboard/    # Métricas, vitrine e busca por VIN
│   ├── guards/                # authGuard e guestGuard
│   ├── models/                 # Interfaces de Usuario e Veiculo
│   ├── services/               # Auth e Frota (chamadas HTTP)
│   └── app.routes.ts           # Definição de rotas
└── styles.css                  # Design system (custom properties)
```

## Scripts disponíveis

| Comando         | Descrição                                              |
| --------------- | --------------------------------------------------------- |
| `npm start`      | Sobe a API de apoio e o `ng serve` simultaneamente        |
| `ng serve`       | Inicia apenas o servidor de desenvolvimento Angular        |
| `npm run build`  | Gera o build de produção na pasta `dist/`                 |
| `npm test`       | Executa os testes unitários com Karma/Jasmine              |
| `npm run watch`  | Gera o build em modo desenvolvimento com watch             |

## Autor

Marcelo Soares Teixeira Junior
[github.com/Juniklx](https://github.com/Juniklx)
