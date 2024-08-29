window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});








// Animated counters
const counters = document.querySelectorAll('.stat-value');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;
    
    const updateCounter = () => {
        const c = +counter.innerText;
        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCounter();
});

// Project impact bars
const impactBars = document.querySelectorAll('.impact-bar');
impactBars.forEach(bar => {
    const impact = bar.getAttribute('data-impact');
    bar.style.width = `${impact}%`;
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


















 // Lightbox functionality
 function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Timeline navigation
function jumpToDay(day) {
    console.log(`Jumping to Day ${day}`);
    // Implement the logic to scroll to the specific day's content
}

// Lazy loading and animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gallery-item, .video-container').forEach(item => {
        observer.observe(item);
    });
});