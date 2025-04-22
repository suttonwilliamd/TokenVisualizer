# Token Viewer

A lightweight, interactive token explorer for GPT‑2’s vocabulary, built with Astro & React.

> **Token Viewer** lets you slide or type any token ID (0–50256) and instantly see its decoded string.

---

## 🚀 Features

- **Real‑time lookup**: Move the slider or enter a number to decode the token on the fly.
- **Hybrid static + interactive**: Served as a fully static site by Astro, with React hydration on the client.
- **Browser‑friendly decoder**: Uses the `@nem035/gpt-3-encoder` package to decode GPT‑2 tokens in the browser.
- **Zero server‑runtime**: Perfect for FTP, Netlify, GitHub Pages, or any static host.

---

## 🏗 Tech Stack

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [@nem035/gpt-3-encoder](https://www.npmjs.com/package/@nem035/gpt-3-encoder)

---

## 👩‍💻 Getting Started

### Prerequisites

- Node.js v14+  
- npm (or yarn)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/token-viewer.git
   cd token-viewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:4321](http://localhost:4321) in your browser.

---

## 📦 Build & Deploy

1. **Build the static output**
   ```bash
   npm run build
   ```

2. **Preview locally** (optional)
   ```bash
   npm run preview
   ```

3. **Deploy**

   - Copy the contents of `dist/` to any static host (FTP, S3, Netlify, GitHub Pages).
   - No extra server configuration needed.

---

## 🎨 Customization

- **Styling**: Inline styles are used for quick demo, feel free to swap in Tailwind, CSS modules, or your favorite UI library.
- **Token library**: To switch to another tokenizer (e.g. `@dqbd/tiktoken`), update `src/components/TokenViewer.jsx` import and decoding logic.

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b my-feature`  
3. Commit your changes: `git commit -m "feat: add awesome feature"`  
4. Push to the branch: `git push origin my-feature`  
5. Open a Pull Request — we’ll review and merge!


---

> Built with ❤️ by [William64](https://github.com/suttonwilliamd)

