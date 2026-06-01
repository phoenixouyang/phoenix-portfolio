const observer = new IntersectionObserver((elements) => {
    elements.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("in-view");
            e.target.classList.remove("not-in-view");
            observer.unobserve(e.target);
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