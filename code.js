      const modelsToggle = document.getElementById('models-toggle');
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const burger = document.getElementById('burger');
        const navLinks = document.getElementById('navLinks');

        // Burger menu toggle
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Toggle dropdown on click
        modelsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown and mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
            
            if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Prevent dropdown from closing when clicking inside it
        dropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Close mobile menu when clicking on a link (except dropdown toggle)
        document.querySelectorAll('.nav-links > li > a:not(#models-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking on dropdown items
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                dropdown.classList.remove('active');
                document.body.style.overflow = '';
            });
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
        // modelViewer.addEventListener('load', () => {
        //     console.log('3D model loaded successfully');
        // });

        // Optional: Add custom camera animation on page load
        // setTimeout(() => {
        //     if (modelViewer) {
        //         modelViewer.cameraOrbit = '45deg 75deg 8m';
        //     }
        // }, 1000);

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


        

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.stat-card-item, .feature-card-module').forEach(el => {
            animateOnScroll.observe(el);
        });

        // Dynamic number counter for stats
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value + (element.dataset.suffix || '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Trigger counter animations when visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const valueElement = entry.target.querySelector('.stat-value-number');
                    const endValue = valueElement.textContent.match(/\d+/)?.[0] || 0;
                    if (endValue) {
                        valueElement.dataset.suffix = valueElement.textContent.replace(endValue, '');
                        animateValue(valueElement, 0, parseInt(endValue), 2000);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-card-item').forEach(stat => {
            statsObserver.observe(stat);
        });

        // Parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            document.querySelectorAll('.stat-icon-wrapper').forEach(icon => {
                icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });


           const modelCards = document.querySelectorAll('.model-card-wrapper');
        
        modelCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });

            // Click handler for explore buttons
            const exploreBtn = card.querySelector('.cta-explore-button');
            exploreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const modelName = card.dataset.model;
                console.log(`Exploring ${modelName}`);
                
                // Add pulse animation
                exploreBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    exploreBtn.style.transform = 'scale(1)';
                }, 150);
            });

            // Card click handler
            card.addEventListener('click', () => {
                const modelName = card.dataset.model;
                console.log(`Selected model: ${modelName}`);
            });
        });

        // Parallax effect on card hover
        modelCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `translateY(-15px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            });
        });

        // Intersection Observer for scroll animations
      
        // Price counter animation
        function animatePrice(element) {
            const finalPrice = element.textContent;
            const numericValue = parseInt(finalPrice.replace(/\D/g, ''));
            const duration = 1500;
            const steps = 60;
            const increment = numericValue / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                current += increment;
                step++;
                
                if (step >= steps) {
                    element.textContent = finalPrice;
                    clearInterval(timer);
                } else {
                    element.textContent = '$' + Math.floor(current).toLocaleString();
                }
            }, duration / steps);
        }

        // Trigger price animations when cards come into view
        const priceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const priceElement = entry.target.querySelector('.price-amount-large');
                    setTimeout(() => animatePrice(priceElement), 300);
                }
            });
        }, { threshold: 0.5 });

        modelCards.forEach(card => priceObserver.observe(card));

        // Add subtle floating animation
        let floatingDirection = 1;
        setInterval(() => {
            modelCards.forEach((card, index) => {
                if (!card.matches(':hover')) {
                    const delay = index * 100;
                    setTimeout(() => {
                        card.style.transition = 'transform 3s ease-in-out';
                        const offset = Math.sin(Date.now() / 1000 + index) * 3;
                        if (!card.matches(':hover')) {
                            card.style.transform = `translateY(${offset}px)`;
                        }
                    }, delay);
                }
            });
        }, 3000);

        // Filter functionality (can be extended)
        function filterModels(category) {
            modelCards.forEach(card => {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.8s ease forwards';
            });
        }

        // Keyboard navigation
        let currentCardIndex = -1;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                currentCardIndex = (currentCardIndex + 1) % modelCards.length;
                modelCards[currentCardIndex].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                modelCards[currentCardIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                currentCardIndex = currentCardIndex <= 0 ? modelCards.length - 1 : currentCardIndex - 1;
                modelCards[currentCardIndex].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                modelCards[currentCardIndex].focus();
            } else if (e.key === 'Enter' && currentCardIndex >= 0) {
                e.preventDefault();
                const exploreBtn = modelCards[currentCardIndex].querySelector('.cta-explore-button');
                exploreBtn.click();
            }
        });

        // Make cards focusable
        modelCards.forEach((card, index) => {
            card.setAttribute('tabindex', '0');
            card.addEventListener('focus', () => {
                currentCardIndex = index;
            });
        });

        // Lazy loading images optimization
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.6s ease';
                    
                    setTimeout(() => {
                        img.style.opacity = '1';
                    }, 100);
                    
                    imageObserver.unobserve(img);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.model-hero-image').forEach(img => {
            imageObserver.observe(img);
        });

        // Performance tracking
        let interactionCount = 0;
        modelCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                interactionCount++;
                console.log(`Card interactions: ${interactionCount}`);
            });
        });

        // Dynamic spec highlighting on hover
        modelCards.forEach(card => {
            const specs = card.querySelectorAll('.spec-item-block');
            
            card.addEventListener('mouseenter', () => {
                specs.forEach((spec, index) => {
                    setTimeout(() => {
                        spec.style.transform = 'translateX(5px)';
                        spec.style.transition = 'transform 0.3s ease';
                    }, index * 100);
                });
            });
            
            card.addEventListener('mouseleave', () => {
                specs.forEach(spec => {
                    spec.style.transform = 'translateX(0)';
                });
            });
        });

        // Add ripple effect on card click
        modelCards.forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 140, 0, 0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Scroll progress indicator (subtle)
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                    
                    // You can use this to show a progress bar or trigger animations
                    if (scrollProgress > 50) {
                        document.body.style.background = 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)';
                    } else {
                        document.body.style.background = '#000';
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Console welcome message
        console.log('%c🏎️ McLaren Performance Selector', 'color: #ff8c00; font-size: 20px; font-weight: bold;');
        console.log('%cExperience the ultimate in automotive excellence', 'color: #fff; font-size: 12px;');


          // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - scrolled / 700;
            }
        });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Animate feature cards on scroll
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.feature-card').forEach(card => {
            featureObserver.observe(card);
        });

        // Interactive model container glow effect
        const modelContainer = document.querySelector('.model-container');
        if (modelContainer) {
            modelContainer.addEventListener('mousemove', (e) => {
                const rect = modelContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                modelContainer.style.background = `
                    radial-gradient(circle at ${x}px ${y}px, 
                    rgba(255, 140, 0, 0.2), 
                    rgba(0, 0, 0, 0.5))
                `;
            });

            modelContainer.addEventListener('mouseleave', () => {
                modelContainer.style.background = `
                    linear-gradient(135deg, 
                    rgba(255, 140, 0, 0.1), 
                    rgba(0, 0, 0, 0.5))
                `;
            });
        }






document.querySelectorAll('.ui-color').forEach(el => {
  el.style.background = el.dataset.color;
});










const modelViewer = document.querySelector('#carModel');
const colorButtons = document.querySelectorAll('.car-color');

modelViewer.addEventListener('load', () => {
  const paint = modelViewer.model.getMaterialByName('SPaint_Material1');

  if (!paint) {
    console.error('SPaint_Material1 not found');
    return;
  }

  // Apply initial color (first button)
  applyColor(paint, colorButtons[0].dataset.color);

  colorButtons.forEach(btn => {
    // set dot background
    btn.style.backgroundColor = btn.dataset.color;

    btn.addEventListener('click', () => {
      applyColor(paint, btn.dataset.color);

      colorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

function applyColor(material, hex) {
  const [r, g, b] = hexToRGB(hex);
  material.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
}

function hexToRGB(hex) {
  const num = parseInt(hex.replace('#', ''), 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255
  ];
}



 document.addEventListener('DOMContentLoaded', () => {
            const features = document.querySelectorAll('.voltage-item');
            features.forEach((feature, index) => {
                feature.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(10px)';
                    this.style.transition = 'transform 0.3s ease';
                });
                
                feature.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
            });

            const vortexFrame = document.querySelector('.vortex-frame');
            vortexFrame.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.5s ease';
            });
            
            vortexFrame.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });



          var blocks = document.querySelectorAll('.power-block');
        
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            blocks[i].addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        }



         var cards = document.querySelectorAll('.innovation-card');
        
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            cards[i].addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        }



          var tiles = document.querySelectorAll('.result-tile');
        var rings = document.querySelectorAll('.pulse-ring');
        
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            tiles[i].addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        }

        for (var j = 0; j < rings.length; j++) {
            rings[j].addEventListener('click', function() {
                this.style.animation = 'none';
                setTimeout(function(ring) {
                    ring.style.animation = '';
                }, 10, this);
            });
        }


         // Ripple effect for buttons
        function createRipple(event) {
            const button = event.currentTarget;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }

        // Add ripple effect to all buttons
        const buttons = document.querySelectorAll('.primary-action-btn, .secondary-action-btn');
        buttons.forEach(button => {
            button.addEventListener('click', createRipple);
        });

        // Favorite button toggle
        const favoriteBtn = document.getElementById('favoriteBtn');
        let isFavorited = false;

        favoriteBtn.addEventListener('click', function() {
            isFavorited = !isFavorited;
            const path = this.querySelector('path');
            
            if (isFavorited) {
                path.style.fill = '#ff8c00';
                path.style.stroke = '#ff8c00';
                this.style.background = 'rgba(255, 140, 0, 0.2)';
                this.style.borderColor = '#ff8c00';
            } else {
                path.style.fill = 'none';
                path.style.stroke = '#fff';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }

            // Add bounce animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });

        // Share button functionality
        const shareBtn = document.getElementById('shareBtn');
        shareBtn.addEventListener('click', function() {
            // Rotate animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);

            // Simulate share action
            if (navigator.share) {
                navigator.share({
                    title: 'McLaren 720S',
                    text: 'Check out the McLaren 720S - Velocity Redefined',
                    url: window.location.href
                }).catch(() => {
                    console.log('Share cancelled');
                });
            } else {
                alert('Share: McLaren 720S');
            }
        });

        // Configure button action
        const configureBtn = document.getElementById('configureBtn');
        configureBtn.addEventListener('click', function() {
            console.log('Configure clicked');
            alert('Opening McLaren 720S configurator...');
        });

        // Test Drive button action
        const testDriveBtn = document.getElementById('testDriveBtn');
        testDriveBtn.addEventListener('click', function() {
            console.log('Test Drive clicked');
            alert('Schedule your McLaren 720S test drive...');
        });

    

        const statCards = document.querySelectorAll('.stat-card-item');
        statCards.forEach(card => observer.observe(card));

        // Add hover sound effect (optional - using Web Audio API)
        function playHoverSound() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }

        // Add subtle hover sound to stat cards
        statCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Uncomment to enable sound
                // playHoverSound();
            });
        });

        // Parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const modelDesignation = document.querySelector('.model-designation');
            modelDesignation.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

          // Interactive card hover effects with mouse tracking
        const metricCards = document.querySelectorAll('.metric-card-container');

        metricCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });

            // Add click animation
            card.addEventListener('click', function() {
                const value = this.querySelector('.metric-value-primary');
                value.classList.add('pulse-animation');
                value.classList.add('glow-effect');
                
                setTimeout(() => {
                    value.classList.remove('pulse-animation');
                    value.classList.remove('glow-effect');
                }, 2000);
            });
        });

        // Spec row hover effect with smooth transitions
        const specRows = document.querySelectorAll('.spec-row-item');
        
        specRows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                const value = this.querySelector('.spec-property-value');
                value.style.color = '#ff8c00';
                value.style.transform = 'scale(1.05)';
                value.style.transition = 'all 0.3s ease';
            });

            row.addEventListener('mouseleave', function() {
                const value = this.querySelector('.spec-property-value');
                value.style.color = '#fff';
                value.style.transform = 'scale(1)';
            });
        });

     

        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        }, observerOptions);

        const specPanels = document.querySelectorAll('.spec-category-panel');
        specPanels.forEach(panel => fadeInObserver.observe(panel));

        // Dynamic counter animation for metric values
        function animateValue(element, start, end, duration) {
            const range = end - start;
            const increment = range / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    clearInterval(timer);
                }
                
                const text = element.textContent;
                const numericPart = parseFloat(text);
                const suffix = text.replace(numericPart.toString(), '').trim();
                
                element.textContent = Math.round(current) + ' ' + suffix;
            }, 16);
        }

        // Trigger counter animation on card click
        metricCards.forEach(card => {
            const originalValue = card.querySelector('.metric-value-primary').textContent;
            
            card.addEventListener('dblclick', function() {
                const valueElement = this.querySelector('.metric-value-primary');
                const numericValue = parseFloat(valueElement.textContent);
                
                if (!isNaN(numericValue)) {
                    animateValue(valueElement, 0, numericValue, 1000);
                }
            });
        });

        // Add ripple effect on panel click
        const panels = document.querySelectorAll('.spec-category-panel');
        
        panels.forEach(panel => {
            panel.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 140, 0, 0.3)';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';
                ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                ripple.style.animation = 'rippleEffect 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Console log for debugging
        console.log('McLaren 720S Specifications loaded');
        console.log(`Total metrics: ${metricCards.length}`);
        console.log(`Total spec categories: ${specPanels.length}`);

          document.addEventListener('DOMContentLoaded', function() {
            const statCards = document.querySelectorAll('.stat-card');
            const featureModules = document.querySelectorAll('.feature-module');
            
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            statCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });

            featureModules.forEach((module, index) => {
                module.style.opacity = '0';
                module.style.transform = 'translateY(30px)';
                module.style.transition = `all 0.6s ease ${index * 0.15}s`;
                observer.observe(module);
            });

            statCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 8px 30px rgba(255, 140, 0, 0.3)';
                });

                card.addEventListener('mouseleave', function() {
                    this.style.boxShadow = 'none';
                });
            });

            const statValues = document.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                const finalValue = stat.textContent;
                const isNumber = !isNaN(parseFloat(finalValue));
                
                if (isNumber) {
                    const numValue = parseFloat(finalValue);
                    let currentValue = 0;
                    const increment = numValue / 50;
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numValue) {
                            stat.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            stat.textContent = currentValue.toFixed(finalValue.includes('.') ? 2 : 0);
                        }
                    }, 30);
                }
            });

            document.querySelectorAll('.module-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 200);
                });
            });
        });

           document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const fadeObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            const featureBlocks = document.querySelectorAll('.feature-block');
            featureBlocks.forEach((block, index) => {
                block.style.transitionDelay = `${index * 0.15}s`;
                fadeObserver.observe(block);
            });

            const techModules = document.querySelectorAll('.tech-module');
            techModules.forEach((module, index) => {
                module.style.transitionDelay = `${index * 0.1}s`;
                fadeObserver.observe(module);
            });

            const actionButtons = document.querySelectorAll('.action-button');
            actionButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);

                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.width = '5px';
                    ripple.style.height = '5px';
                    ripple.style.background = '#ff8c00';
                    ripple.style.borderRadius = '50%';
                    ripple.style.transform = 'translate(-50%, -50%)';
                    ripple.style.animation = 'rippleEffect 0.6s ease-out';
                    ripple.style.pointerEvents = 'none';
                    
                    const rect = this.getBoundingClientRect();
                    ripple.style.left = (e.clientX - rect.left) + 'px';
                    ripple.style.top = (e.clientY - rect.top) + 'px';
                    
                    this.style.position = 'relative';
                    this.appendChild(ripple);
                    
                    setTimeout(() => ripple.remove(), 600);
                });
            });

            const style = document.createElement('style');
            style.textContent = `
                @keyframes rippleEffect {
                    to {
                        width: 100px;
                        height: 100px;
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            const specCards = document.querySelectorAll('.spec-card');
            specCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.05)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                });
            });

            const techIconWrappers = document.querySelectorAll('.tech-icon-wrapper');
            techIconWrappers.forEach(icon => {
                icon.addEventListener('mouseenter', function() {
                    this.style.animation = 'pulse 0.5s ease-in-out infinite';
                });
                
                icon.addEventListener('mouseleave', function() {
                    this.style.animation = '';
                });
            });

            const pulseStyle = document.createElement('style');
            pulseStyle.textContent = `
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `;
            document.head.appendChild(pulseStyle);

            document.querySelectorAll('.tech-item').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.color = '#ff8c00';
                    this.style.paddingLeft = '25px';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.color = '';
                    this.style.paddingLeft = '';
                });
            });
        });