gsap.registerPlugin(ScrollTrigger);

const heroTextSpans = document.querySelectorAll(".hero-container h1 span");

gsap.set(heroTextSpans, { y: 60, opacity: 0 });
gsap.to(heroTextSpans, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "bounce.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".hero-container h1",
    start: "top 80%"
  }
});

gsap.from([".hero-container p", "#cta-1", "#cta-2"], {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top 70%"
  }
});

gsap.from("#blog h2", {
  opacity: 0,
  x: -100,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#blog",
    start: "top 85%"
  }
});

gsap.from(".blog-card", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".blog-cards-container",
    start: "top 80%"
  }
});

gsap.from("#category h2", {
  opacity: 0,
  x: 100,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#category",
    start: "top 85%"
  }
});

gsap.from(".category-card", {
  opacity: 0,
  scale: 0.9,
  y: 40,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".category-grid",
    start: "top 80%"
  }
});

gsap.from(".about-us h2", {
  opacity: 0,
  scale: 0.5,
  duration: 0.6,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 85%"
  }
});

gsap.from(".about-us h4, .about-us p", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 80%"
  }
});

gsap.from(".contact-section h2", {
  opacity: 0,
  y: -50,
  duration: 0.7,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%"
  }
});

gsap.from(".contact-section p, .contact-form input, .contact-form textarea, .contact-form button", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%"
  }
});

gsap.from("footer", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%"
  }
});

document.querySelectorAll(".blog-card, .category-card").forEach(card => {
  const tl = gsap.timeline({ paused: true });

  tl.to(card, {
    y: -10,
    scale: 1.02,
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    duration: 0.3,
    ease: "power2.out"
  });

  card.addEventListener("mouseenter", () => tl.play());
  card.addEventListener("mouseleave", () => tl.reverse());
});
