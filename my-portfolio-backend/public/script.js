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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, #home");
  const navLinks = document.querySelectorAll(".nav-btn");

  // Highlight clicked nav link immediately
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Highlight based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "#000", // or your preferred background color
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
    detectRetina: true,
  });
});
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
