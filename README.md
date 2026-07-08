<div align="center">

# Aço Verde 

**Apresentando o XCarb® — aço de baixo carbono da ArcelorMittal.**
<br>

 [English](/README-en-US.md) | **Português**

<img width="1200" alt="{578D7640-1555-4BA4-BA50-9736FC0D15EC}" src="https://github.com/user-attachments/assets/c8f6ca6c-e865-4dab-9192-7f5f498cba73" />

</div>

> Projeto integrador da formação Jornada Liga STEAM. O **Aço Verde** é uma landing page corporativa desenvolvida para aproximar empresas do programa **XCarb® da ArcelorMittal**, apresentando soluções de aço de baixa emissão que contribuem para metas ESG e para a redução do impacto ambiental da indústria.

🔗 **[Acesse o projeto →](https://green-steel-two.vercel.app/)**

---

## Funcionalidades
 
- **Tema claro/escuro** — alternância via CSS custom properties, sem recarregar a página
- **Internacionalização (PT/EN)** — sistema de traduções via JSON externo, aplicado dinamicamente via JavaScript
- **Menu mobile com animação** — overlay com transição suave, fechamento automático ao navegar
- **Grid de dados dinâmico** — renderizado via JavaScript com dados centralizados
- **Showcase de produtos com tabs** — troca de conteúdo sem recarregar a página; preload de imagens para evitar flicker
- **Layout responsivo** — breakpoints em 576px, 768px, 900px e 1100px
  
---
 
## Arquitetura CSS
 
O projeto adota uma **arquitetura CSS em camadas por responsabilidade**, inspirada no padrão ITCSS:
 
| Arquivo | Responsabilidade |
|---|---|
| `reset.css` | Neutraliza estilos padrão do navegador |
| `variables.css` | Tokens de design: cores, tipografia, espaçamentos |
| `patterns.css` | Utilitários e elementos reutilizáveis (botões, seções, headings) |
| `style.css` | Componentes específicos da página |
| `light-theme.css` | Sobrescrita de variáveis para o tema claro |
| `responsive.css` | Media queries isoladas, sem repetição de regras |
 
Essa separação facilita manutenção e escala: alterações no tema não tocam na estrutura, e regras responsivas ficam centralizadas.
 
---
 
## Tecnologias
 
- HTML5 semântico (`<section>`, `<nav>`, `aria-*`, `role`)
- CSS3 — custom properties, `clamp()`, `grid`, `backdrop-filter`
- JavaScript — DOM manipulation, Fetch API, módulo de traduções JSON
- Font Awesome · Bootstrap Icons · Google Fonts (Manrope + Playfair Display)

---
 
## Estrutura do projeto
 
```
Aco-Verde/
│
├── index.html
├── README.md
├── README-en-US.md
│
└── src/
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── patterns.css
    │   ├── style.css
    │   ├── light-theme.css
    │   └── responsive.css
    ├── js/
    │   └── app.js
    ├── assets/
    │   ├── industria.jpg
    │   ├── arcelormittal.jpg
    │   ├── vergalhao.jpg
    │   ├── barra-chata-mola.jpg
    │   └── cantoneira.jpg
    └── data/
        └── translations.json
```
