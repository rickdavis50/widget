(function(){
  const slot=document.querySelector("[data-wm-header]");
  if(!slot)return;
  const isHome=document.body.dataset.page==="home";
  const base=isHome?"":"index.html";
  const industriesLink=isHome?"#wm-industries":`${base}#wm-industries`;
  const capabilitiesLink=isHome?"#wm-capabilities":`${base}#wm-capabilities`;
  const aboutLink="about.html";
  const contactMarkup=isHome
    ? '<button class="wm-cta js-contact-btn" type="button">CONTACT BUTTON</button>'
    : '<a class="wm-cta" href="index.html#inquiry">CONTACT BUTTON</a>';

  slot.innerHTML=`
    <header class="wm-nav">
      <div class="wm-nav-left">LOGO</div>
      <nav class="wm-nav-center">
        <a href="${industriesLink}">INDUSTRIES</a>
        <a href="${capabilitiesLink}">CAPABILITIES</a>
        <a href="${aboutLink}">ABOUT</a>
      </nav>
      ${contactMarkup}
    </header>
  `;
})();
