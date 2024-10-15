let language = "en"; // Default to English
let directusUrl = "https://fari-cms.directus.app";
let pageHistory = ["home"]; // Start with the home page


let demoId = parseInt(window.location.pathname.split("/")[1]);
//if now demo id is supplied in the url then return to demo 3 (simplex)



demoId = Number.isInteger(demoId) ? demoId : 58;

let demoContent;

async function loadDemoFromDirectus() {
    try {
        const response = await axios.get(`${directusUrl}/items/demos`, {
          params: {
              fields: '*.*', // Fetch all fields including all translations
          }});
        if (!response.ok) {
            console.log("yo");
        }
        
        demos = await response.data;
        demoContent = demos.data.find(demo => demo.id === demoId);
    } catch (error) {
        console.error("Error occurred: ", error);
    }
}

function setLanguage(lang) {
  language = lang;
}

async function navigate(page) {
  var contentDiv = document.getElementById("content");
  const body = document.getElementById("body");

  if (page === "previous") {
    pageHistory.pop(); // remove the current page
    if (pageHistory.length > 0) {
      page = pageHistory[pageHistory.length - 1]; // set page to the last visited page
    } else {
      page = "home"; // if history is empty, return to home
    }
  } else {
    pageHistory.push(page);
  }

  switch (page) {
    case "home":
      body.setAttribute("class", "");
      contentDiv.innerHTML = await loadHome();
      break;
    case "languages":
      body.setAttribute("class", "languagePage");
      contentDiv.innerHTML = loadLanguages();
      break;
    case "learnMore":
      body.setAttribute("class", "");
      contentDiv.innerHTML = await loadLearnMore();
      break;
    case "demo":
      body.setAttribute("class", "");
      contentDiv.innerHTML = await loadDemo();
      break;
    default:
      body.setAttribute("class", "");
      contentDiv.innerHTML = await loadHome();
  }
}

// Initially load the home page
navigate("home");
