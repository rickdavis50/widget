(function(){
  const slot=document.querySelector("[data-wm-header]");
  if(!slot)return;
  const isHome=document.body.dataset.page==="home";
  const base=isHome?"":"index.html";
  const industriesLink=isHome?"#wm-industries":`${base}#wm-industries`;
  const capabilitiesLink=isHome?"#wm-capabilities":`${base}#wm-capabilities`;
  const aboutLink="about.html";

  slot.innerHTML=`
    <header class="wm-nav">
      <div class="wm-nav-left">
        <a class="wm-brand" href="index.html" aria-label="Widget Makers home">
          <img src="images/logo.svg" alt="Widget Makers logo">
        </a>
      </div>
      <nav class="wm-nav-center">
        <a href="${industriesLink}" data-copy="nav.industries">INDUSTRIES</a>
        <a href="${capabilitiesLink}" data-copy="nav.capabilities">CAPABILITIES</a>
        <a href="${aboutLink}" data-copy="nav.about">ABOUT</a>
      </nav>
    </header>
  `;
  if(window.wmCopy){
    document.dispatchEvent(new Event("wm:copy-refresh"));
  }
})();
