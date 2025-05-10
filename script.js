// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form handler
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("📩 Message sent successfully! I’ll get back to you soon.");
    form.reset();
  });
}

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle dark mode
toggle?.addEventListener("click", () => {
  body.classList.toggle("dark");
  const current = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", current);
  toggle.innerText = current === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});
