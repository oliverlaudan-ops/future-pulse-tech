# Future Pulse Tech 🚀

**Official Website & Blog for Future Pulse Tech**  
Built with Hugo & GitHub Pages

## 🎯 Live Site

👉 **Coming soon:** https://future-pulse.tech (Custom domain setup pending)

👉 **GitHub Pages:** https://oliverlaudan-ops.github.io/future-pulse-tech/

---

## 🛠️ Tech Stack

- **Static Site Generator:** [Hugo](https://gohugo.io/) (Extended v0.134.2)
- **Theme:** [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (Auto-deployment on push)

---

## 📁 Project Structure

```
future-pulse-tech/
├── .github/
│   └── workflows/
│       └── hugo.yml          # Auto-deployment workflow
├── content/
│   ├── _index.md          # Homepage
│   ├── about.md           # About page
│   └── blog/
│       ├── _index.md       # Blog index
│       └── *.md            # Blog articles
├── themes/
│   └── PaperMod/          # Hugo theme (submodule)
├── hugo.toml              # Main config
├── .gitignore
├── .gitmodules
└── README.md
```

---

## ✏️ How to Add a New Blog Article

### Option 1: Via GitHub Web Interface (Easy)

1. Go to `content/blog/`
2. Click **"Add file" → "Create new file"**
3. Name it: `your-article-title.md`
4. Paste this template:

```markdown
---
title: "Your Article Title"
date: 2026-01-16
draft: false
author: "Oliver Laudan"
tags: ["Tag1", "Tag2"]
categories: ["Category"]
description: "Short description for SEO"
---

## Introduction

Your content here...
```

5. **Commit changes** → GitHub Actions builds the site automatically! ✅

### Option 2: Via Local Hugo (Advanced)

```bash
# Clone the repo
git clone --recurse-submodules https://github.com/oliverlaudan-ops/future-pulse-tech.git
cd future-pulse-tech

# Create new article
hugo new blog/your-article-title.md

# Edit the file in content/blog/

# Preview locally
hugo server -D

# Commit and push
git add .
git commit -m "Add new blog article"
git push origin main
```

---

## 🚀 Deployment

**Automatic deployment** happens via GitHub Actions on every push to `main`.

### Workflow:
1. You push changes to `main` branch
2. GitHub Actions builds Hugo site
3. Deploys to GitHub Pages
4. Site live at: `https://oliverlaudan-ops.github.io/future-pulse-tech/`

---

## 🌐 Custom Domain Setup

To connect `future-pulse.tech`:

1. Go to **Settings → Pages**
2. Add custom domain: `future-pulse.tech`
3. Update DNS at your domain provider:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   CNAME: oliverlaudan-ops.github.io
   ```
4. Wait for DNS propagation (~24h)
5. Enable **"Enforce HTTPS"**

---

## 📝 Content Guidelines

- **Blog articles**: Write in Markdown in `content/blog/`
- **SEO**: Use descriptive titles, meta descriptions, and tags
- **Images**: Store in `static/images/` (reference as `/images/file.png`)
- **Drafts**: Set `draft: true` in frontmatter to hide from production

---

## 👍 Contributing

This is a personal blog, but suggestions are welcome!

---

## 📝 License

Content: © 2026 Oliver Laudan  
Theme: MIT License ([PaperMod](https://github.com/adityatelange/hugo-PaperMod))

---

**Built with ❤️ by Charlotte AI & Oliver Laudan**
