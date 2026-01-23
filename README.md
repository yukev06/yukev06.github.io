# Kevin Yu - Portfolio Website

A professional portfolio website showcasing equity research, financial analysis projects, and work experience. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy customization.

## 🎯 Features

- **About / Skills Section** - Bio and skills organized by category (Finance, Research, Data Analysis, Tools, Programming)
- **Projects Section** - Card-based layout with project details, tools used, and outcomes
- **Equity Research Section** - Dedicated section for research reports with filtering by sector
- **Experience Timeline** - Professional experience and leadership roles
- **Resume Section** - Embedded PDF viewer with download option
- **Contact Section** - Contact links and optional contact form
- **Responsive Design** - Mobile-first, works on all devices
- **Accessibility** - WCAG compliant with keyboard navigation support

## 📁 Project Structure

```
yukev06.github.io/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete stylesheet
├── main.js             # JavaScript for interactions
├── README.md           # This documentation file
└── assets/
    ├── README.md       # Assets folder documentation
    ├── resume/
    │   └── kevin-yu-resume.pdf    # Your resume (add this)
    ├── research/
    │   ├── aapl-research.pdf      # Research reports (add these)
    │   ├── msft-research.pdf
    │   └── ...
    └── images/
        └── (optional images)
```

## 🚀 Getting Started

### 1. Clone or Download
```bash
git clone https://github.com/yukev06/yukev06.github.io.git
cd yukev06.github.io
```

### 2. Add Your Files
- Add your resume PDF to `assets/resume/kevin-yu-resume.pdf`
- Add research report PDFs to `assets/research/`
- (Optional) Add images to `assets/images/`

### 3. Customize Content
Open `index.html` and update the placeholder content. Look for comments marked `<!-- UPDATE: -->` to find areas that need customization:

- **About Section**: Update bio text and skills
- **Projects Section**: Replace placeholder projects with your actual projects
- **Equity Research**: Add your research reports and update the links
- **Experience**: Add your work experience and leadership roles
- **Contact**: Update email, LinkedIn, and GitHub links

### 4. Deploy
Push to GitHub and enable GitHub Pages in your repository settings, or deploy to any static hosting service.

## 📝 Customization Guide

### Adding a New Project
Add a new project card inside the `projects-grid` div:

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">Project Name</h3>
        <span class="project-date">2025</span>
    </div>
    <p class="project-description">
        Description of your project...
    </p>
    <div class="project-tools">
        <span class="tool-tag">Python</span>
        <span class="tool-tag">Excel</span>
    </div>
    <div class="project-outcomes">
        <strong>Outcome:</strong> Results of your project...
    </div>
    <div class="project-links">
        <a href="#" class="project-link">View Project →</a>
    </div>
</article>
```

### Adding a New Research Report
Add a new research card inside the `research-grid` div:

```html
<article class="research-card" data-sector="technology">
    <div class="research-header">
        <div class="ticker-badge">TICK</div>
        <span class="research-date">Month Year</span>
    </div>
    <h3 class="research-company">Company Name</h3>
    <div class="research-rating rating-buy">BUY</div> <!-- or rating-hold, rating-sell -->
    <p class="research-thesis">
        Your investment thesis summary...
    </p>
    <div class="research-metrics">
        <div class="metric">
            <span class="metric-label">Target Price</span>
            <span class="metric-value">$XXX</span>
        </div>
        <div class="metric">
            <span class="metric-label">Upside</span>
            <span class="metric-value">+XX%</span>
        </div>
    </div>
    <div class="research-links">
        <a href="assets/research/your-report.pdf" class="research-link primary" target="_blank">
            View Full Report (PDF)
        </a>
        <a href="assets/research/your-report.pdf" class="research-link secondary" download>
            Download PDF
        </a>
    </div>
</article>
```

### Adding Experience
Add a new timeline item inside the `timeline` div:

```html
<article class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-title">Job Title</h3>
            <span class="timeline-company">Company Name</span>
        </div>
        <span class="timeline-date">Date Range</span>
        <ul class="timeline-details">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
            <li>Achievement or responsibility 3</li>
        </ul>
    </div>
</article>
```

### Using Google Docs Instead of PDFs
Replace the PDF links with Google Docs links:

```html
<a href="https://docs.google.com/document/d/YOUR_DOC_ID/view" class="research-link primary" target="_blank">
    View Full Report
</a>
```

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #2563eb;    /* Main accent color */
    --accent-hover: #1d4ed8;      /* Hover state color */
    --text-primary: #1a1a2e;      /* Main text color */
    /* ... other variables */
}
```

### Enabling Dark Mode
Uncomment the dark mode section at the bottom of `styles.css`.

## 🔧 Technical Details

- **No Build Tools Required** - Pure HTML, CSS, and JavaScript
- **No Dependencies** - No npm packages or frameworks
- **Fast Loading** - Minimal file sizes, optimized for performance
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Print Styles** - Optimized for printing (hides navigation, etc.)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contact

For questions or suggestions, please open an issue or contact via the portfolio website.