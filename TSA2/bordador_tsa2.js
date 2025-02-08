function animateBox(color) {
  const box = document.getElementById("animatedBox");
  const buttons = document.querySelectorAll(".day-btn");

  box.style.transition = "none";
  box.style.transform = "translate(-50%, -150%) scale(1)";
  box.style.opacity = "0";

  setTimeout(() => {
    box.style.transition = "opacity 0.5s ease-in";
    box.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    box.style.transition = "transform 1.2s ease-out";
    box.style.transform = "translate(-50%, -50%) translateY(100px) scale(1.1)";
  }, 500);

  setTimeout(() => {
    box.style.transition += ", border-color 0.6s ease-in-out";
    box.style.borderColor = color;
  }, 900);

  buttons.forEach(button => {
    button.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300);
  });
}
