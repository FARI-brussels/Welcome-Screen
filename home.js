async function loadHome() {
  await loadDemoFromDirectus();
  console.log(demoContent)

  const sdgUrlList = demoContent.sdg_images.map(
    (a) => `${directusUrl}/assets/${a.directus_files_id}`
  );
  const sdgImageElements = sdgUrlList
    .map(
      (url) =>
        `<img src="${url}" height=40px alt="SDG Image" style="margin-right:20px;" >`
    )
    .join("");
  const logos  = demoContent.logos.map(
    (a) => `${directusUrl}/assets/${a.directus_files_id}`
  );
  const partnerLogoImageElements = logos
    .map(
      (url) =>
        `<div class="carouselItem"><img src="${url}" height=70px alt="SDG Image"></div>`
    )
    .join("");

  // Get the selected language from the global variable
  const selectedLanguageText = selectedLanguage || "en"; // Default to 'EN' if selectedLanguage is empty
  console.log(selectedLanguageText);

  let translations = demoContent.translations.find(translation => translation.languages_code===selectedLanguageText)
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
          <h1>${translations['title']}</h1>
          <h2>${translations['topic']}</h2>
          <p>${translations['description']}</p>
        </div>

        <div class="home-instructions-research">
          <p class="research_l"> <em>Research Head :</em> ${demoContent.research_head}</p>
          <p class="research_l"> <em>Research Lead :</em> ${demoContent.research_lead}</p>
        </div>
        <div class="imageList">
          <p>SDG:&nbsp;&nbsp;</p>${sdgImageElements}
        </div>

      <div>
          <button onclick="navigate('learnMore')" class="button-learnMore">Learn More</button>
      </div>
      </div>
      <div class="homeButtonDemoContainer">
        <button id="homeButtonDemo" onclick="navigate('demo')">Start Demo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
      </div>
    </div>
    
    <div id="carouselContainer">
      ${partnerLogoImageElements}
    </div>
  </body>
  
    `;
}
