const BREAK_POINT = {
  sm: 640,
  // => @media (min-width: 640px) { ... }

  md: 768,
  // => @media (min-width: 768px) { ... }

  lg: 992,
  // => @media (min-width: 992px) { ... }

  xl: 1200,
  // => @media (min-width: 1200px) { ... }
};

// Calculate HEADER_HEIGHT based on window width
let HEADER_HEIGHT;

if (window.innerWidth >= BREAK_POINT.xl) {
  HEADER_HEIGHT = 132;
} else if (window.innerWidth < BREAK_POINT.xl) {
  HEADER_HEIGHT = 76;
} else {
  HEADER_HEIGHT = 56;
}

// CUSTOM SLICK SLIDER
window.addEventListener("DOMContentLoaded", function () {
  let internationalCustomerFlag = false;
  let slickInternationalCustomerSlide;
  function initInternationalCustomerSlick() {
    if (window.innerWidth > BREAK_POINT.xl) {
      if (!internationalCustomerFlag) {
        internationalCustomerFlag = true;
        slickInternationalCustomerSlide = $(
          ".slider-international-customer"
        ).slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
          prevArrow:
            "<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>",
        });
      }
    } else if (internationalCustomerFlag) {
      $(".slider-international-customer").slick("unslick");
      internationalCustomerFlag = false;
    }
  }
  initInternationalCustomerSlick();
  window.addEventListener("resize", initInternationalCustomerSlick);

  let customerFlag = false;
  let slickCustomerSlide;
  function initCustomerSlick() {
    if (window.innerWidth > BREAK_POINT.xl) {
      if (!customerFlag) {
        customerFlag = true;
        slickCustomerSlide = $(".slider-customer").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
          prevArrow:
            "<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>",
        });
      }
    } else if (customerFlag) {
      $(".slider-customer").slick("unslick");
      customerFlag = false;
    }
  }
  initCustomerSlick();
  window.addEventListener("resize", initCustomerSlick);

  let brandFlag = false;
  let slickBrandSlide;
  function initBrandSlick() {
    if (window.innerWidth > BREAK_POINT.xl) {
      if (!brandFlag) {
        brandFlag = true;
        slickBrandSlide = $(".slider-brand").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
          ],
          prevArrow:
            "<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>",
        });
      }
    } else if (brandFlag) {
      $(".slider-brand").slick("unslick");
      brandFlag = false;
    }
  }
  initBrandSlick();
  window.addEventListener("resize", initBrandSlick);

  // Slider products on home page
  let productFlag = false;
  let slickProductSlide;
  function initProductSlick() {
    if (window.innerWidth > BREAK_POINT.xl) {
      if (!productFlag) {
        productFlag = true;
        slickProductSlide = $(".slider-products").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 5,
          touchThreshold: 10,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
          prevArrow:
            "<button type='button' class='slick-prev pull-left !hidden lg:!block'><i class='fal fa-chevron-left'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right !hidden lg:!block'><i class='fal fa-chevron-right'></i></button>",
        });
      }
    } else if (productFlag) {
      $(".slider-products").slick("unslick");
      productFlag = false;
    }
  }
  initProductSlick();
  window.addEventListener("resize", initProductSlick);

  // Slider products on news page
  $(".slider-news-products").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>",
  });

  // Slider banner on home page
  $(".slider-banner").slick({
    dots: true,
    infinite: true,
    speed: 500,
    // autoplaySpeed: 4000,
    // autoplay: true,
    arrows: false,
  });

  // Slider outstanding on news page
  $(".slider-outstanding-news").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
  });

  // Slider main news on news page
  $(".slider-main-news").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slider-hover-button slider-hover-button--prev'><i class='text-lg text-dark fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slider-hover-button slider-hover-button--next'><i class='text-lg text-dark fal fa-chevron-right'></i></button>",
  });

  // Slider category on news page
  $(".slider-category-news").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='left-0 top-1/2 -translate-y-full pull-left absolute lg:left-auto lg:translate-y-0 lg:!right-[28%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='right-0 top-1/2 -translate-y-full pull-right absolute lg:left-auto lg:translate-y-0 lg:!right-[23%] lg:top-0 z-10 xl:flex xl:items-center xl:justify-center xl:border-2 xl:border-slate-700 xl:rounded-full xl:w-[38px] xl:h-[38px] xl:hover:bg-slate-700 group'><i class='text-slate-700 hover:text-slate-500 xl:group-hover:text-white text-4xl xl:text-xl fal fa-chevron-right'></i></button>",
  });

  // Slider detail product
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    useTransform: true,
    speed: 500,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    asNavFor: ".slider-nav",
    prevArrow:
      "<button type='button' class='large-detail-slide-btn slick-prev pull-left !translate-x-[5px]'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='large-detail-slide-btn slick-next pull-right !translate-x-[-9px]'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>",
  });

  // Slider detail product children
  $(".slider-nav").slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: false,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    asNavFor: ".slider-single",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
    ],
  });

  // const enterEventList = [
  //   "touchstart",
  //   "touchmove",
  //   "mousemove",
  //   "mouseenter",
  // ];

  // enterEventList.forEach(function (item) {
  //   $(".slider-nav").on(item, function (e) {
  //     console.log("✅ ~ e:::", e)
  //     $(".slider-single").slick("slickSetOption", "asNavFor", null, true);
  //   });
  // });

  // const leaveEventList = ["touchend", "mouseover", "mouseout"];

  // leaveEventList.forEach(function (item) {
  //   $(".slider-nav").on(item, function (e) {
  //     console.log("✅ ~ e:::", e)
  //     // $(".slider-single").slick("slickSetOption", "swipe", true, false);
  //   });
  // });
});

// CUSTOM LIGHTBOX
window.addEventListener("DOMContentLoaded", function () {
  $(".slider-single").slickLightbox({
    itemSelector: "a",
    navigateByKeyboard: true,
    caption: "caption",
    layouts: {
      closeButton:
        '<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>',
      nextArrowButton:
        '<span class="text-white text-2xl top-4 right-4 absolute cursor-pointer"><i class="fal fa-times"></i></span>',
    },
  });
});

/**
 * JS toggle
 *
 * How to use:
 * <button class="js-toggle" data-toggle-target="#box">Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("DOMContentLoaded", initJsToggle);

function initJsToggle() {
  document.querySelectorAll(".js-toggle").forEach((button) => {
    const target = button.getAttribute("data-toggle-target");
    if (!target) {
      document.body.innerText = `Cần thêm data-toggle-target cho: ${button.outerHTML}`;
    }
    button.onclick = () => {
      if (!document.querySelector(target)) {
        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
      }
      const isHidden = document
        .querySelector(target)
        .classList.contains("hide");

      requestAnimationFrame(() => {
        document.querySelector(target).classList.toggle("hide", !isHidden);
        document.querySelector(target).classList.toggle("show", isHidden);
        button.classList.toggle("hide", !isHidden);
        button.classList.toggle("show", isHidden);
      });
    };
  });
}

initJsToggle();

/**
 * Handle logic show/hide category menu
 */
const categoryNavbar = document.querySelector("#category-navbar");

function handleScrollCategoryNavbar() {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/main-news/"
  ) {
    return;
  }

  if (window.innerWidth < BREAK_POINT.xl) {
    return;
  }

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 50) {
    categoryNavbar.style.display = "none";
  } else {
    categoryNavbar.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", handleScrollCategoryNavbar);

window.onscroll = handleScrollCategoryNavbar;

/**
 * Handle logic show/hide mega menu
 */

// Get all elements with the class 'the-li'
const liItems = document.querySelectorAll(".mega-menu-item");

// Get the element with the class 'mega-menu'
const megaMenu = document.querySelector(".mega-menu");

// Add hover event listeners to each 'the-li' element
liItems.forEach((li) => {
  li.addEventListener("mouseover", function () {
    // Check if the 'the-li' element has a 'fa-chevron-right' icon
    // If it does, display the 'mega-menu' element
    if (li.querySelector(".fa-chevron-right")) {
      megaMenu.style.display = "block";
    }
  });

  li.addEventListener("mouseout", function () {
    megaMenu.style.display = "none";
  });
});

/**
 * Handle toggle blur content
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the button and content elements
  const toggleButtons = document.querySelectorAll(".toggleButton");

  if (!toggleButtons) return;

  // Add a click event to the button

  toggleButtons.forEach((toggleButton) => {
    if (!toggleButton) return;

    toggleButton.addEventListener("click", function () {
      const isHidden =
        toggleButton.querySelector("span").textContent === "Xem tất cả";

      toggleButton.querySelector("span").textContent = isHidden
        ? "Thu gọn"
        : "Xem tất cả";

      // Change the button icon based on the state of #detail-content
      const icon = isHidden ? "fa-chevron-up" : "fa-chevron-down";
      toggleButton.querySelector("i").classList = `text-sm fas ${icon}`;
    });
  });
});

/**
 * Handle toggle show/hide technical table
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the button and content elements
  const toggleButtons = document.querySelectorAll(".js-toggle-btn");

  if (!toggleButtons) return;

  // Add a click event to the button

  toggleButtons.forEach((toggleButton) => {
    if (!toggleButton) return;

    toggleButton.addEventListener("click", function () {
      const isHidden = toggleButton
        .querySelector("i")
        .classList.contains("fa-angle-up");

      // Change the button icon based on the state of #detail-content
      const icon = isHidden ? "fa-angle-down" : "fa-angle-up";
      toggleButton.querySelector("i").classList = `fa ${icon}`;
    });
  });
});

/**
 * Handle show/hidden dialogs
 *
 * How to use:
 *
 * <button class="js-dialog-button" data-dialog-id="dialog1">Open Dialog 1</button>
 * <div id="dialog1" class="js-dialog">
 * <!-- Dialog content for dialog1 -->
 * <button class="js-dialog-close" data-dialog-id="dialog1">Close Dialog 1</button>
 * </div>
 */
document.addEventListener("DOMContentLoaded", function () {
  const dialogButtons = document.querySelectorAll(".js-dialog-button");
  const dialogCloseButtons = document.querySelectorAll(".js-dialog-close");

  if (!dialogButtons || !dialogCloseButtons) return;

  // Function to open a dialog
  function openDialog(dialog) {
    dialog.style.opacity = 1;
    dialog.style.visibility = "visible";
  }

  // Function to close a dialog
  function closeDialog(dialog) {
    dialog.style.opacity = 0;
    dialog.style.visibility = "hidden";
  }

  // Add click event listeners to open dialogs
  dialogButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dialogId = this.getAttribute("data-dialog-id");
      const dialog = document.querySelector(`#${dialogId}`);
      if (dialog) {
        openDialog(dialog);
      }
    });
  });

  // Add click event listeners to close dialogs
  dialogCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      const dialogId = this.getAttribute("data-dialog-id");
      const dialog = document.querySelector(`#${dialogId}`);
      if (dialog) {
        closeDialog(dialog);
      }
    });
  });

  // Close dialog when clicking outside of it
  window.addEventListener("click", function (event) {
    dialogButtons.forEach((button) => {
      const dialogId = button.getAttribute("data-dialog-id");
      const dialog = document.querySelector(`#${dialogId}`);
      if (dialog && event.target == dialog) {
        closeDialog(dialog);
      }
    });
  });
});

/**
 * Handle showrooms
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get all store buttons
  const storeButtons = document.querySelectorAll("#storeList .js-showroom-btn");

  // Get the select box
  const districtSelect = document.getElementById("district");

  // Get the iframe
  const mapIframe = document.getElementById("mapIframe");

  if (!storeButtons || !districtSelect || !mapIframe) return;

  // When the page is loaded, activate the first card
  storeButtons[0].classList.add("text-white", "bg-gradient");

  // Function to update the iframe when clicking on a store
  function updateIframe(link) {
    mapIframe.src = link;
  }

  // Function to handle the click event when clicking on a store
  function handleStoreClick(event) {
    const selectedButton = event.currentTarget;

    // Remove the 'active' class from all buttons
    storeButtons.forEach((button) =>
      button.classList.remove("text-white", "bg-gradient", "active")
    );

    // Add the 'active' class to the clicked button
    selectedButton.classList.add("text-white", "bg-gradient", "active");

    // Get the iframe link from the data-iframe-link attribute
    const iframeLink = selectedButton.getAttribute("data-iframe-link");

    // Update the iframe
    updateIframe(iframeLink);
  }

  // Add click event for each store button
  storeButtons.forEach((button) => {
    button.addEventListener("click", handleStoreClick);
  });

  // Add change event for the select box
  districtSelect.addEventListener("change", function () {
    const selectedDistrict = districtSelect.value;

    // Hide all buttons
    storeButtons.forEach((button) => {
      button.style.display = "none";
    });

    // Display buttons corresponding to the selected district/city
    storeButtons.forEach((button) => {
      const place = button.getAttribute("data-place");
      if (place === selectedDistrict || selectedDistrict === "all") {
        button.style.display = "flex";
      }
    });

    // Activate the first button in the displayed list
    const visibleButtons = Array.from(storeButtons).filter(
      (button) => button.style.display !== "none"
    );

    if (visibleButtons.length > 0) {
      visibleButtons[0].click();
    }
  });
});

/**
 * Handle hover start rating
 */
document.addEventListener("DOMContentLoaded", function () {
  const scoreRating = document.getElementById("score-rating");

  if (!scoreRating) return;

  function handleChange() {
    const inputRatings = document.querySelectorAll('input[name="rating"]');

    inputRatings.forEach((input) => {
      input.addEventListener("change", (e) => {
        // Submit form
        const valueStars = document.querySelector(
          'input[name="rating"]:checked'
        ).value;

        scoreRating.innerHTML = valueStars;
      });
    });
  }

  handleChange();
});

/**
 * Handle scroll top button
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the scroll button
  const scrollBtn = document.getElementById("scroll-top-btn");

  function handleScroll() {
    // Check the scroll position, if greater than 100, display the button, otherwise hide it
    if (window.scrollY > 100) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  handleScroll();

  // Add a scroll event
  window.addEventListener("scroll", handleScroll);

  // Add a click event for the scroll button
  scrollBtn.addEventListener("click", () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add a smooth scroll effect
    });
  });
});

/**
 * Handle logic show/hide search box on mobile
 */
document.addEventListener("DOMContentLoaded", function () {
  const headerPC = document.querySelector("#header-pc");
  const searchBtnMobile = document.querySelector("#search-btn-mobile");
  const searchInputMobile = document.querySelector("#search-input-mobile");
  const clearSearchBtn = document.querySelector("#clear-search-btn");

  if (!headerPC || !searchBtnMobile || !searchInputMobile || !clearSearchBtn)
    return;

  searchBtnMobile.addEventListener("click", function () {
    // Hidden header on PC
    headerPC.style.display = "none";

    // Show search input on mobile
    searchInputMobile.style.display = "flex";
  });

  clearSearchBtn.addEventListener("click", function () {
    // Show header on PC
    headerPC.style.display = "flex";

    // Hidden search input on mobile
    searchInputMobile.style.display = "none";
  });
});

/**
 * Handle logic show/hide click search button on sidebar mobile
 */
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("#search-btn-on-dialog");
  const sidebar = document.querySelector("#menuBar");
  const headerPC = document.querySelector("#header-pc");
  const searchInputMobile = document.querySelector("#search-input-mobile");

  if (!searchButton || !sidebar || !headerPC || !searchInputMobile) return;

  searchButton.addEventListener("click", function () {
    // Toggle sidebar
    sidebar.classList.remove("show");
    sidebar.classList.add("hide");

    // Hidden header on PC
    headerPC.style.display = "none";

    // Show search input on mobile
    searchInputMobile.style.display = "flex";
  });
});

/**
 * Handle logic show/hide dropdown menu on sidebar mobile
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "arrow-sidebar"
  const arrowIcons = document.querySelectorAll(".arrow-sidebar");

  // Add a click event listener to each chevron icon
  arrowIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();

      // Toggle the "active" class to rotate the chevron icon
      this.classList.toggle("active");

      // Find the next sibling, which is the dropdown menu
      const dropdownMenu = this.parentElement.nextElementSibling;

      // Toggle the "hidden" class to show/hide the dropdown menu
      dropdownMenu.classList.toggle("hidden");
    });
  });
});

/**
 * Handle logic increase/decrease quantity
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get the quantity elements
  const quantityInputs = document.querySelectorAll(".js-input-quantity");
  const decreaseBtns = document.querySelectorAll(".js-decrease-quantity-btn");
  const increaseBtns = document.querySelectorAll(".js-increase-quantity-btn");

  // Add a click event listener to each increase button
  increaseBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const input = this.parentElement.querySelector(".js-input-quantity");
      const value = parseInt(input.value, 10);
      input.value = value + 1;
    });
  });

  // Add a click event listener to each decrease button
  decreaseBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const input = this.parentElement.querySelector(".js-input-quantity");
      const value = parseInt(input.value, 10);
      if (value > 1) {
        input.value = value - 1;
      }
    });
  });

  // Add a change event listener to each quantity input
  quantityInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      const value = parseInt(input.value, 10);
      if (value < 1) {
        input.value = 1;
      }
    });
  });
});

/**
 * Handle logic show/hide popover filter
 */
document.addEventListener("DOMContentLoaded", function () {
  const popoverButton = document.getElementById("popover-btn");
  const popover = document.getElementById("popover");
  const backdrop = document.getElementById("backdrop");
  const closePopoverBtn = document.getElementById("close-popover-btn");

  if (!popoverButton || !popover || !backdrop) return;

  function scrollToButton() {
    // Get the button's position relative to the viewport
    const rect = popoverButton.getBoundingClientRect();

    // Calculate the scroll position
    const spacing = 10;
    const scrollPosition = rect.top + window.scrollY - HEADER_HEIGHT - spacing;

    // Scroll to the button position
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // You can change this to "auto" for instant scrolling
    });
  }

  popoverButton.addEventListener("click", function () {
    if (window.innerWidth < BREAK_POINT.lg) return;
    scrollToButton();
  });

  let myPopover = tippy(popoverButton, {
    theme: "light",
    content: popover,
    placement: "top-start",
    interactive: true,
    trigger: "click",
    animation: "scale",
    duration: 300,
    arrow: true,

    onShow(instance) {
      backdrop.classList.toggle("hidden");
      popover.classList.toggle("hidden");
    },
    onHide(instance) {
      popover.classList.add("hidden");
      backdrop.classList.add("hidden");
    },
  });

  closePopoverBtn.addEventListener("click", function () {
    myPopover.hide();
  });
});

/**
 * Handle logic show/hide footer element
 */
document.addEventListener("DOMContentLoaded", function () {
  const footerServiceEl = document.querySelector("#footer-service");
  const footerProductEl = document.querySelector("#footer-product");
  if (!footerServiceEl || !footerProductEl) return;

  if (window.innerWidth <= 1024) {
    footerServiceEl.classList.add("toggle-box", "hide");
    footerProductEl.classList.add("toggle-box", "hide");
  }
});

/**
 * Handle height bar for all mobile
 */
document.addEventListener("DOMContentLoaded", function () {
  const windowHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--window-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", windowHeight);
  windowHeight();
});

/**
 * Handle slide gallery products
 */
document.addEventListener("DOMContentLoaded", function () {
  const smallImageList = document.querySelectorAll(".small-image-list");

  if (!smallImageList) return;

  smallImageList.forEach(function (smallImageList) {
    smallImageList.addEventListener("wheel", function (e) {
      e.stopPropagation();
      this.scrollLeft += e.deltaY;
      e.preventDefault();
    });

    const enterEventList = [
      "touchstart",
      "touchmove",
      "mousemove",
      "mouseenter",
    ];

    enterEventList.forEach(function (item) {
      smallImageList.addEventListener(item, function (e) {
        $(".slider-products").slick("slickSetOption", "swipe", false, false);
      });
    });

    const leaveEventList = ["touchend", "mouseover", "mouseout"];

    leaveEventList.forEach(function (item) {
      smallImageList.addEventListener(item, function (e) {
        $(".slider-products").slick("slickSetOption", "swipe", true, false);
      });
    });
  });
});

/**
 * Handle hover product gallery to show large image
 */
document.addEventListener("DOMContentLoaded", function () {
  const productEls = document.querySelectorAll(".product-item");

  productEls.forEach((productEl) => {
    const smallImages = productEl.querySelectorAll(".small-image-list img");
    const smallImageItems = productEl.querySelectorAll(".small-image-list li");
    const largeImage = productEl.querySelector(".large-image");

    if (!smallImages || !largeImage || !smallImageItems) return;

    smallImages.forEach(function (smallImg, index) {
      smallImg.addEventListener("mouseover", function () {
        const newSrc = this.src;
        largeImage.src = newSrc;

        smallImageItems.forEach(function (item) {
          item.classList.remove("border-primary");
        });

        smallImageItems[index].classList.remove("border-slate-200");
        smallImageItems[index].classList.add("border-primary");
      });
    });
  });
});
