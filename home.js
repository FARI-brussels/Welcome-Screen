async function loadHome() {
  await loadDemoFromStrapi();
  const currentDemoContent = demoContent.data[demoPosition];
  const sdgUrlList = currentDemoContent.attributes.images_sdg.data.map(
    (a) => strapiUrl + a.attributes.url
  );
  const sdgImageElements = sdgUrlList
    .map(
      (url) =>
        `<img src="${url}" height=40px alt="SDG Image" style="margin-right:20px;" >`
    )
    .join("");
  const partnerLogoUrlList = currentDemoContent.attributes.caroussel.data.map(
    (a) => strapiUrl + a.attributes.url
  );
  const partnerLogoImageElements = partnerLogoUrlList
    .map(
      (url) =>
        `<div class="carouselItem"><img src="${url}" height=70px alt="SDG Image"></div>`
    )
    .join("");

  // Get the selected language from the global variable
  const selectedLanguageText = selectedLanguage || "EN"; // Default to 'EN' if selectedLanguage is empty
  console.log(currentDemoContent.attributes)
  return `
  
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
    <div class="page-header">
      <button class="page-header-languagesbutton" onclick="navigate('languages')">
        <i class="demo-button-text" style="font-style: normal;"> ${selectedLanguageText}&nbsp;&nbsp;</i>
        <i class="ph-light ph-globe" style="font-size: 24px"></i>
      </button>
    </div>
    
    
    <div class="instructions-demobutton">
      <div class="home-instructions">
        <div class="home-instructions-info">
          <h1>${currentDemoContent.attributes["title"]}</h1>
          <h2>${currentDemoContent.attributes["topic"]}</h2>
          <p>${currentDemoContent.attributes["explanation_short"]}</p>
        </div>

        <div class="home-instructions-research">
          <p class="research_l"> <em>Research Head :</em> ${currentDemoContent.attributes["research_head"]}</p>
          <p class="research_l"> <em>Research Lead :</em> ${currentDemoContent.attributes["research_lead"]}</p>
        </div>
        <div class="imageList">
          <p>SDG:&nbsp;&nbsp;</p>${sdgImageElements}
        </div>

      <div>
          <button onclick="navigate('learnMore')" class="button-learnMore">Learn More</button>
      </div>
      </div>
      <div class="homeButtonDemoContainer">
        <button id="homeButtonDemo" onclick="navigate('demo')">${currentDemoContent.attributes["button_demo_start"]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
      </div>
    </div>
    
    <div id="carouselContainer">
      ${partnerLogoImageElements}
    </div>
  </body>
  
    `;
}
