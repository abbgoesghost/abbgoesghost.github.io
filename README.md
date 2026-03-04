
<p align="center">
  <img src="https://img.icons8.com/color/48/000000/magritte.png"/> 
</p>

<h1 align="center">
  abbgoesghost.github.io - v1 
</h1>

<p align="center">
  The first iteration of my personal portfolio built with React.ts. Features interactive ASCII art, responsive design, and sections for about, experience, projects, and awards.
</p>

<p align="center">
  <a href="https://abbgoesghost.github.io/" target="_blank">Live Demo (current deploy)</a> •
  <a href="https://github.com/abbgoesghost/aboubacar/" target="_blank">Source Code</a>
</p>

<img width="1306" alt="Portfolio Screenshot" src="https://github.com/abbgoesghost/aboubacar/.png">  


## 🛠 Setup

1. Install dependencies

   ```sh
   npm install
   # or
   yarn
   ```

2. Start development server

   ```sh
   npm run start
   # or
   yarn start
   ```

## 🚀 Build for production

1. Generate static build (ready for Netlify, Vercel, GitHub Pages and mm.)

   ```sh
   npm run build
   # or
   yarn build
   ```

## 🎨 Color Palette

| Color          | Hex                                                                |
|----------------|--------------------------------------------------------------------|
| Black          | ! `#0a0a0a` |
| White          | ! `#e0e0e0` |
| Light Green    | ! `#00ff00` |


## Features / What's inside

- Interactive ASCII art hero with mouse repel effect (see `src/components/InteractiveAscii.tsx`)
- Responsive single-page layout with smooth nav
- Hardcoded projects/experience/awards sections (easy to edit in `src/App.tsx`)
- Tech stack highlighted in about section
- Simple footer + email CTA

Fork & customize:
- Change texts, projects, skills in `src/App.tsx`
- Update ASCII art string in `InteractiveAscii.tsx` if you want a personal signature
- Adjust colors in CSS variables or add Tailwind/MUI if you switch
- Deploy to Netlify or Vercel: connect repo → auto-build on push

Feel free to use as template for your own portfolio – just give credit if you keep the structure! 🚀
