/* ------ Variables ------ */

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Book Appointment Button inside the header
const bookAppointmentButton = document.querySelector('.book-appointment');

// Popup Forms
const clientPopup = document.getElementById('client-popup');
const adminLoginLink = document.getElementById('admin-login-link');
const adminPopup = document.getElementById('admin-popup');
const loginAsClientLink = document.getElementById('login-as-client-link');
const registerLink = document.getElementById('register-link');
const registerPopup = document.getElementById('register-popup');
const loginLink = document.getElementById('login-link');
const loginHome = document.getElementById('login-heading');
const registerHome = document.getElementById('register-heading');

// Close buttons of popup forms
const closeClientPopup = document.getElementById('close-popup');
const closeAdminPopup = document.getElementById('close-admin-popup');
const closeRegisterPopup = document.getElementById('close-register-popup');

/* ------ End Variables ------ */

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}

// Function to hide the hamburger menu
function hideHamburgerMenu() {
    navLinks.classList.remove('active');
    enableScroll(); // Enable scrolling
}

// Function to toggle hamburger menu
function toggleHamburgerMenu() {
    navLinks.classList.toggle('active');
}

// Open or close navLinks when hamburger is clicked
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click propagation
    toggleHamburgerMenu();
});

// Close the hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && event.target !== hamburger && !navLinks.contains(event.target)) {
        hideHamburgerMenu();
    }
});

// Scroll to the top when the button is clicked with smooth scrolling
const scrollButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* ------ Script for Popup Forms (Client Login, Admin Login, and Registration form) ------ */

// Function to open a popup with a sliding effect from the top
function openPopup(popup) {
    popup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll();
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    setTimeout(() => {
        popup.classList.add('bgcolor');
    }, 900);
}

// Function to close a popup with a sliding effect to the top
function closePopup(popup) {
    popup.classList.remove('active');
    enableScroll();
    setTimeout(() => {
        popup.style.display = 'none';
    }, 900);
    popup.classList.remove('bgcolor');
}

// Book Appointment Button -> Open Client Login Form
bookAppointmentButton.addEventListener('click', () => {
    alert("Please login first before booking an appointment!");
    openPopup(clientPopup);
});

// "Login as Admin" link -> Open Admin Login Form
adminLoginLink.addEventListener('click', () => {
    closePopup(clientPopup);
    openPopup(adminPopup);
});

// "Login as a Client" link -> Get back to Client Login Form
loginAsClientLink.addEventListener('click', () => {
    closePopup(adminPopup);
    openPopup(clientPopup);
});

// "Register" link -> Open Registration Form
registerLink.addEventListener('click', () => {
    closePopup(clientPopup);
    openPopup(registerPopup);
});

// "Login" link -> Get back to Client Login Form
loginLink.addEventListener('click', () => {
    closePopup(registerPopup);
    openPopup(clientPopup);
});

// Home Login Button -> Open Client Login Form
loginHome.addEventListener('click', () => {
    openPopup(clientPopup);
    event.preventDefault();
});

// Sign Up Button -> Open Registration Form
registerHome.addEventListener('click', () => {
    closePopup(clientPopup);
    openPopup(registerPopup);
    event.preventDefault();
});

// Close Button -> Close Client Login Form
closeClientPopup.addEventListener('click', () => {
    closePopup(clientPopup);
});

// Close Button -> Close Admin Login Form
closeAdminPopup.addEventListener('click', () => {
    closePopup(adminPopup);
});

// Close Button -> Close Registration Form
closeRegisterPopup.addEventListener('click', () => {
    closePopup(registerPopup);
});

/* --------------------------------------------------------------------------------------- */

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let active = 0;
let interval = null;

function reloadSlider() {
  // Hide all items
  items.forEach(item => item.style.display = 'none');

  // Show the active item
  items[active].style.display = 'block';

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[active].classList.add('active');

  // Clear the previous interval and start a new one
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  active = (active + 1) % items.length;
  reloadSlider();
}

function prevSlide() {
  active = (active - 1 + items.length) % items.length;
  reloadSlider();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    active = index;
    reloadSlider();
  });
});

reloadSlider(); // Show the initial slide



function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}


/* Adjust the height of the slider dynamically based on the size of the browser */

function adjustSliderHeight() {
    const slider = document.querySelector('.slider');
    slider.style.height = `${window.innerHeight}px`;
}

// Set initial height when the DOM content is loaded
document.addEventListener('DOMContentLoaded', adjustSliderHeight);

// Adjust height on window resize
window.addEventListener('resize', adjustSliderHeight);

  




















// Add an Intersection Observer for each section with the slide-in effect
const sections = document.querySelectorAll('.slide-in-section');

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        } else {
            entry.target.classList.remove('slide-in'); // Remove the animation class when out of viewport
        }
    });
}

const sectionObserver = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


















































document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.profile-nav-item');
    const formRows = document.querySelectorAll('.form-row');

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');

            formRows.forEach(formRow => formRow.style.display = 'none');
            formRows[index].style.display = 'flex';
        });
    });
});











document.addEventListener('DOMContentLoaded', () => {
    const myProfileButton = document.getElementById('myProfile');
    const sectionsToHide = document.querySelectorAll('.content, .services-bg, .doctors, .about-section, .contact-section');
    const profileSection = document.getElementById('profile-section'); // Replace with the actual ID of your profile section
    const top = document.getElementById('top');

    myProfileButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Hide sections and show the profile section
        sectionsToHide.forEach((section) => {
            section.style.display = 'none';
        });
        profileSection.style.display = 'block';
        top.style.display = 'block';

        // Push a new state to the browser's history
        history.pushState({ page: 'profile' }, 'My Profile', '?profile');
    });

    // Function to handle back/forward navigation
    function handleNavigation(event) {
        if (event.state && event.state.page === 'profile') {
            // Show the profile section
            sectionsToHide.forEach((section) => {
                section.style.display = 'none';
            });
            profileSection.style.display = 'block';
            top.style.display = 'block';
        } else {
            // Show the default state
            sectionsToHide.forEach((section) => {
                section.style.display = 'block';
            });
            profileSection.style.display = 'none';
            top.style.display = 'none';
        }
    }

    // Listen for back/forward navigation
    window.addEventListener('popstate', handleNavigation);

    // Initial page load handling
    handleNavigation({ state: history.state });
});


























// Scroll to the top of the page when the website is refreshed
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
