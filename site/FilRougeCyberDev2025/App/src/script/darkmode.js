// Selecting DOM elements
const imglogo = document.querySelector('header').querySelector('div').querySelectorAll('img');
const logo = imglogo[1]; // Select the logo image (second img element)
const darkModIcon = imglogo[0]; // Select the dark mode toggle icon (first img element)


/**
 * Toggles between dark and light mode
 * - Adds/removes 'darkMode' class from body
 * - Updates localStorage with current theme settings
 * - Changes logo and theme icon images based on current mode
 */
function DarkModToggle(){
        document.body.classList.toggle('darkMode');
        if (document.body.classList.contains('darkMode')) {
                // Dark mode is active
                localStorage.setItem('darkmode', 'enabled');
                logo.src='./App/src/images/darkModeLogo.webp'; // Change to dark mode logo
                darkModIcon.src='./App/src/images/light.webp'  // Change to light icon (sun)
                localStorage.setItem('themeIcon', 'soleil');   // Save current icon state as 'sun'
        } else {
                // Light mode is active
                localStorage.setItem('darkmode', 'disabled');
                logo.src = './App/src/images/logo.webp';       // Change to light mode logo
                darkModIcon.src = './App/src/images/dark.webp' // Change to dark icon (moon)
                localStorage.setItem('themeIcon', 'lune');     // Save current icon state as 'moon'
        }
}

/**
 * Restores the dark/light mode state from localStorage when page loads
 * - Checks localStorage for saved theme preferences
 * - Applies appropriate CSS classes and images based on saved state
 */
function DarkModeMemory(){
        const darkModeStatus = localStorage.getItem('darkmode');
        console.log(darkModeStatus);
        const themeIcon = localStorage.getItem('themeIcon');
        console.log(themeIcon);
        if (darkModeStatus ==='enabled') {
                // Restore dark mode if it was previously enabled
                document.body.classList.add('darkMode');
                logo.src = './App/src/images/darkModeLogo.webp';
                darkModIcon.src = './App/src/images/light.webp'
        }
        if (themeIcon ==='soleil') {
                // Ensure correct images are showing based on saved icon state
                logo.src = './App/src/images/darkModeLogo.webp';
                darkModIcon.src = './App/src/images/light.webp';
        } else {
                logo.src = './App/src/images/logo.webp';
                darkModIcon.src = './App/src/images/dark.webp'
        }
}

// Event listeners
document.addEventListener('DOMContentLoaded', DarkModeMemory); // Load theme settings when DOM is ready
darkModIcon.addEventListener('click', DarkModToggle);         // Toggle theme when icon is clicked