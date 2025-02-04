document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  // Show/hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // Scroll to top function
  window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle bounce and visibility animations
  setInterval(() => {
    backToTop.classList.add("bounce");
    setTimeout(() => {
      backToTop.classList.remove("bounce");
    }, 500); // Bounce duration

    // Hide and re-show the button
    setTimeout(() => {
      backToTop.style.opacity = 0;
      backToTop.style.pointerEvents = "none";
    }, 2000); // Time before disappearance

    setTimeout(() => {
      backToTop.style.opacity = 1;
      backToTop.style.pointerEvents = "auto";
    }, 3000); // Time before reappearance
  }, 5000); // Total cycle duration
});

const yinyang = () => {
  document.getElementById("imole").innerHTML =
    '<button onclick="yinyang()"><i class="fa-solid fa-moon" style="font-size: 30px; color: crimson;"></i></button>';
  document.getElementById("thor").href = "assets/css/dark.css";
};

const lite = () => {
  document.getElementById("yin").style.display = "none";
  document.getElementById("yang").style.display = "inline";
  document.getElementById("thor").href = "assets/css/light.css";
};

const nite = () => {
  document.getElementById("yang").style.display = "none";
  document.getElementById("yin").style.display = "inline";
  document.getElementById("thor").href = "assets/css/dark.css";
};
