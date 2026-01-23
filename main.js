/* ============================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   Handles navigation, filtering, form submission,
   and smooth interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // NAVIGATION FUNCTIONALITY
    // ============================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu) {
                navMenu.classList.remove('active');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Add scroll shadow to navbar
    function handleNavbarScroll() {
        if (navbar) {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Throttled scroll handler for performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function () {
            handleNavbarScroll();
            updateActiveNavLink();
        });
    });

    // Initial call
    handleNavbarScroll();
    updateActiveNavLink();

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without triggering scroll
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ============================================
    // EQUITY RESEARCH FILTER
    // ============================================

    const sectorFilter = document.getElementById('sector-filter');
    const researchGrid = document.getElementById('research-grid');
    const researchCards = document.querySelectorAll('.research-card');

    if (sectorFilter && researchCards.length > 0) {
        sectorFilter.addEventListener('change', function () {
            const selectedSector = this.value;

            researchCards.forEach(card => {
                const cardSector = card.getAttribute('data-sector');

                if (selectedSector === 'all' || cardSector === selectedSector) {
                    card.classList.remove('hidden');
                    // Add fade-in animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';

                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.classList.add('hidden');
                }
            });

            // Show message if no results
            const visibleCards = document.querySelectorAll('.research-card:not(.hidden)');
            let noResultsMsg = researchGrid?.querySelector('.no-results');

            if (visibleCards.length === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('p');
                    noResultsMsg.className = 'no-results';
                    noResultsMsg.textContent = 'No research reports found for this sector.';
                    noResultsMsg.style.textAlign = 'center';
                    noResultsMsg.style.color = 'var(--text-muted)';
                    noResultsMsg.style.padding = 'var(--spacing-xl)';
                    noResultsMsg.style.gridColumn = '1 / -1';
                    researchGrid?.appendChild(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        });
    }

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());

            // Basic validation
            const requiredFields = ['name', 'email', 'subject', 'message'];
            let isValid = true;

            requiredFields.forEach(field => {
                const input = contactForm.querySelector(`[name="${field}"]`);
                if (!formObject[field] || formObject[field].trim() === '') {
                    isValid = false;
                    input?.classList.add('error');
                } else {
                    input?.classList.remove('error');
                }
            });

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                isValid = false;
                contactForm.querySelector('[name="email"]')?.classList.add('error');
            }

            if (isValid) {
                // Show success message
                // NOTE: Replace this with actual form submission logic
                // For example, integrate with Formspree, Netlify Forms, or your backend

                const submitButton = contactForm.querySelector('.form-submit');
                const originalText = submitButton?.innerHTML;

                if (submitButton) {
                    submitButton.innerHTML = '<span class="button-text">Sending...</span>';
                    submitButton.disabled = true;
                }

                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Success handling
                    contactForm.reset();

                    if (submitButton) {
                        submitButton.innerHTML = '<span class="button-text">Message Sent!</span>';
                        submitButton.style.backgroundColor = 'var(--success-color)';
                        submitButton.style.borderColor = 'var(--success-color)';

                        setTimeout(() => {
                            submitButton.innerHTML = originalText;
                            submitButton.disabled = false;
                            submitButton.style.backgroundColor = '';
                            submitButton.style.borderColor = '';
                        }, 3000);
                    }

                    console.log('Form submitted:', formObject);
                }, 1000);
            }
        });

        // Remove error styling on input
        const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function () {
                this.classList.remove('error');
            });
        });
    }

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ============================================

    document.addEventListener('keydown', function (e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            if (navMenu?.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle?.setAttribute('aria-expanded', 'false');
                navToggle?.focus();
            }

            // Remove focus from buttons
            if (document.activeElement?.classList.contains('cta-button')) {
                document.activeElement.blur();
            }
        }
    });

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // Only subtle fade-in animations for clarity
    // ============================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections
    const animatableElements = document.querySelectorAll(
        '.skill-category, .project-card, .research-card, .timeline-item, .contact-item'
    );

    animatableElements.forEach(el => {
        el.classList.add('fade-in');
        fadeInObserver.observe(el);
    });

    // Add CSS for fade animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .form-input.error,
        .form-textarea.error {
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
        }

        @media (prefers-reduced-motion: reduce) {
            .fade-in {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // RESUME PDF FALLBACK
    // Handle cases where PDF doesn't load
    // ============================================

    const resumeIframe = document.querySelector('.resume-iframe');

    if (resumeIframe) {
        resumeIframe.addEventListener('error', function () {
            const viewer = document.querySelector('.resume-viewer');
            if (viewer) {
                viewer.innerHTML = `
                    <div style="padding: var(--spacing-xl); text-align: center;">
                        <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                            Unable to display PDF preview. Please download the resume instead.
                        </p>
                        <a href="assets/resume/kevin-yu-resume.pdf" class="cta-button primary" download>
                            <span class="button-text">Download Resume</span>
                        </a>
                    </div>
                `;
            }
        });
    }

    // ============================================
    // CONSOLE MESSAGE FOR DEVELOPERS
    // ============================================

    console.log('%c👋 Hello!', 'font-size: 24px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px;');
});
