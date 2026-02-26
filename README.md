# AMNC Tech - Portfólio Institucional

Site institucional da AMNC Tech, apresentando serviços de **SaaS**, **CRMs** e **Automações com IA**.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (ícones)

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

## Build para produção

```bash
npm run build
```

Os arquivos de saída serão gerados na pasta `dist/`.

## Preview da build

```bash
npm run preview
```

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/       → Header, Footer
│   └── sections/     → Hero, Services, About, Contact
├── App.tsx           → Composição principal
├── main.tsx          → Entry point
└── index.css         → Tailwind + tema customizado
```
