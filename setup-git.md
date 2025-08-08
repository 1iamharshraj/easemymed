# EaseMyMed Git Setup Guide

## Prerequisites
1. Install Git from https://git-scm.com/download/win
2. Create GitHub account at https://github.com

## Commands to Run in Order:

```bash
# 1. Configure Git (replace with your details)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Initialize repository
git init

# 3. Add all files
git add .

# 4. Initial commit
git commit -m "Initial commit: EaseMyMed healthcare platform with Untitled UI design system

Features:
- React.js frontend with modern UI components
- Untitled UI design system implementation
- Complete color palette and typography system
- Responsive design for all devices
- Multiple pages: Home, About, Contact, Blogs, Camps
- Medical camp management solution
- AI-powered healthcare platform
- Tailwind CSS for styling
- Professional navigation and footer"

# 5. Set main branch
git branch -M main

# 6. Add remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/easemymed.git

# 7. Push to GitHub
git push -u origin main
```

## After Pushing:

Your project will be available at:
`https://github.com/yourusername/easemymed`

## Project Structure:
```
easemymed/
├── frontend/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Blogs.jsx
│   │   │   └── EaseMyMedCamps.jsx
│   │   ├── Component/
│   │   ├── UI/
│   │   └── Blogs/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
└── README.md (you should add this)
```