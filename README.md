# 💍 Lydia & Ndiana — Wedding Website

**Divine's Choice '26 · 15th August 2026**

A premium, responsive wedding website built with **Next.js** and deployed on **Vercel**.

---

## 🚀 Deploying to Vercel via GitHub

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit — Lydia & Ndiana wedding site"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy** — done! 🎉

---

## 💻 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
wedding-site/
├── components/
│   ├── Layout.js       # Global layout wrapper
│   ├── Navbar.js       # Sticky navigation
│   ├── Footer.js       # Global footer
│   └── Countdown.js    # Countdown timer
├── pages/
│   ├── index.js            # Home
│   ├── our-story.js        # Our Story
│   ├── wedding-details.js  # Wedding Details
│   ├── rsvp.js             # RSVP (Tally embed)
│   ├── gallery.js          # Gallery
│   ├── gifts.js            # Gifts / Donate
│   ├── accommodation.js    # Accommodation
│   ├── faq.js              # FAQ
│   ├── contact.js          # Contact
│   ├── vendors.js          # Our Vendors
│   └── 404.js              # 404 page
├── styles/
│   └── globals.css     # Global styles & design tokens
├── public/             # Static assets (add photos here)
├── package.json
├── next.config.js
└── vercel.json
```

---

## 🖼️ Adding Real Photos

1. Place photos in the `/public/` directory
2. Reference them in pages as `/your-photo.jpg`
3. Use Next.js `<Image>` component for optimization:
   ```jsx
   import Image from 'next/image';
   <Image src="/couple.jpg" width={600} height={800} alt="Lydia and Ndiana" />
   ```

### Gallery Page
Replace the placeholder `div` elements in `pages/gallery.js` with real `<Image>` components.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--emerald` | `#1a6b4a` | Primary green |
| `--gold` | `#c9a84c` | Accent gold |
| `--white` | `#ffffff` | White |
| `--cream` | `#fafaf7` | Background |

**Fonts:** Cormorant Garamond (serif) + Jost (sans-serif) + Great Vibes (script)

---

## 📝 Customization Checklist

- [ ] Add real couple photos to `/public/` and update gallery
- [ ] Update Google Maps embed in `wedding-details.js` with exact venue coordinates
- [ ] Verify Tally form URL in `rsvp.js`
- [ ] Confirm all phone numbers in `contact.js` and `accommodation.js`
- [ ] Add vendor website links in `vendors.js` once confirmed
- [ ] Add a favicon to `/public/favicon.ico`
- [ ] Test RSVP form submission
- [ ] Test copy-to-clipboard on gifts page (especially mobile)

---

## 🤝 Credits

Website designed by **[Hi-Tech Surge](https://htsdigital.com)**
