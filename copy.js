(function(){
  const COPY_URL="copy.json";

  function getByPath(obj,path){
    return path.split(".").reduce((acc,key)=>acc&&acc[key]!=null?acc[key]:undefined,obj);
  }

  function applyCopy(map){
    if(!map)return;
    document.querySelectorAll("[data-copy]").forEach(el=>{
      const key=el.dataset.copy;
      const val=getByPath(map,key);
      if(val==null)return;
      if(el.dataset.copyHtml==="true"){
        el.innerHTML=val;
      }else{
        el.textContent=val;
      }
    });
  }

  fetch(COPY_URL)
    .then(res=>res.ok?res.json():Promise.reject(res.statusText))
    .then(data=>{
      window.wmCopy=data;
      applyCopy(data);
      document.addEventListener("wm:copy-refresh",()=>applyCopy(window.wmCopy));
    })
    .catch(err=>{
      console.warn("Copy load failed; using inline defaults.",err);
    });
})();
