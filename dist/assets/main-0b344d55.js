(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const c={sm:640,md:768,lg:992,xl:1200};let d;window.innerWidth>=c.xl?d=132:window.innerWidth<c.xl?d=76:d=56;window.addEventListener("DOMContentLoaded",function(){let e=!1;function t(){window.innerWidth>c.xl?e||(e=!0,$(".slider-international-customer").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>"})):e&&($(".slider-international-customer").slick("unslick"),e=!1)}t(),window.addEventListener("resize",t);let s=!1;function i(){window.innerWidth>c.xl?s||(s=!0,$(".slider-customer").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>"})):s&&($(".slider-customer").slick("unslick"),s=!1)}i(),window.addEventListener("resize",i);let n=!1;function o(){window.innerWidth>c.xl?n||(n=!0,$(".slider-brand").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}}],prevArrow:"<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>"})):n&&($(".slider-brand").slick("unslick"),n=!1)}o(),window.addEventListener("resize",o);let l=!1;function r(){window.innerWidth>c.xl?l||(l=!0,$(".slider-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,touchThreshold:10,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>"})):l&&($(".slider-products").slick("unslick"),l=!1)}r(),window.addEventListener("resize",r),$(".slider-news-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-banner").slick({dots:!0,infinite:!0,speed:500,arrows:!1}),$(".slider-outstanding-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!1}),$(".slider-main-news").slick({dots:!1,infinite:!0,speed:500,autoplay:!1,arrows:!0,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:"<button type='button' class='slider-hover-button slider-hover-button--prev'><i class='text-lg text-dark fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slider-hover-button slider-hover-button--next'><i class='text-lg text-dark fal fa-chevron-right'></i></button>"}),$(".slider-category-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!0,prevArrow:"<button type='button' class='left-0 top-1/2 -translate-y-full pull-left absolute lg:left-auto lg:translate-y-0 lg:!right-[28%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='right-0 top-1/2 -translate-y-full pull-right absolute lg:left-auto lg:translate-y-0 lg:!right-[23%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-right'></i></button>"}),$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,fade:!1,adaptiveHeight:!0,useTransform:!0,speed:500,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)",asNavFor:".slider-nav",prevArrow:"<button type='button' class='large-detail-slide-btn slick-prev pull-left !translate-x-[5px]'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='large-detail-slide-btn slick-next pull-right !translate-x-[-9px]'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>"}),$(".slider-nav").slick({slidesToShow:10,slidesToScroll:10,infinite:!1,dots:!1,focusOnSelect:!0,swipeToSlide:!0,asNavFor:".slider-single",arrows:!1,responsive:[{breakpoint:768,settings:{slidesToShow:7,slidesToScroll:7}}]})});window.addEventListener("DOMContentLoaded",function(){$(".slider-single").slickLightbox({itemSelector:"a",navigateByKeyboard:!0,caption:"caption",layouts:{closeButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>',nextArrowButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>'}})});window.addEventListener("DOMContentLoaded",p);function p(){document.querySelectorAll(".js-toggle").forEach(e=>{const t=e.getAttribute("data-toggle-target");t||(document.body.innerText=`Cần thêm data-toggle-target cho: ${e.outerHTML}`),e.onclick=()=>{if(!document.querySelector(t))return document.body.innerText=`Không tìm thấy phần tử "${t}"`;const s=document.querySelector(t).classList.contains("hide");requestAnimationFrame(()=>{document.querySelector(t).classList.toggle("hide",!s),document.querySelector(t).classList.toggle("show",s),e.classList.toggle("hide",!s),e.classList.toggle("show",s)})}})}p();const u=document.querySelector("#category-navbar");function h(){if(window.location.pathname!=="/"&&window.location.pathname!=="/main-news/"||window.innerWidth<c.xl)return;(document.documentElement.scrollTop||document.body.scrollTop)>50?u.style.display="none":u.style.display="block"}window.addEventListener("DOMContentLoaded",h);window.onscroll=h;const g=document.querySelectorAll(".mega-menu-item"),f=document.querySelector(".mega-menu");g.forEach(e=>{e.addEventListener("mouseover",function(){e.querySelector(".fa-chevron-right")&&(f.style.display="block")}),e.addEventListener("mouseout",function(){f.style.display="none"})});window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".toggleButton");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const s=t.querySelector("span").textContent==="Xem tất cả";t.querySelector("span").textContent=s?"Thu gọn":"Xem tất cả";const i=s?"fa-chevron-up":"fa-chevron-down";t.querySelector("i").classList=`text-sm fas ${i}`})})});window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".js-toggle-btn");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const i=t.querySelector("i").classList.contains("fa-angle-up")?"fa-angle-down":"fa-angle-up";t.querySelector("i").classList=`fa ${i}`})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".js-dialog-button"),t=document.querySelectorAll(".js-dialog-close");if(!e||!t)return;function s(n){n.style.opacity=1,n.style.visibility="visible"}function i(n){n.style.opacity=0,n.style.visibility="hidden"}e.forEach(n=>{n.addEventListener("click",function(){const o=this.getAttribute("data-dialog-id"),l=document.querySelector(`#${o}`);l&&s(l)})}),t.forEach(n=>{n.addEventListener("click",function(){const o=this.getAttribute("data-dialog-id"),l=document.querySelector(`#${o}`);l&&i(l)})}),window.addEventListener("click",function(n){e.forEach(o=>{const l=o.getAttribute("data-dialog-id"),r=document.querySelector(`#${l}`);r&&n.target==r&&i(r)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("#storeList .js-showroom-btn"),t=document.getElementById("district"),s=document.getElementById("mapIframe");if(!e||!t||!s)return;e[0].classList.add("text-white","bg-gradient");function i(o){s.src=o}function n(o){const l=o.currentTarget;e.forEach(a=>a.classList.remove("text-white","bg-gradient","active")),l.classList.add("text-white","bg-gradient","active");const r=l.getAttribute("data-iframe-link");i(r)}e.forEach(o=>{o.addEventListener("click",n)}),t.addEventListener("change",function(){const o=t.value;e.forEach(r=>{r.style.display="none"}),e.forEach(r=>{(r.getAttribute("data-place")===o||o==="all")&&(r.style.display="flex")});const l=Array.from(e).filter(r=>r.style.display!=="none");l.length>0&&l[0].click()})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("score-rating");if(!e)return;function t(){document.querySelectorAll('input[name="rating"]').forEach(i=>{i.addEventListener("change",n=>{const o=document.querySelector('input[name="rating"]:checked').value;e.innerHTML=o})})}t()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scroll-top-btn");function t(){window.scrollY>100?e.style.display="flex":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#header-pc"),t=document.querySelector("#search-btn-mobile"),s=document.querySelector("#search-input-mobile"),i=document.querySelector("#clear-search-btn");!e||!t||!s||!i||(t.addEventListener("click",function(){e.style.display="none",s.style.display="flex"}),i.addEventListener("click",function(){e.style.display="flex",s.style.display="none"}))});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#search-btn-on-dialog"),t=document.querySelector("#menuBar"),s=document.querySelector("#header-pc"),i=document.querySelector("#search-input-mobile");!e||!t||!s||!i||e.addEventListener("click",function(){t.classList.remove("show"),t.classList.add("hide"),s.style.display="none",i.style.display="flex"})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".arrow-sidebar").forEach(function(t){t.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),this.classList.toggle("active"),this.parentElement.nextElementSibling.classList.toggle("hidden")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".js-input-quantity"),t=document.querySelectorAll(".js-decrease-quantity-btn");document.querySelectorAll(".js-increase-quantity-btn").forEach(function(i){i.addEventListener("click",function(){const n=this.parentElement.querySelector(".js-input-quantity"),o=parseInt(n.value,10);n.value=o+1})}),t.forEach(function(i){i.addEventListener("click",function(){const n=this.parentElement.querySelector(".js-input-quantity"),o=parseInt(n.value,10);o>1&&(n.value=o-1)})}),e.forEach(function(i){i.addEventListener("change",function(){parseInt(i.value,10)<1&&(i.value=1)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("popover-btn"),t=document.getElementById("popover"),s=document.getElementById("backdrop"),i=document.getElementById("close-popover-btn");if(!e||!t||!s)return;function n(){const l=e.getBoundingClientRect(),r=10,a=l.top+window.scrollY-d-r;window.scrollTo({top:a,behavior:"smooth"})}e.addEventListener("click",function(){window.innerWidth<c.lg||n()});let o=tippy(e,{theme:"light",content:t,placement:"top-start",interactive:!0,trigger:"click",animation:"scale",duration:300,arrow:!0,onShow(l){s.classList.toggle("hidden"),t.classList.toggle("hidden")},onHide(l){t.classList.add("hidden"),s.classList.add("hidden")}});i.addEventListener("click",function(){o.hide()})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#footer-service"),t=document.querySelector("#footer-product");!e||!t||window.innerWidth<=1024&&(e.classList.add("toggle-box","hide"),t.classList.add("toggle-box","hide"))});document.addEventListener("DOMContentLoaded",function(){const e=()=>{document.documentElement.style.setProperty("--window-height",`${window.innerHeight}px`)};window.addEventListener("resize",e),e()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".small-image-list");e&&e.forEach(function(t){t.addEventListener("wheel",function(n){n.stopPropagation(),this.scrollLeft+=n.deltaY,n.preventDefault()}),["touchstart","touchmove","mousemove","mouseenter"].forEach(function(n){t.addEventListener(n,function(o){$(".slider-products").slick("slickSetOption","swipe",!1,!1)})}),["touchend","mouseover","mouseout"].forEach(function(n){t.addEventListener(n,function(o){$(".slider-products").slick("slickSetOption","swipe",!0,!1)})})})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".product-item").forEach(t=>{const s=t.querySelectorAll(".small-image-list img"),i=t.querySelectorAll(".small-image-list li"),n=t.querySelector(".large-image");!s||!n||!i||s.forEach(function(o,l){o.addEventListener("mouseover",function(){const r=this.src;n.src=r,i.forEach(function(a){a.classList.remove("border-primary")}),i[l].classList.remove("border-slate-200"),i[l].classList.add("border-primary")})})})});