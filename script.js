// Smooth scroll animations and interactive effects

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.article-container article, .about-containers .details-container, .btn-container .btn');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });

    // Hamburger menu functionality with smooth animations
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        
        menu.classList.toggle("open");
        icon.classList.toggle("open");
        
        // Add smooth stagger animation for menu items
        if (menu.classList.contains("open")) {
            const menuItems = menu.querySelectorAll('a');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    }

    // Attach hamburger menu event listener
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenu);
    }

    // Smooth scrolling for navigation links
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add smooth scrolling to all nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
            
            // Close mobile menu if open
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            if (menu && menu.classList.contains("open")) {
                menu.classList.remove("open");
                icon.classList.remove("open");
            }
        });
    });

    // Parallax effect for profile image
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.section__pic-container');
        if (parallax) {
            const speed = scrolled * 0.2;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Dynamic navbar background on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');
    const hamburgerNav = document.querySelector('#hamburger-nav');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Change navbar opacity based on scroll
        if (navbar) {
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
        
        if (hamburgerNav) {
            if (scrollTop > 100) {
                hamburgerNav.style.background = 'rgba(255, 255, 255, 0.98)';
                hamburgerNav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                hamburgerNav.style.background = 'rgba(255, 255, 255, 0.95)';
                hamburgerNav.style.boxShadow = 'none';
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Form animations and validation
    const form = document.querySelector('.email-from');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add focus animations
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.style.borderColor = '#666';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
                if (this.value === '') {
                    this.style.borderColor = '#ccc';
                }
            });
            
            // Add typing animation effect
            input.addEventListener('input', function() {
                this.style.borderColor = '#888';
                this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            });
        });

        // Form submission with loading animation
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.animation = 'pulse 1s infinite';
            
            // Reset after 3 seconds (replace with actual form handling)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.animation = 'none';
            }, 3000);
        });
    }

    // Add pulse animation for loading states
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Add hover effects to project containers
    const projectContainers = document.querySelectorAll('.color-container');
    projectContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.animation = 'scaleIn 0.3s ease-out';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Add floating animation to icons in socials container
    const socialIcons = document.querySelectorAll('#socials-container .icon');
    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.classList.add('animate-float');
    });

    // Add typing effect to title (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect for main title
    const mainTitle = document.querySelector('#profile .title');
    if (mainTitle) {
        const titleText = mainTitle.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(mainTitle, titleText, 100);
    }

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Apply ripple effect to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleAnimation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Progressive image loading with fade-in effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Add performance optimization for animations
    let ticking = false;
    
    function updateAnimations() {
        // Throttle expensive operations
        if (!ticking) {
            requestAnimationFrame(() => {
                // Add any expensive animation updates here
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateAnimations);
    window.addEventListener('resize', updateAnimations);

    console.log('🎨 Responsive and animated design loaded successfully!');
});

// Utility function to add staggered animations
function staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for external use
window.portfolioAnimations = {
    staggerAnimation,
    isInViewport
};