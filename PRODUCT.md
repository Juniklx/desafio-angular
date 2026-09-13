# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Operadores e analistas de frota internos que precisam consultar rapidamente o estado da frota e dos veículos.
- Usuários autorizados que entram por login e acessam áreas protegidas por guardas de rota.

## Product Purpose

O produto centraliza na web o acompanhamento operacional de veículos Ford em uma única interface. Após autenticação, o usuário consegue avaliar um resumo rápido do mercado e da operação, navegar entre Home e Dashboard e localizar a telemetria de um veículo por VIN.

## Positioning

O dashboard atua como um painel operativo interno de visão de frota, com foco em leitura rápida, alerta operacional e navegação específica por modelo e veículo. Ele oferece uma visão funcional e orientada à decisão, sem substituir sistemas de gestão completa de frota.

## Operating Context

- A aplicação é usada em ambiente interno, em navegador, em desktop e em telas menores.
- O fluxo principal é: login → Home → Dashboard → busca por VIN.
- O shell autenticado mantém a navegação em sidebar, cabeçalho responsivo e ação de sair.
- A experiência e os rótulos do produto estão em português brasileiro.
- A interface depende de uma API REST local em `http://localhost:3001` para autenticação e dados operacionais.

## Capabilities and Constraints

- Login com usuário e senha, com feedback de erro.
- Home com recepção autenticada e destaque visual de um veículo.
- Dashboard com seleção de modelo, cartões de métricas, vitrine do veículo e tabela de telemetria.
- Busca por VIN com comportamento responsivo, debounce e cancelamento de consultas anteriores.
- Visualização de vendas, conectividade e atualizações de software por modelo.
- Restrição de acesso por autenticação e guards de rota.
- Não há edição de veículos, métricas ou dados de telemetria pela interface.
- Não há persistência local de usuários nem gestão de usuários na aplicação.
- Stack implementado em Angular 20 com standalone components, TypeScript 5.9, Signals, RxJS e CSS puro com custom properties.
- Testes unitários usam Karma/Jasmine.

## Brand Commitments

- Identidade Ford expressa por azul profundo, superfícies claras e imagens de veículos como elemento de marca.
- Ambiente operacional premium, silencioso e preciso, com foco em legibilidade e confiança.
- Conteúdo atual e rótulos em português brasileiro.

## Evidence on Hand

- Repositório do projeto com aplicação Angular e estrutura de componentes em `src/`.
- API esperada para autenticação e dados: `POST /login`, `GET /vehicles` e `POST /vehicleData` em `http://localhost:3001`.
- Sem a API local, as telas dependentes de dados não carregam seu conteúdo operacional.
- Não há evidência de mapas, alertas avançados, relatórios exportáveis, análises históricas ou ferramentas de edição de dados.

## Product Principles

- Priorizar leitura rápida e decisões confiáveis sobre estética de apresentação.
- Manter ações previsíveis e caminhos claros para o usuário interno.
- Usar a identidade Ford de forma discreta e funcional, sem competir com os dados operacionais.
- Preservar acessibilidade básica e clareza de interação em desktop e mobile.
- Construir um painel de observação útil, orientado à operação e à análise rápida.

## Accessibility & Inclusion

- Labels associados e foco visível em controles.
- Landmarks semânticos e mensagens de erro anunciadas por `role="alert"`.
- Tabelas com cabeçalhos e contraste compatível com requisitos básicos de acessibilidade.
- Navegação e interação pensadas para uso em telas pequenas e grandes.
