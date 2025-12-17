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