(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();$(window).ready(function(){$(".slider-customer").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-news-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-banner").slick({dots:!0,infinite:!0,speed:500,arrows:!1}),$(".slider-outstanding-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!1}),$(".slider-main-news").slick({dots:!1,infinite:!0,speed:500,autoplay:!1,arrows:!0,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:"<button type='button' class='slider-hover-button slider-hover-button--prev'><i class='text-lg text-dark fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slider-hover-button slider-hover-button--next'><i class='text-lg text-dark fal fa-chevron-right'></i></button>"}),$(".slider-category-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!0,prevArrow:"<button type='button' class='left-0 top-1/2 -translate-y-full pull-left absolute lg:left-auto lg:translate-y-0 lg:!right-[28%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='right-0 top-1/2 -translate-y-full pull-right absolute lg:left-auto lg:translate-y-0 lg:!right-[23%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-right'></i></button>"}),$(".slider-brand").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,fade:!1,adaptiveHeight:!0,useTransform:!0,speed:200,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)",prevArrow:"<button type='button' class='slick-prev pull-left !translate-x-0'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !translate-x-0'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>"}),$(".slider-nav").on("init",function(e,t){$(".slider-nav .slick-slide.slick-current").addClass("is-active")}).slick({slidesToShow:8,slidesToScroll:8,dots:!1,focusOnSelect:!1,infinite:!1,prevArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 left-0 pull-left z-[100]'><i class='text-lg text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 right-0 pull-right z-[100]'><i class='text-lg text-primary fal fa-chevron-right'></i></button>"}),$(".slider-single").on("afterChange",function(e,t,s){$(".slider-nav").slick("slickGoTo",s);let l='.slider-nav .slick-slide[data-slick-index="'+s+'"]';$(".slider-nav .slick-slide.is-active").removeClass("is-active"),$(l).addClass("is-active")}),$(".slider-nav").on("click",".slick-slide",function(e){e.preventDefault();let t=$(this).data("slick-index");$(".slider-single").slick("slickGoTo",t)})});$(window).ready(function(){$(".slider-single").slickLightbox({itemSelector:"a",navigateByKeyboard:!0,caption:"caption",layouts:{closeButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>',nextArrowButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>'}})});window.addEventListener("DOMContentLoaded",u);function u(){getEls(".js-toggle").forEach(e=>{const t=e.getAttribute("data-toggle-target");t||(document.body.innerText=`Cần thêm data-toggle-target cho: ${e.outerHTML}`),e.onclick=()=>{if(!getEl(t))return document.body.innerText=`Không tìm thấy phần tử "${t}"`;const s=getEl(t).classList.contains("hide");requestAnimationFrame(()=>{getEl(t).classList.toggle("hide",!s),getEl(t).classList.toggle("show",s)})}})}u();const c=getEl("#category-navbar");function f(){if(window.location.pathname!=="/"&&window.location.pathname!=="/main-news/"||window.innerWidth<1200)return;(document.documentElement.scrollTop||document.body.scrollTop)>50?c.style.display="none":c.style.display="block"}window.addEventListener("DOMContentLoaded",f);window.onscroll=f;const p=document.querySelectorAll(".mega-menu-item"),d=document.querySelector(".mega-menu");p.forEach(e=>{e.addEventListener("mouseover",function(){e.querySelector(".fa-chevron-right")&&(d.style.display="block")}),e.addEventListener("mouseout",function(){d.style.display="none"})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".product-item");e&&e.forEach(t=>{const s=t.querySelectorAll(".small-image"),l=t.querySelector(".big-image");s.forEach(n=>{n.addEventListener("mouseover",function(){s.forEach(i=>{i.classList.remove("border-primary"),i.classList.remove("border-greyLight")}),n.classList.add("border-primary"),n.classList.remove("border-greyLight");const o=n.querySelector("img").src;l.src=o})})})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".toggleButton");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const s=t.querySelector("span").textContent==="Xem tất cả";t.querySelector("span").textContent=s?"Thu gọn":"Xem tất cả";const l=s?"fa-chevron-up":"fa-chevron-down";t.querySelector("i").classList=`text-sm fas ${l}`})})});document.addEventListener("DOMContentLoaded",function(){const e=getEls(".js-dialog-button"),t=getEls(".js-dialog-close");if(!e||!t)return;function s(n){n.style.opacity=1,n.style.visibility="visible"}function l(n){n.style.opacity=0,n.style.visibility="hidden"}e.forEach(n=>{n.addEventListener("click",function(){const o=this.getAttribute("data-dialog-id"),i=getEl(`#${o}`);i&&s(i)})}),t.forEach(n=>{n.addEventListener("click",function(){const o=this.getAttribute("data-dialog-id"),i=getEl(`#${o}`);i&&l(i)})}),window.addEventListener("click",function(n){e.forEach(o=>{const i=o.getAttribute("data-dialog-id"),r=getEl(`#${i}`);r&&n.target==r&&l(r)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("#storeList button"),t=document.getElementById("district"),s=document.getElementById("mapIframe");if(!e||!t||!s)return;e[0].classList.add("text-white","bg-gradient");function l(o){s.src=o}function n(o){const i=o.currentTarget;e.forEach(a=>a.classList.remove("text-white","bg-gradient")),i.classList.add("text-white","bg-gradient");const r=i.getAttribute("data-iframe-link");l(r)}e.forEach(o=>{o.addEventListener("click",n)}),t.addEventListener("change",function(){const o=t.value;e.forEach(r=>{r.style.display="none"}),e.forEach(r=>{(r.getAttribute("data-place")===o||o==="all")&&(r.style.display="flex")});const i=Array.from(e).filter(r=>r.style.display!=="none");i.length>0&&i[0].click()})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("score-rating");if(!e)return;function t(){document.querySelectorAll('input[name="rating"]').forEach(l=>{l.addEventListener("change",n=>{const o=document.querySelector('input[name="rating"]:checked').value;e.innerHTML=o})})}t()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scroll-top-btn");function t(){window.scrollY>100?e.style.display="flex":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#header-pc"),t=getEl("#search-btn-mobile"),s=getEl("#search-input-mobile"),l=getEl("#clear-search-btn");!e||!t||!s||!l||(t.addEventListener("click",function(){e.style.display="none",s.style.display="flex"}),l.addEventListener("click",function(){e.style.display="flex",s.style.display="none"}))});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#search-btn-on-dialog"),t=getEl("#menuBar"),s=getEl("#header-pc"),l=getEl("#search-input-mobile");!e||!t||!s||!l||e.addEventListener("click",function(){t.classList.remove("show"),t.classList.add("hide"),s.style.display="none",l.style.display="flex"})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".arrow-sidebar").forEach(function(t){t.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),this.classList.toggle("active"),this.parentElement.nextElementSibling.classList.toggle("hidden")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".js-input-quantity"),t=document.querySelectorAll(".js-decrease-quantity-btn");document.querySelectorAll(".js-increase-quantity-btn").forEach(function(l){l.addEventListener("click",function(){const n=this.parentElement.querySelector(".js-input-quantity"),o=parseInt(n.value,10);n.value=o+1})}),t.forEach(function(l){l.addEventListener("click",function(){const n=this.parentElement.querySelector(".js-input-quantity"),o=parseInt(n.value,10);o>1&&(n.value=o-1)})}),e.forEach(function(l){l.addEventListener("change",function(){parseInt(l.value,10)<1&&(l.value=1)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("popover-btn"),t=document.getElementById("popover"),s=document.getElementById("backdrop"),l=document.getElementById("close-popover-btn");if(!e||!t||!s)return;let n=tippy(e,{theme:"light",content:t,placement:"left",interactive:!0,trigger:"click",animation:"scale",duration:300,arrow:!0,onShow(o){s.classList.toggle("hidden"),t.classList.toggle("hidden")},onHide(o){t.classList.add("hidden"),s.classList.add("hidden")}});l.addEventListener("click",function(){n.hide()})});
