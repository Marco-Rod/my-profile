# Public Assets Directory

This directory contains all static assets that will be served directly by the web server.

## 📁 Directory Structure

```
public/
├── favicon.svg                    # Site favicon (SVG format)
├── assets/
│   ├── README.md                  # General assets documentation
│   ├── cv/
│   │   ├── CV_Marco_ES.pdf        # ⚠️ PLACEHOLDER - Spanish CV
│   │   ├── CV_Marco_EN.pdf        # ⚠️ PLACEHOLDER - English CV
│   │   ├── CV_Marco_ES_TEMPLATE.html  # HTML template for Spanish CV
│   │   ├── CV_Marco_EN_TEMPLATE.html  # HTML template for English CV
│   │   └── README.md              # CV creation instructions
│   ├── images/
│   │   ├── profile.svg            # ⚠️ PLACEHOLDER - Profile photo
│   │   ├── logo.svg               # ⚠️ PLACEHOLDER - Site logo
│   │   ├── README.md              # Images documentation
│   │   └── projects/
│   │       ├── project1.svg       # ⚠️ PLACEHOLDER - Project screenshot 1
│   │       ├── project2.svg       # ⚠️ PLACEHOLDER - Project screenshot 2
│   │       ├── project3.svg       # ⚠️ PLACEHOLDER - Project screenshot 3
│   │       ├── project4.svg       # ⚠️ PLACEHOLDER - Project screenshot 4
│   │       ├── project5.svg       # ⚠️ PLACEHOLDER - Project screenshot 5
│   │       └── project6.svg       # ⚠️ PLACEHOLDER - Project screenshot 6
│   └── icons/
│       └── (reserved for future icon assets)
└── README.md                      # This file
```

## ⚠️ IMPORTANT: Placeholder Files

All image and PDF files are **PLACEHOLDERS** that must be replaced with your actual content:

### Must Replace:
- ✅ **CV PDFs** (`assets/cv/CV_Marco_ES.pdf`, `assets/cv/CV_Marco_EN.pdf`)
- ✅ **Profile Photo** (`assets/images/profile.svg`)
- ✅ **Logo** (`assets/images/logo.svg`)
- ✅ **Project Screenshots** (`assets/images/projects/project*.svg`)

### Current Placeholder Status:
- **CV PDFs**: Minimal PDF with placeholder text
- **Profile Photo**: SVG with gradient background and generic avatar
- **Logo**: SVG with "MR" initials on gradient background
- **Project Images**: SVG placeholders with gradient backgrounds and project numbers
- **Favicon**: SVG with "M" initial on gradient background

## 🚀 Quick Start - Replacing Assets

### 1. Replace CV PDFs
```bash
# Navigate to the CV directory
cd public/assets/cv

# Option A: Use the HTML templates
# 1. Open CV_Marco_ES_TEMPLATE.html in your browser
# 2. Fill in your information
# 3. Print to PDF and save as CV_Marco_ES.pdf

# Option B: Create your own CV and copy it
cp ~/path/to/your/CV_Spanish.pdf CV_Marco_ES.pdf
cp ~/path/to/your/CV_English.pdf CV_Marco_EN.pdf
```

See `assets/cv/README.md` for detailed CV creation instructions.

### 2. Replace Images
```bash
# Navigate to images directory
cd public/assets/images

# Replace profile photo
cp ~/path/to/your/photo.jpg profile.jpg

# Replace logo
cp ~/path/to/your/logo.png logo.png

# Replace project screenshots
cd projects
cp ~/path/to/project1-screenshot.jpg project1.jpg
cp ~/path/to/project2-screenshot.jpg project2.jpg
# ... and so on
```

See `assets/images/README.md` for image specifications and optimization tips.

### 3. Update Code References (if needed)
If you change file extensions (e.g., `.svg` to `.jpg`), update references in:
- `src/utils/pdf-generator.ts` (for CV PDFs)
- Component files that use images (check `src/components/sections/`)
- `src/data/projects.ts` (for project images)

## 📝 How Static Files Are Served

Files in the `public/` directory are served at the root URL:

| File Path | URL |
|-----------|-----|
| `public/favicon.svg` | `https://yoursite.com/favicon.svg` |
| `public/assets/cv/CV_Marco_ES.pdf` | `https://yoursite.com/assets/cv/CV_Marco_ES.pdf` |
| `public/assets/images/profile.svg` | `https://yoursite.com/assets/images/profile.svg` |
| `public/assets/images/projects/project1.svg` | `https://yoursite.com/assets/images/projects/project1.svg` |

## 🔧 Build Process

During build (`npm run build`):
1. All files in `public/` are copied to `dist/` as-is
2. No transformation or optimization is applied
3. Structure is preserved exactly

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Both CV PDFs exist and are up-to-date
- [ ] Profile photo is professional and high quality
- [ ] Logo is clear and works on dark backgrounds
- [ ] All 6 project screenshots are real (not placeholders)
- [ ] Favicon displays correctly in browser tab
- [ ] All images are optimized for web (< 500KB each)
- [ ] CV download functionality works in the portfolio
- [ ] Images display correctly on both light and dark backgrounds

## 📚 Additional Documentation

For detailed instructions, see:
- `assets/README.md` - General assets overview
- `assets/cv/README.md` - CV creation and formatting guide
- `assets/images/README.md` - Image specifications and optimization

## 🛠️ Troubleshooting

### CV Download Not Working
1. Verify PDF files exist: `ls assets/cv/*.pdf`
2. Check file permissions (should be readable)
3. Verify `pdf-generator.ts` has correct paths
4. Test in browser dev tools → Network tab

### Images Not Displaying
1. Check file paths in browser dev tools → Console
2. Verify file extensions match code references
3. Ensure images are in `public/assets/` not `src/assets/`
4. Clear browser cache and rebuild: `npm run build`

### Build Fails
1. Ensure no syntax errors in HTML template files
2. Verify all referenced files exist
3. Check file permissions
4. Try cleaning: `rm -rf dist node_modules && npm install && npm run build`

## 💡 Tips

1. **Keep originals**: Store high-res originals elsewhere, put optimized versions here
2. **Use WebP**: Modern format with better compression than JPG/PNG
3. **Lazy loading**: Large images are lazy-loaded automatically in the app
4. **Consistent naming**: Use descriptive, lowercase names with hyphens
5. **Version control**: Use `.gitignore` if you don't want to commit large files

## 📞 Need Help?

If you need assistance:
1. Check the README files in subdirectories
2. Review `src/data/` files for current portfolio data
3. Check component files for image references
4. Verify the build output in `dist/` after running `npm run build`
