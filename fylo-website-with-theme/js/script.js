const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Check if dark mode is enabled based on local storage or system preference
let isDarkMode = localStorage.getItem('color-theme') === 'dark' ||
                 window.matchMedia('(prefers-color-scheme: dark)').matches

// Show the appropriate icon based on the initial theme state
if (isDarkMode) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

// Function to toggle theme and update UI
const toggleMode = () => {
  isDarkMode = !isDarkMode
  // Toggle the 'dark' class on the document element
  document.documentElement.classList.toggle('dark', isDarkMode)
  // Update local storage to persist the theme preference
  localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light')
  // Toggle the visibility of the theme icons
  themeToggleDarkIcon.classList.toggle('hidden', !isDarkMode)
  themeToggleLightIcon.classList.toggle('hidden', isDarkMode)
}

themeToggleBtn.addEventListener('click', toggleMode)
