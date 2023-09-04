async function loadLearnMore() {
  await loadDemoFromStrapi();
  const currentDemoContent = demoContent.data[demoPosition];
  return `
    <head>
        <link rel="stylesheet" href="style.css">

    </head>
    <style>
    body{
        background-color: #2250C6;
    }
    </style>
    <body>
    <div class="learnmore-content">
        <h1>NRG Coin</h1>
        <h3>Climate and Energy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper magna. Pellentesque rutrum sem nisi, ac tincidunt lacus pellentesque eu. Etiam id tortor urna. Integer nisi dolor, vulputate vitae mi a, condimentum mattis erat. Proin ac nunc augue. Nunc efficitur lectus justo, vitae luctus mi viverra vel. </p>
        <p>Vestibulum suscipit rhoncus libero nec tincidunt. Vestibulum ornare erat id enim elementum euismod. Sed sodales sem ante, vel rutrum ex tincidunt in. Aenean eleifend venenatis purus, a interdum dolor mollis eu. Nullam efficitur massa vel quam </p>
        <p> egestas, convallis posuere turpis tincidunt. Nam neque mi, luctus et tellus quis, porta porta quam. Integer vitae facilisis odio.</p>
    </div>
    <div class="learnmore-rectangle">
        
    </div>
    
    </body>

    <div class="page-header">
        <button class="page-header-exit-button" class="button-learnMore"  onclick="navigate(\'previous\')">
          <i class="ph-light ph-x-circle"></i>
        </button>       
    </div>
     <!-- <h1>${currentDemoContent.attributes["learn_more"]}</h1>
     <p>${currentDemoContent.attributes["explanation"]}</p>  -->
    `;
}
