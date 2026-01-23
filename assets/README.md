# Assets Folder Structure

This folder contains all static assets for the portfolio website.

## Folder Structure

```
assets/
├── resume/
│   └── kevin-yu-resume.pdf    # Your resume PDF file
├── research/
│   ├── aapl-research.pdf      # Apple equity research report
│   ├── msft-research.pdf      # Microsoft equity research report
│   ├── unh-research.pdf       # UnitedHealth equity research report
│   ├── jpm-research.pdf       # JPMorgan equity research report
│   ├── cost-research.pdf      # Costco equity research report
│   └── xom-research.pdf       # Exxon Mobil equity research report
└── images/
    └── (optional profile photo or project screenshots)
```

## How to Add Your Files

### Resume
1. Export your resume as a PDF file
2. Rename it to `kevin-yu-resume.pdf` (or update the filename in `index.html`)
3. Place it in the `assets/resume/` folder

### Equity Research Reports
1. Export your research reports as PDF files
2. Name them using the ticker symbol (e.g., `aapl-research.pdf`)
3. Place them in the `assets/research/` folder
4. Update the `index.html` file with the correct filenames and content

### Alternative: Google Docs Links
If you prefer to host research reports on Google Docs:
1. Open the research card in `index.html`
2. Replace the `href` attribute with your Google Docs share link
3. Example: `href="https://docs.google.com/document/d/YOUR_DOC_ID/view"`

## File Size Recommendations
- Resume PDF: Keep under 2MB for fast loading
- Research PDFs: Keep under 5MB each for optimal performance
- Images: Compress before uploading (use tools like TinyPNG)

## Supported Formats
- Documents: PDF (recommended), Google Docs links
- Images: PNG, JPG, WebP (WebP preferred for smaller file sizes)
