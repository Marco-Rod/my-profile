# CV/Resume PDFs Directory

This directory contains the downloadable CV/Resume files in both Spanish and English.

## Current Files

### Spanish CV
- **Filename**: `CV_Marco_ES.pdf`
- **Status**: ⚠️ PLACEHOLDER - Must be replaced
- **Language**: Spanish

### English CV
- **Filename**: `CV_Marco_EN.pdf`
- **Status**: ⚠️ PLACEHOLDER - Must be replaced
- **Language**: English

## ⚠️ IMPORTANT: Replace These Files

The current PDF files are **minimal placeholders**. You MUST replace them with your actual professional CV/Resume files.

## Creating Your CV PDFs

### Information to Include

Based on your portfolio data, your CV should include:

**Personal Information:**
- Name: Marco Antonio Rodríguez Torres
- Title: Backend Developer / Senior Software Engineer
- Email: mrc5622@gmail.com
- Phone: +52 3317709591
- Location: Tonala, Jalisco, México
- GitHub: https://github.com/Marco-Rod
- LinkedIn: https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/

**Professional Summary:**
- 10+ years of experience in backend development
- Expertise in PHP, Laravel, Node.js, Python
- Cloud platforms: AWS, GCP
- Databases: MySQL, PostgreSQL, Redis, MongoDB
- DevOps: Docker, Git, CI/CD

**Work Experience:**
Your 8 employment positions (refer to `src/data/experience.ts` for details)

**Technologies & Skills:**
Refer to `src/data/technologies.ts` for your complete tech stack

**Education:**
Refer to `src/data/education.ts` for your academic credentials

**Projects:**
Feature your best projects from `src/data/projects.ts`

### Recommended CV Creation Tools

1. **Word Processors**:
   - Microsoft Word (export as PDF)
   - Google Docs (File → Download → PDF)
   - LibreOffice Writer (export as PDF)

2. **LaTeX** (for technical/academic CVs):
   - Overleaf (online LaTeX editor)
   - Templates: moderncv, awesome-cv, deedy-resume

3. **Online CV Builders**:
   - Canva (free templates)
   - Novoresume
   - Resume.io
   - Zety

4. **Professional Design**:
   - Adobe InDesign
   - Figma (export as PDF)
   - Sketch (export as PDF)

### CV Format Guidelines

**For Both Languages:**
- **File format**: PDF (not Word doc)
- **File size**: Keep under 1-2 MB for fast downloads
- **Page length**: 1-2 pages (optimal), 3 pages maximum
- **Font size**: 10-12pt for body text
- **Margins**: 0.5-1 inch on all sides
- **File naming**: Keep as `CV_Marco_ES.pdf` and `CV_Marco_EN.pdf`

**Design Tips:**
- Use professional fonts (Arial, Calibri, Times New Roman, or modern sans-serif)
- Ensure good contrast and readability
- Use consistent formatting for sections
- Add subtle color accents (match portfolio theme colors: #3b82f6, #06b6d4)
- Test printability (black & white printing should still be readable)

### Translation Notes (Spanish ↔ English)

**Ensure consistency between languages:**
- Job titles and dates should match
- Technologies should use standard names in both languages
- Adapt descriptions naturally (don't use Google Translate verbatim)
- Professional tone in both languages

**Spanish-specific considerations:**
- Use "Experiencia Laboral" (Work Experience)
- Use "Educación" (Education)
- Use "Habilidades Técnicas" (Technical Skills)

**English-specific considerations:**
- Use "Professional Experience" or "Work Experience"
- Use "Education" or "Academic Background"
- Use "Technical Skills" or "Core Competencies"

## How to Replace the Placeholder PDFs

### Method 1: Direct Replacement
1. Create your CV PDFs with the exact filenames: `CV_Marco_ES.pdf` and `CV_Marco_EN.pdf`
2. Replace the placeholder files in this directory
3. Test the download functionality in the portfolio website

### Method 2: Custom Filenames (requires code update)
1. Create your CV PDFs with custom names
2. Update the download function in `src/utils/pdf-generator.ts`:
   ```typescript
   export const downloadCV = (language: 'es' | 'en') => {
     const filename = language === 'es' 
       ? 'Your_Custom_Name_ES' 
       : 'Your_Custom_Name_EN';
     const link = document.createElement('a');
     link.href = `/assets/cv/${filename}.pdf`;
     link.download = `${filename}.pdf`;
     link.click();
   };
   ```

## Testing Your CV PDFs

After replacing the placeholders:

1. **Build the project**: `npm run build`
2. **Test locally**: `npm run preview`
3. **Click "Descargar CV" / "Download CV"** button in the Hero section
4. **Verify**:
   - Spanish version downloads when language is set to ES
   - English version downloads when language is set to EN
   - PDF opens correctly in PDF readers
   - All content is readable and properly formatted

## File Size Optimization

If your PDF files are too large (> 2 MB):

1. **Reduce image quality** in the PDF (if you included photos)
2. **Remove embedded fonts** (use system fonts instead)
3. **Use PDF compression tools**:
   - Online: SmallPDF, PDF Compressor
   - Desktop: Adobe Acrobat Pro, Preview (Mac)
   - CLI: `ghostscript` with compression settings

### Example Ghostscript compression:
```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=CV_Marco_ES_compressed.pdf CV_Marco_ES.pdf
```

## Questions?

If you need help creating or formatting your CVs:
- Refer to your work experience in `src/data/experience.ts`
- Check your tech stack in `src/data/technologies.ts`
- Review your projects in `src/data/projects.ts`
- Ensure consistency between portfolio data and CV content
