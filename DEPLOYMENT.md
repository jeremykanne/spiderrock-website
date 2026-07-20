# SpiderRock Website Deployment Guide

## What You Have

✅ **Version 1** (main branch): Enhanced Polish
- Smooth animations and transitions
- Refined components and spacing
- Modern fintech aesthetic
- Files: index.html, platform.html, brokerage.html, data.html, contact.html

✅ **Version 2** (index-v2.html): Bold Alternative
- Bolder typography and colors
- Strong red accent bar
- More editorial approach
- Alternative design direction

## Deploy to Netlify (5 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `spiderrock-website`
3. **Description**: "SpiderRock institutional trading platform website redesign"
4. Choose **Public** (optional)
5. Click **Create repository**
6. Copy the URL shown (something like `https://github.com/jeremykanne/spiderrock-website.git`)

### Step 2: Push to GitHub

In Terminal, navigate to the project and push:

```bash
cd ~/Claude/SpiderRock/spiderrock-build

# Add the remote (replace with your repo URL from Step 1)
git remote add origin https://github.com/jeremykanne/spiderrock-website.git
git branch -M main
git push -u origin main

# Also push Version 2 as a branch for preview
git checkout -b design-v2
# Create a copy of index-v2.html as index.html for this branch
cp index-v2.html index.html
git add index.html
git commit -m "Version 2: Bold alternative design"
git push -u origin design-v2
```

### Step 3: Deploy to Netlify

1. Go to https://app.netlify.com (log in with your account)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Select `jeremykanne/spiderrock-website`
5. **Build command**: (leave blank - it's just HTML)
6. **Publish directory**: `.` (current directory)
7. Click **Deploy site**

### Step 4: View Your Designs

Once deployed, you'll get URLs like:
- **Main URL**: `https://your-site-name.netlify.app` (Version 1)
- **Design V2 Preview**: https://design-v2--your-site-name.netlify.app (Version 2)

## Compare Both Versions

1. Open both URLs side-by-side
2. Review the design directions
3. Pick which resonates, or combine elements from both
4. Share feedback

## Next Steps for Iteration

To make changes:
1. Edit HTML files locally
2. Push to GitHub: `git add . && git commit -m "your message" && git push`
3. Netlify auto-deploys (updates live in ~30 seconds)
4. Share feedback on the live site

## File Structure

```
spiderrock-website/
├── index.html          (Version 1 - Homepage)
├── index-v2.html       (Version 2 - Alternative)
├── platform.html       (Trading Platform page)
├── brokerage.html      (Brokerage Services page)
├── data.html           (Data & Analytics page)
├── contact.html        (Contact page)
├── .gitignore
└── DEPLOYMENT.md       (This file)
```

## Questions?

If you hit any issues during deployment, let me know and I can help troubleshoot!
