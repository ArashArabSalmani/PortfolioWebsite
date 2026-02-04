/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
});

/* Terminal typing */
const terminalText = [
  "> booting system...",
  "> loading creativity...",
  "> initializing neon interface...",
  "> ready."
];

let i = 0;
const terminal = document.getElementById("terminal");

function typeLine() {
  if (i < terminalText.length) {
    terminal.innerHTML += terminalText[i] + "<br>";
    i++;
    setTimeout(typeLine, 700);
  }
}
typeLine();

const btn = document.getElementById("resumeBtn");
const modal = document.getElementById("resumeModal");
const close = document.getElementById("closeModal");

btn.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
