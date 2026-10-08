const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
    siteNav.classList.toggle("nav-open", !isExpanded);
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.querySelector("#form-note");
    note.textContent = "Biểu mẫu này chưa được kết nối máy chủ nên lời nhắn chưa được gửi. Vui lòng bổ sung backend liên hệ trước khi sử dụng.";
    note.classList.add("form-note-alert");
  });
}
