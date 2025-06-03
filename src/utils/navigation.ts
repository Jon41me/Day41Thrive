// Navigation utility functions
export function handleNavigation(event: Event, targetId: string) {
    event.preventDefault();
    
    // Clean the targetId by removing any leading slashes or hashes
    const cleanId = targetId.replace(/^[/#]+/, '');
    
    // If we're not on the home page, redirect to home with hash
    if (window.location.pathname !== '/') {
        window.location.href = `/${cleanId ? '#' + cleanId : ''}`;
        return;
    }
    
    // If we're already on home page, just scroll to the section
    const element = document.getElementById(cleanId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function setupNavigation() {
    document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-nav');
            if (targetId) {
                handleNavigation(e, targetId);
            }
        });
    });
}