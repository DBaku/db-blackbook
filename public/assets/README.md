Assets folder — place your images/files here

Structure (public path = `/assets`):

- /assets/hero/

  - hero.jpg | hero.webp => Main hero portrait (recommended 1200x1200 or 800x800)

- /assets/avatar/

  - avatar.png | avatar.webp => Small avatar for navbar / meta (128x128)

- /assets/projects/

  - project-{slug}-thumb.jpg => Project thumbnails (400x280)
  - project-{slug}-screen-1.jpg => Optional project screenshots (1280x720)

- /assets/screenshots/

  - app-1.png, app-2.png => Generic screenshots used in portfolio pages (1280x800)

- /assets/resume/
  - resume.pdf => Final PDF resume

Naming and usage

- Use kebab-case and include a descriptive slug, e.g. `project-visionarylab-thumb.jpg`.
- Reference assets from components with the `/assets/...` public URL, e.g. `/assets/hero/hero.jpg`.

Recommendations

- Prefer `webp` for smaller size where possible, fallback to `jpg`/`png`.
- Thumbnails: 400–600px wide, screenshots: 1200–1600px wide, hero: 800–1200px.
- Optimize images (squoosh, imagemin) before committing.

How to add

- Put files in the appropriate folder and commit. The dev server will serve them from `http://localhost:3000/assets/...`.

Example component usage

- <img src="/assets/hero/hero.jpg" alt="Hero" />
- In Next.js `Image` component use `src='/assets/projects/project-foo-thumb.jpg'`.
