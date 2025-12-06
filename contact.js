let btn = document.querySelector(".submit-btn");
btn.addEventListener("click", () => {
  let n = document.createElement("div");
  n.textContent = "Message Sent!";
  n.style.cssText = "position:fixed;bottom:50px;right:100px;background:#ff4c24;color:white;padding:8px 12px;border-radius:4px;font-size:15px;transform: scale(1.5);box-shadow: 0 2px 6px rgba(0,0,0,0.2);z-index:1000;";
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 3000);
});
