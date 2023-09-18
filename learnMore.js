async function loadLearnMore() {
  await loadDemoFromStrapi();
  const currentDemoContent = demoContent.data[demoPosition];
  const selectedLanguageText = selectedLanguage || "EN";
  return `
    <style>
    body{
        background-color: #2250C6;
    }
    </style>
    <body>
    <div class="learnmore-content">
        <h1>Comming soon</h1>
    </div>
    <div class="learnmore-rectangle">
        
    </div>
    
    </body>

    <div class="page-header">
        <button class="page-header-exit-button" class="button-learnMore"  onclick="navigate(\'previous\')">
          <i class="ph-light ph-x-circle"></i>
        </button> 
        
    
        <button class="demo-languages-button" onclick="navigate(\'languages\')">
            <i class="demo-button-text" style="font-style: normal;"> ${selectedLanguageText}&nbsp;&nbsp;</i>
            <i class="ph-light ph-globe" style="font-size: 24px"></i>
        </button> 
  
 
</div>
    </div>
     <!-- <h1>${currentDemoContent.attributes["learn_more"]}</h1>
     <p>${currentDemoContent.attributes["explanation"]}</p>  -->
    `;
}
