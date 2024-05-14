import{a as m,i as l,S as g}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="43757696-1a32682a4096c08080d446579",L=s=>m.get(`${h}?key=${y}`,{params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});function b(s,r){if(s.total!==0){const a=s.hits.map(o=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:d,views:p,comments:u,downloads:f}=o;return`<li class="card">
        <a class="gallery-link" href="${t}">
          <img src="${e}" alt="${n}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes <span>${d}</span></p>
          <p class="card-text">Views <span>${p}</span></p>
          <p class="card-text">Comments <span>${u}</span></p>
          <p class="card-text">Downloads <span>${f}</span></p>
        </div>
      </li> 
      `}).join("");r.innerHTML=a}else r.innerHTML="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}const w=document.querySelector(".gallery"),v=document.querySelector(".form"),i=document.querySelector(".loader"),c=document.querySelector(".load-more");v.addEventListener("submit",x);async function x(s){s.preventDefault();const r=s.currentTarget,a=r.elements.query.value;if(a.trim()!==""){i.classList.remove("is-hidden");try{const{data:o}=await L(a);b(o,w),c.classList.remove("is-hidden")}catch(o){console.error(o),l.show({message:"Something went wrong!",messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}finally{r.reset(),i.classList.add("is-hidden"),c.classList.add("is-hidden"),S()}}}function S(){new g(".gallery a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
