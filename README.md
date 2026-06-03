# Ajay Kumar — Portfolio

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Deploy to Vercel (Free, Beginner-Friendly — No Terminal Needed)

### Step 1 — Put your code on GitHub
1. Go to [github.com](https://github.com) → **New repository** → name it `portfolio`
2. Click **Upload files** → drag the entire `ajay-portfolio` folder contents → **Commit changes**

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Sign up with GitHub** (free)
2. Click **Add New → Project**
3. Find your `portfolio` repo → click **Import**
4. Vercel auto-detects Vite. Just click **Deploy** ✅
5. Your site is live at `https://portfolio-xyz.vercel.app` in ~30 seconds

### Step 3 — Auto-deploy on every push
Every time you push a change to GitHub → Vercel automatically rebuilds. No extra steps.

### Optional: Custom domain
Vercel Settings → Domains → add your own domain for free SSL.

---

## 💻 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📸 Add Your Photo

1. Put your photo file (e.g. `photo.jpg`) inside the `/public/` folder
2. Open `src/components/Hero.jsx`
3. Find the comment `{/* ✅ REPLACE THIS WITH YOUR PHOTO */}`
4. Replace the `<div>` block with:
   ```jsx
   <img src="/photo.jpg" alt="Ajay Kumar" className="w-full h-full object-cover" />
   ```

---

## 🔗 Update Project Links

In `src/components/Projects.jsx`, replace `github: '#'` and `demo: '#'` with your actual GitHub repo and live demo URLs.

---

## 🎨 Customize Colors

All colors are in `tailwind.config.js`:
- `cyan: '#00e5ff'` — primary accent (change to any color)
- `pink: '#ff2d78'` — secondary accent
- `bg: '#050510'` — main background

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          ← typewriter + glowing profile ring + stats
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx    ← timeline layout
│   ├── Projects.jsx      ← animated cards
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── FadeIn.jsx        ← scroll animation wrapper
├── hooks/
│   └── useInView.js      ← intersection observer hook
├── App.jsx
├── main.jsx
└── index.css
```
