// Main JavaScript for Portfolio Website
// Minimal JavaScript for enhanced interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior for anchor links
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if it's an anchor link (starts with #)
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // If target doesn't exist yet, you can add functionality here
                    // For now, we'll just log a message
                    console.log(`Section "${targetId}" is coming soon`);
                }
            }
        });
    });
    
    // Add keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        // Allow Escape key to remove focus from buttons
        if (e.key === 'Escape') {
            if (document.activeElement.classList.contains('cta-button')) {
                document.activeElement.blur();
            }
        }
    });
});
