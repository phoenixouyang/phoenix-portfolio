const phrases = [
    "Software Developer.",
    "AI Builder.",
    "ex-Financial Analyst.",
    "Excel Refugee.",
    "Escape Room Veteran.",
    "Baker Extraordinaire.",
];

const el = document.getElementById("typewriter");

if (el) {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const phrase = phrases[phraseIndex];

        if (deleting) {
            charIndex--;
            el.textContent = phrase.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(tick, 400);
                return;
            }
            setTimeout(tick, 40);
        } else {
            charIndex++;
            el.textContent = phrase.slice(0, charIndex);
            if (charIndex === phrase.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 70);
        }
    }

    tick();
}
