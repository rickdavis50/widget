(function(){
  const slot=document.querySelector("[data-wm-header]");
  if(!slot)return;
  const isHome=document.body.dataset.page==="home";
  const base=isHome?"":"index.html";
  const industriesLink=isHome?"#wm-industries":`${base}#wm-industries`;
  const capabilitiesLink=isHome?"#wm-capabilities":`${base}#wm-capabilities`;
  const aboutLink="about.html";
  const ctaHref=isHome?"#inquiry":"index.html#inquiry";
  const ctaMarkup=`<a class="wm-cta wm-cta-primary" href="${ctaHref}">BUILD WITH US</a>`;

  slot.innerHTML=`
    <header class="wm-nav">
      <div class="wm-nav-left">
        <a class="wm-brand" href="index.html">
          <span class="wm-brand-text">WIDGETMAKERS</span>
        </a>
      </div>
      <nav class="wm-nav-center">
        <a href="${industriesLink}">INDUSTRIES</a>
        <a href="${capabilitiesLink}">CAPABILITIES</a>
        <a href="${aboutLink}">ABOUT</a>
      </nav>
      <div class="wm-nav-right">
        ${ctaMarkup}
        <a class="wm-nav-logo" href="index.html" aria-label="Widget Makers logo">
          <img src="images/logo.svg" alt="Widget Makers logo">
        </a>
      </div>
    </header>
  `;
})();
