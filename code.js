         const modelsToggle = document.getElementById('models-toggle');
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        // Toggle dropdown on click
        modelsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Prevent dropdown from closing when clicking inside it
        dropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

 
 
 
 // ===== SMOOTH INTERACTIONS =====
        
        // Hero hover glow enhancement
        const hero = document.querySelector('.hero');
        const headline = document.querySelector('.main-headline');
        const accentText = document.querySelector('.accent-text');

        hero.addEventListener('mouseenter', () => {
            headline.style.filter = 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.4))';
            accentText.style.textShadow = '0 0 20px rgba(255, 140, 0, 0.6)';
        });

        hero.addEventListener('mouseleave', () => {
            headline.style.filter = 'none';
            accentText.style.textShadow = 'none';
        });

        // Model viewer configuration
      
  const model = document.querySelector('model-viewer');

  model.addEventListener('mouseenter', () => {
    model.autoRotate = false;
  });

  model.addEventListener('mouseleave', () => {
    model.autoRotate = true;
  });


        
        // Ensure smooth auto-rotation
        modelViewer.addEventListener('load', () => {
            console.log('3D model loaded successfully');
        });

        // Optional: Add custom camera animation on page load
        setTimeout(() => {
            if (modelViewer) {
                modelViewer.cameraOrbit = '45deg 75deg 8m';
            }
        }, 1000);

        // Explore button interaction
        const exploreBtn = document.querySelector('.explore-btn');
        exploreBtn.addEventListener('click', () => {
            console.log('Explore clicked - navigate to models page');
            // Add navigation logic here
        });

        // Scroll indicator click
        const scrollIndicator = document.querySelector('.scroll-indicator');
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

          (function() {
            'use strict';

            // ===== CUSTOM SCROLLBAR INTERACTIONS =====
            
            let scrollTimeout;
            
            // Add scrolling class for pulse animation
            function handleScroll() {
                document.body.classList.add('mclaren-scrolling');
                
                clearTimeout(scrollTimeout);
                
                scrollTimeout = setTimeout(() => {
                    document.body.classList.remove('mclaren-scrolling');
                }, 150);
            }

            // Throttle scroll events for performance
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            // ===== HERITAGE SECTION SCROLL ANIMATIONS =====

            // Intersection Observer options
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            // Create observer
            const heritageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add animation class
                        entry.target.classList.add('mclaren-animate-in');
                        
                        // Optional: Stop observing after animation
                        heritageObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Wait for DOM to be ready
            function initHeritageAnimations() {
                // Select all animatable elements
                const animatableElements = document.querySelectorAll(
                    '.mclaren-heritage-badge, ' +
                    '.mclaren-heritage-title, ' +
                    '.mclaren-heritage-description, ' +
                    '.mclaren-heritage-card'
                );

                // Observe each element
                animatableElements.forEach(element => {
                    heritageObserver.observe(element);
                });

                // Add smooth scroll behavior
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        const href = this.getAttribute('href');
                        if (href !== '#') {
                            e.preventDefault();
                            const target = document.querySelector(href);
                            if (target) {
                                target.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }
                    });
                });

                // Enhanced hover effects for cards
                const heritageCards = document.querySelectorAll('.mclaren-heritage-card');
                
                heritageCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        // Add subtle rotation effect on hover
                        this.style.transform = 'translateY(-8px) scale(1.02)';
                    });

                    card.addEventListener('mouseleave', function() {
                        this.style.transform = '';
                    });
                });

                // Log initialization
                console.log('McLaren Heritage Section initialized');
                console.log('McLaren Custom Scrollbar active');
            }

            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initHeritageAnimations);
            } else {
                initHeritageAnimations();
            }

            // Optional: Re-trigger animations on window resize (for responsive testing)
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    console.log('McLaren Heritage Section: Responsive layout adjusted');
                }, 250);
            });

        })();
         

         const items = document.querySelectorAll('.timeline-item');
        
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const dot = this.querySelector('.dot');
                dot.style.transform = 'scale(1.5)';
                dot.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                const dot = this.querySelector('.dot');
                dot.style.transform = 'scale(1)';
            });
        });

        // Scroll reveal animation (if timeline is taller)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        items.forEach(item => {
            observer.observe(item);
        });