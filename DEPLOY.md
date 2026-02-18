# Vercel Deployment Guide

## Quick Deploy

1. **Install Vercel CLI** (optional, for command line deployment):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard** (recommended):
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub/GitLab/Bitbucket
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts and your site will be live!

## Configuration

The project is already configured with:
- ✅ `vercel.json` - Handles SPA routing (no 404 errors)
- ✅ `public/` folder - Contains all media assets
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`

## Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Media Files

All media files are in the `public/` folder:
- Video: `coverr-temp-gs6twatermarkedvideo0e1d415d9659a4bef89b9e2fb498b7c70mp4-2495-1080p.mp4`
- Flower image: `download__5_-removebg-preview (1).png`
- Audio: `cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3`

These will be served from the root path (e.g., `/video.mp4`)

## No 404 Errors

The `vercel.json` configuration ensures all routes redirect to `index.html`, so your single-page app works correctly with client-side routing.

## Environment Variables

No environment variables needed for this project.

## Custom Domain (Optional)

After deployment, you can add a custom domain in the Vercel dashboard under:
Project Settings → Domains
