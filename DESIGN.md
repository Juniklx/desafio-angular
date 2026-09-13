# Ford Fleet Command — Design System

## Direção

Interface operacional premium, silenciosa e precisa. A identidade Ford aparece em azul
elétrico, navy profundo e imagens de veículos; a experiência privilegia leitura rápida,
confiança e ações previsíveis.

## Tokens

### Cor

- `--color-ink`: texto principal e títulos, navy `#0A1226`.
- `--color-brand`: ação primária, Ford blue `#0B3D91`.
- `--color-brand-hover`: estado hover `#144DB0`.
- `--color-brand-soft`: superfícies de apoio `#E8EEFB`.
- `--color-bg`: canvas `#F5F7FA`.
- `--color-surface`: cards e controles `#FFFFFF`.
- `--color-border`: divisores `#E1E5EE`.
- `--color-text`: texto funcional `#151C31`.
- `--color-text-muted`: metadados `#626C82`.
- `--color-success` / `--color-danger`: estados operacionais.

### Tipografia

- `Sora`: display, títulos, labels de ação e navegação.
- `Inter`: corpo, formulários e tabelas.
- `IBM Plex Mono`: valores numéricos e coordenadas.
- Escala: `12 / 14 / 16 / 18 / 22 / 28 / 36px`.

### Espaçamento

Escala base de 4px: `4, 8, 12, 16, 24, 32, 48, 64px`.
Componentes usam padding de 16–24px; páginas usam gutters de 16px no mobile e 32px no
desktop.

### Forma e elevação

- Radius: `6px` controle pequeno, `10px` controle padrão, `18px` card, pill para status.
- Cards: borda sutil + sombra difusa, sem gradientes decorativos excessivos.
- Hover: elevação e borda, nunca mudança brusca de layout.

## Componentes

- **Botão primário:** azul Ford, texto branco, 48px de altura, foco visível, elevação no
  hover.
- **Input/select:** fundo de canvas, borda neutra, ícone à esquerda e halo azul no foco.
- **Card:** superfície branca, border-radius 18px, padding 24px.
- **Status pill:** verde/vermelho com ponto de estado e texto legível.
- **Container:** `max-width: 1440px`, centralizado, grid fluido.

## Layout e responsividade

- Mobile-first; breakpoint principal em `860px`.
- Mobile: shell em uma coluna, sidebar como drawer e conteúdo com 16px de gutter.
- Desktop: sidebar fixa de 248px, header persistente e conteúdo em coluna centralizada.
- Dashboard usa grid de métricas com `minmax(200px, 1fr)` e tabela com overflow horizontal
  controlado.

## Acessibilidade

Foco visível em todos os controles, labels associados, landmarks semânticos, contraste AA,
áreas de toque mínimas de 44px e estados de erro anunciados por `role="alert"`.
