const mega_menu = document.querySelector('.mega-menu');
const burger_menu = document.querySelector('.burger-menu');
const others = document.querySelector('.others');

// Function to toggle the mega-menu visibility
const toggleVisibility = () => {
  mega_menu.classList.toggle('none');
};

// Attach the event listeners to both buttons
burger_menu.addEventListener('click', toggleVisibility);
others.addEventListener('click', toggleVisibility);

//-----------------------------------------------------------------------------------------
//settings menu
const geer = document.querySelector('.settings-btn')
const settings_sec = document.querySelector('.settings-sec')
const cancel_btn = document.querySelector('.settings-sec .set-header i')

geer.addEventListener('click', () => {
  settings_sec.classList.remove('d-none')
})

cancel_btn.addEventListener('click', () => {
  settings_sec.classList.add('d-none')
})

//-- dark mode
const dark = document.querySelector(".settings-sec .set-body .dark > div")
// Apply saved theme on initial load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle and reload
dark.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  location.reload()
});

if (!savedTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

// -- main-color
const root = document.documentElement;
const picker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetColor");

// Load saved color from localStorage
const savedColor = localStorage.getItem("mainColor");
if (savedColor) {
  root.style.setProperty("--main-color", savedColor);
  picker.value = savedColor;
}

// When user picks a new color
picker.addEventListener("input", () => {
  const newColor = picker.value;
  localStorage.setItem("mainColor", newColor);
  root.style.setProperty("--main-color", newColor);
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("mainColor");
  root.style.removeProperty("--main-color");
  location.reload(); 
});