/**
 * 3Base Associates
 * Main JS Bootstrap
 * Enterprise-safe initialization
 */

import { initHeaderSizing, initMobileNav, initScrollHeader } from "./components/header.js";
import { initRevealAnimations } from "./core/animations.js";
import { initSmoothScroll } from "./core/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeaderSizing();
  initScrollHeader();
  initMobileNav();
  initSmoothScroll();
  initRevealAnimations();
});


// ===============================
// WhatsApp Form Submission
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage = `
New Inquiry – 3Base Associates

Name: ${name}
Email: ${email}
Phone: ${phone}
Topic: ${topic}

Message:
${message}
    `.trim();

    const whatsappNumber = "917016700886"; // no + sign
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  });
}
