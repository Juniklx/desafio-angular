# Contexto do produto

## Visão geral

O **Dashboard de Frota Ford** é uma aplicação web interna para acompanhar uma frota de
veículos Ford em um único lugar. Após autenticar, o usuário pode consultar um resumo
operacional, navegar entre a Home e o Dashboard e buscar a telemetria de um veículo pelo
seu VIN.

## Usuários

- Operadores e analistas de frota que precisam consultar rapidamente o estado dos veículos.
- Usuários internos autorizados, com acesso protegido por autenticação e guards de rota.

## Objetivos

- Oferecer uma entrada de acesso simples e clara.
- Dar uma visão imediata de vendas, conectividade e atualizações de software por modelo.
- Permitir a seleção de um modelo e a visualização contextual de sua imagem.
- Encontrar telemetria por VIN com busca responsiva, debounce e cancelamento de consultas
  anteriores.
- Funcionar bem em desktop e em telas menores, mantendo a navegação compreensível.

## Não objetivos

- Substituir uma plataforma completa de gestão ou manutenção de frota.
- Editar veículos, métricas ou dados de telemetria pela interface.
- Persistir ou administrar usuários localmente.
- Fornecer mapas, alertas avançados, relatórios exportáveis ou análises históricas.

## Superfícies e fluxos

- **Login:** autenticação de usuário e senha, com feedback de erro.
- **Home:** recepção do usuário autenticado e atalho para o Dashboard, com destaque visual
  do veículo.
- **Dashboard:** seleção de modelo, cartões de métricas, vitrine do veículo e tabela de
  telemetria pesquisável por VIN.
- **Shell autenticado:** sidebar com navegação para Home/Dashboard e ação de sair, além de
  cabeçalho responsivo.

## Dados e integrações

A aplicação consome uma API REST local em `http://localhost:3001`:

- `POST /login` para autenticação;
- `GET /vehicles` para listar veículos;
- `POST /vehicleData` para buscar telemetria por VIN.

Sem essa API, as telas dependentes de dados não conseguem carregar seu conteúdo operacional.

## Direção de experiência

- Priorizar leitura rápida, hierarquia visual nítida e ações previsíveis.
- Usar a identidade Ford com azul profundo, superfícies claras, tipografia sans-serif e
  imagens de veículos como elemento de marca.
- Manter métricas e estados operacionais escaneáveis, sem competir com a tarefa principal.
- Preservar acessibilidade básica: labels associados, foco visível, landmarks semânticos,
  mensagens de erro anunciadas e tabelas com cabeçalhos.
- Ser responsivo: sidebar fixa em telas amplas e menu recolhível em telas menores.

## Restrições técnicas

- Angular 20 com standalone components e TypeScript 5.9.
- CSS puro com custom properties; não há framework visual.
- Reatividade com Signals e RxJS.
- Testes unitários com Karma/Jasmine.
- O conteúdo e os rótulos atuais estão em português brasileiro.
- A aplicação deve continuar compatível com Node.js 20+ e Angular CLI 20.x.
