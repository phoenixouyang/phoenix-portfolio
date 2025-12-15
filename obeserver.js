const observer = new IntersectionObserver((elements) => {
    elements.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("in-view");
            e.target.classList.remove("not-in-view");
        } else {
            e.target.classList.remove("in-view");
            e.target.classList.add("not-in-view");
        }
    });
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

const tags = document.querySelectorAll(".fade-in");

tags.forEach((tag) => {
    observer.observe(tag);
});