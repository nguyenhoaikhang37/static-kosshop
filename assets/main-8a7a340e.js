(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();$(window).ready(function(){$(".slider-customer").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>"}),$(".slider-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>"}),$(".slider-news-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>"}),$(".slider-banner").slick({dots:!0,infinite:!0,speed:500,autoplaySpeed:4e3,autoplay:!0,arrows:!1}),$(".slider-outstanding-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!1}),$(".slider-main-news").slick({dots:!1,infinite:!0,speed:500,autoplay:!1,arrows:!0,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:"<button type='button' class='slider-hover-button slider-hover-button--prev'><i class='text-lg text-dark fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slider-hover-button slider-hover-button--next'><i class='text-lg text-dark fa-solid fa-chevron-right'></i></button>"}),$(".slider-category-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!0,prevArrow:"<button type='button' class='left-0 top-1/2 -translate-y-full pull-left absolute lg:left-auto lg:translate-y-0 lg:!right-[28%] lg:top-0 z-10'><i class='text-slate-700 hover:text-slate-500 text-4xl fa-solid fa-circle-chevron-left'></i></button>",nextArrow:"<button type='button' class='right-0 top-1/2 -translate-y-full pull-right absolute lg:left-auto lg:translate-y-0 lg:!right-[23%] lg:top-0 z-10'><i class='text-slate-700 hover:text-slate-500 text-4xl fa-solid fa-circle-chevron-right'></i></button>"}),$(".slider-brand").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}}],prevArrow:"<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>"}),$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!1,adaptiveHeight:!0,infinite:!1,useTransform:!0,speed:400,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)",prevArrow:"<button type='button' class='slick-prev pull-left'><i class='text-3xl text-primary fa-solid fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='text-3xl text-primary fa-solid fa-chevron-right'></i></button>"}),$(".slider-nav").on("init",function(e,t){$(".slider-nav .slick-slide.slick-current").addClass("is-active")}).slick({slidesToShow:9,slidesToScroll:9,dots:!1,focusOnSelect:!1,infinite:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:640,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:420,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".slider-single").on("afterChange",function(e,t,s){$(".slider-nav").slick("slickGoTo",s);var i='.slider-nav .slick-slide[data-slick-index="'+s+'"]';$(".slider-nav .slick-slide.is-active").removeClass("is-active"),$(i).addClass("is-active")}),$(".slider-nav").on("click",".slick-slide",function(e){e.preventDefault();var t=$(this).data("slick-index");$(".slider-single").slick("slickGoTo",t)})});window.addEventListener("DOMContentLoaded",u);function u(){getEls(".js-toggle").forEach(e=>{const t=e.getAttribute("toggle-target");t||(document.body.innerText=`Cần thêm toggle-target cho: ${e.outerHTML}`),e.onclick=()=>{if(!getEl(t))return document.body.innerText=`Không tìm thấy phần tử "${t}"`;const s=getEl(t).classList.contains("hide");requestAnimationFrame(()=>{getEl(t).classList.toggle("hide",!s),getEl(t).classList.toggle("show",s)})}})}u();const a=getEl("#category-navbar");function f(){if(window.location.pathname!=="/"&&window.location.pathname!=="/main-news/"||window.innerWidth<1200)return;(document.documentElement.scrollTop||document.body.scrollTop)>50?a.style.display="none":a.style.display="block"}window.addEventListener("DOMContentLoaded",f);window.onscroll=f;const p=document.querySelectorAll(".mega-menu-item"),d=document.querySelector(".mega-menu");p.forEach(e=>{e.addEventListener("mouseover",function(){e.querySelector(".fa-chevron-right")&&(d.style.display="block")}),e.addEventListener("mouseout",function(){d.style.display="none"})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".product-item");e&&e.forEach(t=>{const s=t.querySelectorAll(".small-image"),i=t.querySelector(".big-image");s.forEach(n=>{n.addEventListener("mouseover",function(){s.forEach(l=>{l.classList.remove("border-primary"),l.classList.remove("border-greyLight")}),n.classList.add("border-primary"),n.classList.remove("border-greyLight");const o=n.querySelector("img").src;i.src=o})})})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".toggleButton");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const s=t.querySelector("span").textContent==="Xem tất cả";t.querySelector("span").textContent=s?"Thu gọn":"Xem tất cả";const i=s?"fa-chevron-up":"fa-chevron-down";t.querySelector("i").classList=`text-sm fa-solid ${i}`})})});window.addEventListener("DOMContentLoaded",()=>{const e=getEl("#gallery-dialog"),t=getEl("#gallery-button"),s=getEls(".js-gallery-close");!e||!t||!s||(t.onclick=function(){e.style.opacity=1,e.style.visibility="visible"},s.forEach(i=>{i.onclick=function(){e.style.opacity=0,e.style.visibility="hidden"}}),window.onclick=function(i){i.target==e&&(e.style.opacity=0,e.style.visibility="hidden")})});window.addEventListener("DOMContentLoaded",()=>{const e=getEl("#specifications-dialog"),t=getEl("#specifications-button"),s=getEls(".js-specifications-close");!e||!t||!s||(t.onclick=function(){e.style.opacity=1,e.style.visibility="visible"},s.forEach(i=>{i.onclick=function(){e.style.opacity=0,e.style.visibility="hidden"}}),window.onclick=function(i){i.target==e&&(e.style.opacity=0,e.style.visibility="hidden")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("#storeList button"),t=document.getElementById("district"),s=document.getElementById("mapIframe");if(!e||!t||!s)return;e[0].classList.add("text-white","bg-gradient");function i(o){s.src=o}function n(o){const l=o.currentTarget;e.forEach(c=>c.classList.remove("text-white","bg-gradient")),l.classList.add("text-white","bg-gradient");const r=l.getAttribute("data-iframe-link");i(r)}e.forEach(o=>{o.addEventListener("click",n)}),t.addEventListener("change",function(){const o=t.value;e.forEach(r=>{r.style.display="none"}),e.forEach(r=>{(r.getAttribute("data-place")===o||o==="all")&&(r.style.display="flex")});const l=Array.from(e).filter(r=>r.style.display!=="none");l.length>0&&l[0].click()})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("score-rating");if(!e)return;function t(){document.querySelectorAll('input[name="rating"]').forEach(i=>{i.addEventListener("change",n=>{const o=document.querySelector('input[name="rating"]:checked').value;e.innerHTML=o})})}t()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scroll-top-btn");function t(){window.scrollY>100?e.style.display="flex":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#header-pc"),t=getEl("#search-btn-mobile"),s=getEl("#search-input-mobile"),i=getEl("#clear-search-btn");!e||!t||!s||!i||(t.addEventListener("click",function(){e.style.display="none",s.style.display="flex"}),i.addEventListener("click",function(){e.style.display="flex",s.style.display="none"}))});
