# Portfolio

Portfolio personal moderno, bilingüe (ES/EN), con transiciones — hecho con **Next.js 15**, **Framer Motion**, **Tailwind CSS** y **TypeScript**.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Cómo personalizarlo

**Todo tu contenido está en un solo archivo:** [`lib/content.ts`](lib/content.ts).
Ahí editás:

- `profile` → tu nombre, rol, frase, email, ubicación, redes (GitHub, LinkedIn, X) y link al CV.
- `about` → el párrafo de "Sobre mí".
- `skills` → tus tecnologías, agrupadas por categoría.
- `projects` → tus proyectos (título, descripción, tags, link al repo y a la demo).
- `ui` → los textos de botones y títulos de sección.

Cada texto tiene su versión `es` y `en`. El sitio detecta el idioma del navegador
y guarda la preferencia; el visitante puede cambiarlo con el toggle **ES/EN** arriba.

### CV
Poné tu PDF en `public/cv.pdf` y seteá `profile.resumeUrl = "/cv.pdf"` en `lib/content.ts`.

## Features

- 🌗 Tema claro/oscuro con toggle (recuerda la preferencia).
- 🌐 Bilingüe ES/EN con toggle.
- ✨ Transiciones suaves: entrada escalonada, reveal al hacer scroll, parallax en el hero, blobs animados.
- 📱 Responsive con menú mobile.
- ♿ Respeta `prefers-reduced-motion`.

## Estructura

```
app/            # layout, página principal, estilos globales
components/      # Nav, Hero, About, Skills, Projects, Contact, Footer, Reveal, Controls
lib/
  content.ts    # 👈 TUS DATOS (editá esto)
  i18n.tsx      # sistema de idiomas
  theme.tsx     # sistema de tema claro/oscuro
```

## Deploy

La forma más fácil es [Vercel](https://vercel.com): conectás el repo de GitHub y listo.
