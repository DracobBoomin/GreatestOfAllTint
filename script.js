const siteConfig = {
  businessName: "G.O.A.T Greatest of All Tint",
  instagram: "https://www.instagram.com/Greatestofalltint/",
  quoteEmail: "Jacobsweet33@gmail.com",
  quotePhone: "775-300-5764"
};

const navToggle = document.querySelector(".nav-toggle");
const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");
const emailLink = document.querySelector("#emailLink");
const phoneLink = document.querySelector("#phoneLink");

function phoneHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function buildQuoteMessage(formData) {
  return [
    `New quote request for ${siteConfig.businessName}`,
    "",
    `Name: ${formData.get("name")}`,
    `Contact: ${formData.get("contact")}`,
    `Vehicle: ${formData.get("vehicle")}`,
    `Tint goal: ${formData.get("goal")}`,
    "",
    `Notes: ${formData.get("notes") || "No notes provided"}`
  ].join("\n");
}

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

emailLink.href = `mailto:${siteConfig.quoteEmail}?subject=${encodeURIComponent("Tint quote request")}`;
phoneLink.href = phoneHref(siteConfig.quotePhone);
phoneLink.textContent = `Call or text ${siteConfig.quotePhone}`;
emailLink.textContent = siteConfig.quoteEmail;

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const subject = `Tint quote request - ${formData.get("vehicle")}`;
  const body = buildQuoteMessage(formData);
  const mailto = `mailto:${siteConfig.quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formNote.textContent = "Opening your email app with the quote request filled in.";
  window.location.href = mailto;
});
