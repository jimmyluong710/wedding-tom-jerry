// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Reveal Effect
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    // Initial state for animation
    if (section.id !== 'home') {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 1s ease-out';
        observer.observe(section);
    }
});

// RSVP Form Submission (Mockup)
const rsvpForm = document.querySelector('form');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = rsvpForm.querySelector('input').value;
        if (name) {
            alert(`Cảm ơn ${name}! Chúng tôi đã nhận được xác nhận của bạn.`);
            rsvpForm.reset();
        } else {
            alert('Vui lòng nhập tên của bạn nhé!');
        }
    });
}

// Add mouse paw effect (Optional fun element)
document.addEventListener('click', (e) => {
    const paw = document.createElement('div');
    paw.innerHTML = '🐾';
    paw.style.position = 'absolute';
    paw.style.left = `${e.pageX - 10}px`;
    paw.style.top = `${e.pageY - 10}px`;
    paw.style.fontSize = '20px';
    paw.style.pointerEvents = 'none';
    paw.style.opacity = '0.5';
    paw.style.transition = 'opacity 1s, transform 1s';
    document.body.appendChild(paw);

    setTimeout(() => {
        paw.style.opacity = '0';
        paw.style.transform = 'scale(2)';
    }, 10);

    setTimeout(() => {
        paw.remove();
    }, 1000);
});
