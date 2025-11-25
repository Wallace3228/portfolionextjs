# Portfolio migrated to Next.js

This repository is an automated conversion of your React + Vite portfolio to Next.js (App Router).
It includes:

- App router structure (`/app`)
- Tailwind CSS integration
- Use of `next/image` for optimized images
- Server Components by default; `use client` only where needed
- Metadata per page and improved SEO handling
- Static `public/assets` folder for your media (replace placeholders with original files)

## Notes about assets

I created text placeholder files in `public/assets/` for:
- profile.jpg
- demo1.mp4, demo2.webm, demo3.webm, demo4.mp4
- cv.pdf (placeholder)

**Replace these placeholders with your original media files** preserving the same filenames. After that, run:

```
npm install
npm run dev
```

## Improvements & comments

Each component contains comments explaining which Next.js optimization it uses (Server Components, next/image, metadata, etc.).

If you want, I can adapt the project to the exact Next.js version you prefer.
