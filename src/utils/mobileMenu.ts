export function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const navItems = document.querySelectorAll('.mobile-nav-content .nav-item');
    const body = document.body;

    if (!mobileMenuBtn || !mobileNavOverlay) return;

    function toggleMenu() {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
        mobileMenuBtn.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
    }

    // Handle menu button click
    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Handle navigation item clicks
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu on resize if screen becomes larger than mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });
}