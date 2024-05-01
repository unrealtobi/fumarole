const navlink = document.querySelector('.nav-list');
// Function to start counting animation when section is in viewport

function startCountingAnimation(entries, observer) {
    entries.forEach(entry => {
       
        if (entry.isIntersecting) {
            const valCounts = entry.target.querySelectorAll('.num');
            const duration = 5000; // Duration in milliseconds
            const steps = 50; // Number of steps to reach the end value

            valCounts.forEach(valCount => {
                const endValue = parseInt(valCount.getAttribute("data-val"));
                const increment = endValue / steps; // Calculate increment per step
                let currentValue = 0;

                function updateValue() {
                    currentValue += increment;
                    if (currentValue >= endValue) {
                        valCount.textContent = endValue + "+";
                    } else {
                        valCount.textContent = Math.round(currentValue); // Round to nearest integer
                        setTimeout(updateValue, duration / steps); // Update value over specified duration
                    }
                }

                updateValue(); // Start updating the value
            });

            // Unobserve the section once animation starts to prevent repeated animations
            observer.unobserve(entry.target);
        }
    });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(startCountingAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Observe all sections with the class 'num'
const sections = document.querySelectorAll('section.num');
sections.forEach(section => {
    observer.observe(section);
});


// function for burger button 
function theToggle (e) {
    e.name = e.name === 'close' ? 'menu' : 'close';
    navlink.classList.toggle('top-[9%]');
   console.log (e.name);
}

theToggle();



