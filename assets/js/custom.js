const navHeight = 60;

/* Transition effect for navbar */
document.addEventListener('scroll', (e) => {
    /* checks if window is scrolled more than navHeight px, adds/removes bg-white and shadow class */
    const nav = document.querySelector('.nav-container');
    const logo = document.querySelector('.logo'); // Select the logo element
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    
    if (scrollTop > navHeight) {
        nav.className = 'nav-container shadow';
        // Change logo color to darker shade when navbar has white background
        logo.style.filter = 'brightness(0)'; // Makes white SVG black
        // Alternative: logo.style.fill = '#000'; // If directly changing SVG fill color
    } else {
        if (hasHeaderBg) {
            nav.className = 'nav-container nav-background';
            logo.style.filter = 'brightness(1)'; // Back to white
            // Alternative: logo.style.fill = '#fff';
        } else {
            nav.className = 'nav-container';
            logo.style.filter = 'brightness(1)'; // Back to white
            // Alternative: logo.style.fill = '#fff';
        }
    }
});

/* example gallery */
document.addEventListener('DOMContentLoaded', function () {
    const examples = document.querySelectorAll(".example-container");
    examples.forEach((example) => {
        const elements = example.querySelectorAll(".example-content");
        if (elements.length === 1) {
            const next = elements[0].querySelector(".next-button");
            if (next) {
                next.style.display = "none";
            }
            return
        }
        for (let i = 0; i < elements.length; i++) {
            const ele = elements[i];
            const nexti = i + 1 === elements.length ? 0 : i + 1;
            const next_ele = elements[nexti];
            const title = ele.querySelector(".title").firstElementChild;
            const title_text = `${title.textContent} (${i + 1}/${elements.length})`
            title.textContent = title_text;
            const button = ele.querySelector(".next-button");
            button.addEventListener("click", (e) => {
                e.preventDefault();
                ele.style.display = "none";
                next_ele.style.display = "block"
            })
        }
    })
});