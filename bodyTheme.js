// Select the theme toggle icon
const themeIcon = document.querySelector(".bi-sun");

// Check for stored theme preference in localStorage
const savedTheme = localStorage.getItem("theme");

// Function to apply theme styles
function applyTheme(isDark) {
  if (isDark) {
    document.body.style.backgroundColor = "rgb(33, 33, 33)";
    document.body.style.color = "white";
    
    themeIcon.classList.replace("bi-moon", "bi-sun"); // Set sun icon
    localStorage.setItem("theme", "dark");
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector("body > header > nav").style.backgroundColor = "white";
    document.querySelector("body > header > .menu-icon").style.backgroundColor = "white";
    document.querySelector("body > section > .btn-group").style.color = "black";
    document.querySelector("body > section > .social").style.color = "black";
    themeIcon.classList.replace("bi-sun", "bi-moon"); // Set moon icon
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme if it exists
applyTheme(savedTheme === "dark");

// Add event listener for theme toggle click
themeIcon.addEventListener("click", () => {
  // Use `getComputedStyle` to get actual background color
  const currentBg = window.getComputedStyle(document.body).backgroundColor;
  const isDarkMode = currentBg === "rgb(33, 33, 33)";
  applyTheme(!isDarkMode);
});


