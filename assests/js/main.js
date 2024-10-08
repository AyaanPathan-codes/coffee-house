    /*===== MENU SHOW Y HIDDEN =====*/
    const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close')

    // SHOW
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

    // HIDDEN
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })

    /*===== MOUSEMOVE HOME IMG =====*/
    document.addEventListener('mousemove', move);
    function move(e){
        this.querySelectorAll('.move').forEach(layer =>{
            const speed = layer.getAttribute('data-speed')

            const x = (window.innerWidth - e.pageX*speed)/120
            const y = (window.innerHeight - e.pageY*speed)/120

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }

    // Function to handle the movement effect
    function move(e) {
        const event = e.type === 'touchmove' ? e.touches[0] : e; // Handle touch event
        this.querySelectorAll('.move').forEach(layer => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - event.pageX * speed) / 120;
            const y = (window.innerHeight - event.pageY * speed) / 120;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    // Event listeners for both mouse and touch events
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move, { passive: true }); // Use passive event listener for touch



    /*===== GSAP ANIMATION =====*/
    // NAV
    gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
    gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

    // HOME
    gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
    gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
    gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
    gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})


    /// Ensure GSAP and ScrollTrigger are registered
    // Ensure GSAP and ScrollTrigger are registered
    gsap.registerPlugin(ScrollTrigger);

    // Function to create animations for the About Us section
    function createAboutAnimations() {
        // ABOUT US - Scroll Trigger Animations
        gsap.from('.about__content h2', {
            scrollTrigger: {
                trigger: "#about-us", // The element that triggers the animation
                start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
                end: "bottom top", // End when the bottom of the section reaches the top of the viewport
                toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
                markers: false, // Set to true for debugging
            },
            opacity: 0, // Start with opacity 0
            y: 30, // Move up 30 pixels
            duration: 1, // Duration of the animation
        });

        gsap.from('.about__content p', {
            scrollTrigger: {
                trigger: "#about-us", // The element that triggers the animation
                start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
                end: "bottom top", // End when the bottom of the section reaches the top of the viewport
                toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
                markers: false, // Set to true for debugging
            },
            opacity: 0, // Start with opacity 0
            y: 20, // Move up 20 pixels
            duration: 1, // Duration of the animation
            stagger: 0.2, // Stagger the animation for each paragraph
        });

        gsap.from('.about__img', {
            scrollTrigger: {
                trigger: "#about-us", // The element that triggers the animation
                start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
                end: "bottom top", // End when the bottom of the section reaches the top of the viewport
                toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
                markers: false, // Set to true for debugging
            },
            opacity: 0, // Start with opacity 0
            y: 30, // Move up 30 pixels
            duration: 1, // Duration of the animation
        });
    }

    // Call the function to create animations
    createAboutAnimations();
    document.querySelectorAll('.nav__link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Smoothly scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to the start of the target element
            });
        });
    });
   
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed header
                    behavior: 'smooth' // Smooth scroll
                });

                // Update the URL without hash
                history.pushState(null, null, ' '); // Change the URL to the current page without hash
            }
        });
    });

