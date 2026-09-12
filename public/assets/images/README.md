# Images Directory

This directory contains images for the portfolio website.

## Current Placeholder Files

### Profile Photo
- **File**: `profile.svg`
- **Current**: SVG placeholder with gradient
- **Replace with**: Your actual professional headshot
- **Recommended specs**:
  - Size: 400x400px
  - Format: JPG, PNG, or WebP
  - Style: Professional headshot with clean background
  - Example name: `profile.jpg`

### Logo
- **File**: `logo.svg`
- **Current**: SVG placeholder with "MR" initials
- **Replace with**: Your personal brand logo or keep initials
- **Recommended specs**:
  - Size: 200x200px (or scalable SVG)
  - Format: SVG (preferred) or PNG with transparency
  - Style: Simple, recognizable, works on dark backgrounds

### Project Screenshots (`projects/` subdirectory)
All project images are currently SVG placeholders with gradient backgrounds:
- `project1.svg` - Blue to Purple gradient
- `project2.svg` - Cyan to Blue gradient
- `project3.svg` - Green to Cyan gradient
- `project4.svg` - Orange to Red gradient
- `project5.svg` - Purple to Pink gradient
- `project6.svg` - Indigo to Purple gradient

**Replace with**: Actual screenshots of your projects

**Recommended specs**:
- Size: 800x600px (4:3 aspect ratio)
- Format: JPG or WebP for photos, PNG for UI screenshots
- Content: Show the main interface, dashboard, or key feature
- Filename: Keep as `project1.jpg`, `project2.jpg`, etc., or update `src/data/projects.ts`

## How to Replace Images

### Option 1: Keep Same Filenames (Easiest)
1. Rename your images to match existing names (e.g., `profile.jpg`, `project1.jpg`)
2. Replace the placeholder files in this directory
3. Update file extensions in code if needed (`.svg` → `.jpg`)

### Option 2: Use Custom Filenames
1. Add your images with descriptive names (e.g., `headshot-marco.jpg`, `api-project-screenshot.jpg`)
2. Update references in the code:
   - Profile photo: Update in component files (e.g., `AboutSection.tsx`, `HeroSection.tsx`)
   - Logo: Update in `Header.tsx` or layout components
   - Projects: Update the `image` field in `src/data/projects.ts`

## Image Optimization

Before uploading images, optimize them for web:

### Tools
- **Online**: TinyPNG, Squoosh, Compressor.io
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **CLI**: `imagemagick`, `jpegoptim`, `optipng`

### Commands (if you have ImageMagick installed)
```bash
# Resize and optimize a profile photo
magick profile-original.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 profile.jpg

# Resize and optimize a project screenshot
magick project-screenshot.png -resize 800x600 -quality 85 project1.jpg
```

## Accessibility

When you add images, ensure you:
1. Add descriptive `alt` attributes in the component code
2. Use high contrast for readability
3. Don't rely on color alone to convey information
4. Consider how images look on dark backgrounds (the portfolio uses a dark theme)

## Need More Project Slots?

If you need more than 6 project images:
1. Add more image files (e.g., `project7.jpg`, `project8.jpg`)
2. Update `src/data/projects.ts` to reference them
3. The ProjectsSection component will automatically display them
