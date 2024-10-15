async function loadDemo() {
  await loadDemoFromDirectus();
  const selectedLanguageText = selectedLanguage || "en"; // Default to 'EN' if selectedLanguage is empty
  let translations = demoContent.translations.find(translation => translation.languages_code===selectedLanguageText)
  console.log(translations);
  if (translations.app_url){
    demoContainer = `<iframe id="inlineFrameExample" class="zoom-out" 
        title="Inline Frame Example"
        src="${translations.app_url}">
        </iframe>`;
  } else if (demoContent.video) {
    console.log(demoContent.attributes);
    videoUrl =
      strapiUrl + demoContent.attributes.video.data.attributes.url;
    demoContainer = `<video src="${videoUrl}" controls autoplay></video>`;
  }
  return `

    
    <div class="page-header-demo">

        <button class="demo-previous-button" onclick="navigate('previous')">
          <i class="ph ph-arrow-left" style="font-size: 24px"></i>
          <i class="demo-button-text">&nbsp;&nbsp; Previous</i>
        </button>

        <button class="demo-home-button" onclick="navigate(\'home\')">
          <i class="ph ph-house" style="font-size: 24px"></i>
          <i class="demo-button-text">&nbsp;&nbsp; Home</i>
        </button> 

        <button class="demo-languages-button" onclick="navigate(\'languages\')">
          <i class="demo-button-text" style="font-style: normal;"> ${selectedLanguageText}&nbsp;&nbsp;</i>
          <i class="ph-light ph-globe" style="font-size: 24px"></i>
        </button> 
        

        <button class="demo-learnmore-button" class="button-learnMore" onclick="navigate(\'learnMore\')">
          <i class="ph ph-question" style="font-size: 24px"></i>
          <i class="demo-button-text">&nbsp;&nbsp; Learn More</i>
        </button> 

        
    </div>

  
    
      <div id="demoContainer"> 
        ${demoContainer} 
      </div>
    

    `;
}
