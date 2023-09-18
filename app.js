let language = "en"; // Default to English
let strapiUrl = "http://46.226.110.124:1337";
let pageHistory = ["home"]; // Start with the home page
let demoPosition = parseInt(window.location.pathname.split("/")[1]);
//if now demo id is supplied in the url then return to demo 3 (simplex)

demoPosition = Number.isInteger(demoPosition) ? demoPosition : 3;

let demoContent;

async function loadDemoFromStrapi() {
  try {
    const response = await fetch(
      `${strapiUrl}/api/demos?locale=${language}&populate=*`
    );
    if (!response.ok) {
      console.log("yo");
    }
    demoContent = await response.json();
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
