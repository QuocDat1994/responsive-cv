const navBtn = document.querySelector("#nav-btn");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("is-active");
});

const path = window.location.pathname;

if (path.includes("index.html")) {
  document.querySelector("#nav-home").classList.toggle("is-active");
} else if (path.includes("resume.html")) {
  document.querySelector("#nav-resume").classList.toggle("is-active");
} else if (path.includes("projects.html")) {
  document.querySelector("#nav-projects").classList.toggle("is-active");
} else if (path.includes("contact.html")) {
  document.querySelector("#nav-contact").classList.toggle("is-active");
}
