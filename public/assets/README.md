# Assets Directory

This directory contains all static assets for the portfolio website.

## Directory Structure

```
assets/
├── cv/              # CV/Resume PDFs in Spanish and English
├── images/          # Images for profile, logo, and projects
│   ├── projects/    # Project screenshots/thumbnails
│   ├── profile.svg  # Profile photo placeholder
│   └── logo.svg     # Logo placeholder
└── icons/           # (Reserved for future icons)
```

## Replacing Placeholder Assets

All assets in this directory are **placeholders** that should be replaced with your actual content:

### Profile Photo (`images/profile.svg`)
- Replace with your actual profile photo
- Recommended size: 400x400px
- Supported formats: JPG, PNG, WebP, or SVG
- Rename your file to `profile.jpg` or `profile.png` and update references in the code

### Logo (`images/logo.svg`)
- Replace with your actual logo or brand
- Recommended size: 200x200px
- Supported formats: SVG (preferred), PNG
- Rename to `logo.svg` or `logo.png` and update references if needed

### Project Images (`images/projects/`)
- Replace `project1.svg` through `project6.svg` with actual project screenshots
- Recommended size: 800x600px (4:3 aspect ratio)
- Supported formats: JPG, PNG, WebP
- Keep the same filenames or update references in `src/data/projects.ts`

### CV/Resume PDFs (`cv/`)
- See the separate README in the `cv/` directory
- Place your Spanish CV as `CV_Marco_ES.pdf`
- Place your English CV as `CV_Marco_EN.pdf`

## Image Optimization Tips

1. **Use WebP format** when possible for better compression
2. **Compress images** before uploading using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (macOS)
3. **Use appropriate dimensions** - don't upload unnecessarily large images
4. **Add alt text** in the component code for accessibility

## File Naming Convention

- Use lowercase with hyphens: `my-project-screenshot.jpg`
- Be descriptive: `api-rest-dashboard.jpg` instead of `img1.jpg`
- Avoid spaces and special characters

## Questions?

If you need to add more assets or change the structure, update the references in:
- Component files in `src/components/`
- Data files in `src/data/`
- Configuration files (vite.config.ts, public manifests)
