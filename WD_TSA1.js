document.getElementById("colorButton").addEventListener("click", function () {
    const colors = ["#ffcc00", "#66b3ff", "#8e44ad", "#2ecc71", "#f39c12"]; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".resume").style.backgroundColor = randomColor;
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
});
