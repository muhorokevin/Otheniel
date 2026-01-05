
# Otheniel Ent - Deployment Guide

This project is a high-performance React application utilizing the Gemini API for immigration consultancy.

## Prerequisites
- A [Google AI Studio](https://aistudio.google.com/) API Key.
- A GitHub, GitLab, or Bitbucket account.

## Step-by-Step Deployment

### 1. Push to GitHub
Initialize your repository and push the code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel (Recommended)
1. Go to [Vercel.com](https://vercel.com) and sign in.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. **Important: Environment Variables**
   - Expand the "Environment Variables" section.
   - Add a new variable:
     - **Key**: `API_KEY`
     - **Value**: `your_gemini_api_key_here`
5. Click **"Deploy"**.

### 3. Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com).
2. Click **"Import from Git"**.
3. Select your repository.
4. In the **Site Settings** > **Environment Variables**, add `API_KEY`.
5. Click **"Deploy Site"**.

## Local Development
If you want to run this locally, ensure you have a tool that supports ES modules (like Vite or a simple local server) and that you define `process.env.API_KEY` in your build environment.

---
*Disclaimer: Otheniel Ent is a consultancy platform. Ensure all legal data provided remains compliant with the latest Kenyan Gazette Supplements.*
