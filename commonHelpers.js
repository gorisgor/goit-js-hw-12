import{a as n,i as l,S as m}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();n.defaults.headers.common.Authorization="43757696-1a32682a4096c08080d446579";n.defaults.baseURL="https://api.example.com/";const g=s=>n.get("",{params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});function h(s,r){if(s.total!==0){const a=s.hits.map(o=>{const{webformatURL:e,largeImageURL:t,tags:i,likes:d,views:u,comments:p,downloads:f}=o;return`<li class="card">
        <a class="gallery-link" href="${t}">
          <img src="${e}" alt="${i}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes <span>${d}</span></p>
          <p class="card-text">Views <span>${u}</span></p>
          <p class="card-text">Comments <span>${p}</span></p>
          <p class="card-text">Downloads <span>${f}</span></p>
        </div>
      </li>`}).join("");r.innerHTML=a}else r.innerHTML="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}const y=document.querySelector(".gallery"),L=document.querySelector(".form"),c=document.querySelector(".loader");L.addEventListener("submit",b);async function b(s){s.preventDefault();const r=s.currentTarget,a=r.elements.query.value;a.trim()!==""&&(c.classList.remove("is-hidden"),await g(a).then(o=>h(o,y)).catch(o=>{l.show({message:"Something went WRONG!",error:o,messageColor:"#fff",backgroundColor:"#b52222",position:"topRight",progressBar:!1})}).finally(()=>{r.reset(),c.classList.add("is-hidden"),w()}))}function w(){new m(".gallery a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
