(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();$(window).ready(function(){$(".slider-customer").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-news-products").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:770,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-banner").slick({dots:!0,infinite:!0,speed:500,arrows:!1}),$(".slider-outstanding-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!1}),$(".slider-main-news").slick({dots:!1,infinite:!0,speed:500,autoplay:!1,arrows:!0,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:"<button type='button' class='slider-hover-button slider-hover-button--prev'><i class='text-lg text-dark fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slider-hover-button slider-hover-button--next'><i class='text-lg text-dark fal fa-chevron-right'></i></button>"}),$(".slider-category-news").slick({dots:!1,infinite:!0,speed:500,autoplaySpeed:3e3,autoplay:!0,arrows:!0,prevArrow:"<button type='button' class='left-0 top-1/2 -translate-y-full pull-left absolute lg:left-auto lg:translate-y-0 lg:!right-[28%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='right-0 top-1/2 -translate-y-full pull-right absolute lg:left-auto lg:translate-y-0 lg:!right-[23%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-right'></i></button>"}),$(".slider-brand").slick({dots:!1,infinite:!0,speed:500,slidesToScroll:1,slidesToShow:5,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}}],prevArrow:"<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>"}),$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,fade:!1,adaptiveHeight:!0,useTransform:!0,speed:200,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)",asNavFor:".slider-nav",prevArrow:"<button type='button' class='slick-prev pull-left !translate-x-[5px]'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !translate-x-[-9px]'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>"}),$(".slider-nav").slick({slidesToShow:8,slidesToScroll:8,dots:!1,focusOnSelect:!0,asNavFor:".slider-single",infinite:!1,prevArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 left-0 pull-left z-[100]'><i class='text-lg text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 right-0 pull-right z-[100]'><i class='text-lg text-primary fal fa-chevron-right'></i></button>"});let e=document.querySelectorAll(".product-slick-general");for(let t=0;t<e.length;t++){const n=e[t].getAttribute("data-id");$(`.product-slick-single-${n}`).slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,fade:!1,adaptiveHeight:!0,useTransform:!0,speed:200,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)",prevArrow:"<button type='button' class='slick-prev pull-left !translate-x-[5px]'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right !translate-x-[-9px]'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>"}),$(`.slider-product-items-${n}`).slick({slidesToShow:5,slidesToScroll:5,dots:!1,focusOnSelect:!0,infinite:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}}],prevArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 left-[-15px] p-[6px] pull-left z-[100]'><i class='text-lg text-primary fal fa-chevron-left'></i></button>",nextArrow:"<button type='button' class='absolute top-1/2 -translate-y-1/2 right-[-15px] p-[6px] pull-right z-[100]'><i class='text-lg text-primary fal fa-chevron-right'></i></button>"}),$(`.product-slick-single-${n}`).on("afterChange",function(l,o,s){$(`.slider-product-items-${n}`).slick("slickGoTo",s);let i=`.slider-product-items-${n} .slick-slide[data-slick-index=${s}]`;$(`.slider-product-items-${n} .slick-slide.is-active`).removeClass("is-active"),$(i).addClass("is-active")}),$(`.slider-product-items-${n}`).on("mouseenter",".slick-slide",function(l){l.preventDefault();let o=$(this).data("slick-index");$(`.product-slick-single-${n}`).slick("slickGoTo",o)})}});$(window).ready(function(){$(".slider-single").slickLightbox({itemSelector:"a",navigateByKeyboard:!0,caption:"caption",layouts:{closeButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>',nextArrowButton:'<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>'}})});window.addEventListener("DOMContentLoaded",u);function u(){getEls(".js-toggle").forEach(e=>{const t=e.getAttribute("data-toggle-target");t||(document.body.innerText=`Cần thêm data-toggle-target cho: ${e.outerHTML}`),e.onclick=()=>{if(!getEl(t))return document.body.innerText=`Không tìm thấy phần tử "${t}"`;const n=getEl(t).classList.contains("hide");requestAnimationFrame(()=>{getEl(t).classList.toggle("hide",!n),getEl(t).classList.toggle("show",n)})}})}u();const c=getEl("#category-navbar");function f(){if(window.location.pathname!=="/"&&window.location.pathname!=="/main-news/"||window.innerWidth<1200)return;(document.documentElement.scrollTop||document.body.scrollTop)>50?c.style.display="none":c.style.display="block"}window.addEventListener("DOMContentLoaded",f);window.onscroll=f;const p=document.querySelectorAll(".mega-menu-item"),d=document.querySelector(".mega-menu");p.forEach(e=>{e.addEventListener("mouseover",function(){e.querySelector(".fa-chevron-right")&&(d.style.display="block")}),e.addEventListener("mouseout",function(){d.style.display="none"})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".product-item");e&&e.forEach(t=>{const n=t.querySelectorAll(".small-image"),l=t.querySelector(".big-image");n.forEach(o=>{o.addEventListener("mouseover",function(){n.forEach(i=>{i.classList.remove("border-primary"),i.classList.remove("border-greyLight")}),o.classList.add("border-primary"),o.classList.remove("border-greyLight");const s=o.querySelector("img").src;l.src=s})})})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".toggleButton");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const n=t.querySelector("span").textContent==="Xem tất cả";t.querySelector("span").textContent=n?"Thu gọn":"Xem tất cả";const l=n?"fa-chevron-up":"fa-chevron-down";t.querySelector("i").classList=`text-sm fas ${l}`})})});window.addEventListener("DOMContentLoaded",()=>{const e=getEls(".js-toggle-btn");e&&e.forEach(t=>{t&&t.addEventListener("click",function(){const l=t.querySelector("i").classList.contains("fa-angle-up")?"fa-angle-down":"fa-angle-up";t.querySelector("i").classList=`fa ${l}`})})});document.addEventListener("DOMContentLoaded",function(){const e=getEls(".js-dialog-button"),t=getEls(".js-dialog-close");if(!e||!t)return;function n(o){o.style.opacity=1,o.style.visibility="visible"}function l(o){o.style.opacity=0,o.style.visibility="hidden"}e.forEach(o=>{o.addEventListener("click",function(){const s=this.getAttribute("data-dialog-id"),i=getEl(`#${s}`);i&&n(i)})}),t.forEach(o=>{o.addEventListener("click",function(){const s=this.getAttribute("data-dialog-id"),i=getEl(`#${s}`);i&&l(i)})}),window.addEventListener("click",function(o){e.forEach(s=>{const i=s.getAttribute("data-dialog-id"),r=getEl(`#${i}`);r&&o.target==r&&l(r)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("#storeList button"),t=document.getElementById("district"),n=document.getElementById("mapIframe");if(!e||!t||!n)return;e[0].classList.add("text-white","bg-gradient");function l(s){n.src=s}function o(s){const i=s.currentTarget;e.forEach(a=>a.classList.remove("text-white","bg-gradient")),i.classList.add("text-white","bg-gradient");const r=i.getAttribute("data-iframe-link");l(r)}e.forEach(s=>{s.addEventListener("click",o)}),t.addEventListener("change",function(){const s=t.value;e.forEach(r=>{r.style.display="none"}),e.forEach(r=>{(r.getAttribute("data-place")===s||s==="all")&&(r.style.display="flex")});const i=Array.from(e).filter(r=>r.style.display!=="none");i.length>0&&i[0].click()})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("score-rating");if(!e)return;function t(){document.querySelectorAll('input[name="rating"]').forEach(l=>{l.addEventListener("change",o=>{const s=document.querySelector('input[name="rating"]:checked').value;e.innerHTML=s})})}t()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scroll-top-btn");function t(){window.scrollY>100?e.style.display="flex":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#header-pc"),t=getEl("#search-btn-mobile"),n=getEl("#search-input-mobile"),l=getEl("#clear-search-btn");!e||!t||!n||!l||(t.addEventListener("click",function(){e.style.display="none",n.style.display="flex"}),l.addEventListener("click",function(){e.style.display="flex",n.style.display="none"}))});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#search-btn-on-dialog"),t=getEl("#menuBar"),n=getEl("#header-pc"),l=getEl("#search-input-mobile");!e||!t||!n||!l||e.addEventListener("click",function(){t.classList.remove("show"),t.classList.add("hide"),n.style.display="none",l.style.display="flex"})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".arrow-sidebar").forEach(function(t){t.addEventListener("click",function(n){n.stopPropagation(),n.preventDefault(),this.classList.toggle("active"),this.parentElement.nextElementSibling.classList.toggle("hidden")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".js-input-quantity"),t=document.querySelectorAll(".js-decrease-quantity-btn");document.querySelectorAll(".js-increase-quantity-btn").forEach(function(l){l.addEventListener("click",function(){const o=this.parentElement.querySelector(".js-input-quantity"),s=parseInt(o.value,10);o.value=s+1})}),t.forEach(function(l){l.addEventListener("click",function(){const o=this.parentElement.querySelector(".js-input-quantity"),s=parseInt(o.value,10);s>1&&(o.value=s-1)})}),e.forEach(function(l){l.addEventListener("change",function(){parseInt(l.value,10)<1&&(l.value=1)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("popover-btn"),t=document.getElementById("popover"),n=document.getElementById("backdrop"),l=document.getElementById("close-popover-btn");if(!e||!t||!n)return;let o=tippy(e,{theme:"light",content:t,placement:"left",interactive:!0,trigger:"click",animation:"scale",duration:300,arrow:!0,onShow(s){n.classList.toggle("hidden"),t.classList.toggle("hidden")},onHide(s){t.classList.add("hidden"),n.classList.add("hidden")}});l.addEventListener("click",function(){o.hide()})});document.addEventListener("DOMContentLoaded",function(){const e=getEl("#footer-service"),t=getEl("#footer-product");!e||!t||window.innerWidth<=1024&&(e.classList.add("toggle-box","hide"),t.classList.add("toggle-box","hide"))});
