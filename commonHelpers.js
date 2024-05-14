import{a as f,i as c,S as m}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="43757696-1a32682a4096c08080d446579",h=r=>f.get(`${g}?key=${y}`,{params:{q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});function b(r,s){if(r.total!==0){const a=r.hits.map(o=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:l,views:d,comments:p,downloads:u}=o;return`<li class="card">
        <a class="gallery-link" href="${t}">
          <img src="${e}" alt="${n}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes <span>${l}</span></p>
          <p class="card-text">Views <span>${d}</span></p>
          <p class="card-text">Comments <span>${p}</span></p>
          <p class="card-text">Downloads <span>${u}</span></p>
        </div>
      </li> 
      <button type = "submit" class ="load-more">Load more</button>`}).join("");s.innerHTML=a}else s.innerHTML="",c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}const L=document.querySelector(".gallery"),w=document.querySelector(".form"),i=document.querySelector(".loader");w.addEventListener("submit",x);async function x(r){r.preventDefault();const s=r.currentTarget,a=s.elements.query.value;if(a.trim()!==""){i.classList.remove("is-hidden");try{const{data:o}=await h(a);b(o,L)}catch(o){console.error(o),c.show({message:"Something went wrong!",messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}finally{s.reset(),i.classList.add("is-hidden"),v()}}}function v(){new m(".gallery a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
