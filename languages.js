// Define a global variable to store the selected language
let selectedLanguage = "";

function loadLanguages() {
  return `
      <header class="languageHeader">
        <h2 style="top:200px"> Choose your language to continue</h2>
      </header>
      
      <button class="languageButton" onclick="setLanguage('en'); setSelectedLanguage('en'); navigate('home')">
        <img src="assets/en.svg" class="languageFlag"></img>
        <p class="languageText">English</p>
      </button>
      
      <button class="languageButton" onclick="setSelectedLanguage('nl'); setLanguage('nl'); navigate('home')">
        <img src="assets/nl.svg" class="languageFlag">
        <p class="languageText">Nederlands</p>
      </button>

      <button class="languageButton" onclick="setSelectedLanguage('fr'); setLanguage('fr-FR'); navigate('home')">
        <img src="assets/fr.svg" class="languageFlag">
        <p class="languageText">Français</p>
      </button>

      `;
}

// Function to set the selected language variable
function setSelectedLanguage(language) {
  selectedLanguage = language.substring(0, 2);
}
