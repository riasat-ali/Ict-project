// script.js

document.addEventListener("DOMContentLoaded", () => {
    // This finds all elements with class 'reveal' and animates them when they come on screen
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    // 2. CONTACT FORM ALERT
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thanks Bawa! We will contact you soon."); // Customized message
            contactForm.reset();
        });
    }
    // 3. PROPERTY FILTERS
    const filterBtns = document.querySelectorAll(".filter-btn");
    const propertyCards = document.querySelectorAll(".property-card");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterValue = btn.getAttribute("data-filter");
            propertyCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    // Add animation to filtered items
                    card.style.animation = "zoomIn 0.5s ease"; 
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
    // 4. MODAL POPUP LOGIC
    const modal = document.getElementById("propertyModal");
    const closeBtn = document.querySelector(".close-btn");
    const viewBtns = document.querySelectorAll(".view-details-btn");
    // Elements inside modal
    const mTitle = document.getElementById("modalTitle");
    const mPrice = document.getElementById("modalPrice");
    const mDesc = document.getElementById("modalDesc");
    const mLocation = document.getElementById("modalLocation");
    const mArea = document.getElementById("modalArea");
    const mBeds = document.getElementById("modalBeds");
    const mImg = document.getElementById("modalImg");
    // Open Modal
    if(viewBtns) {
        viewBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const title = btn.getAttribute("data-title");
                const price = btn.getAttribute("data-price");
                const location = btn.getAttribute("data-location");
                const area = btn.getAttribute("data-area");
                const beds = btn.getAttribute("data-beds");
                const desc = btn.getAttribute("data-desc");
                const img = btn.getAttribute("data-img");
                mTitle.textContent = title;
                mPrice.textContent = price;
                mDesc.textContent = desc;
                mLocation.textContent = location;
                mArea.textContent = area;
                mBeds.textContent = beds;
                mImg.src = img;
                modal.style.display = "block";
            });
        });
    }
    // Close Modal
    if(closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
