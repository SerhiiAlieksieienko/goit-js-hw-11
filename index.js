import{a as m,S as d,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="49647970-80f040e49b2c31806d94ce79c";async function y(o){try{return(await m.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${p}</p>
          <p>Downloads: ${f}</p>
        </div>
      </li>
    `).join("");l.innerHTML=t,h.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("is-active")}function c(){u.classList.remove("is-active")}const b=document.querySelector(".form");b.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}v(),w();try{const i=await y(t);if(c(),i.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i)}catch{c(),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
