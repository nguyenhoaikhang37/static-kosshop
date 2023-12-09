$(window).ready(function () {
  // Slider customer on home page
  $(".slider-customer").slick({
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
      "<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>",
  });

  // Slider products on home page
  $(".slider-products").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
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

  // Slider on brand page
  $(".slider-brand").slick({
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
      "<button type='button' class='slick-prev pull-left !block'><i class='fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right !block'><i class='fal fa-chevron-right'></i></button>",
  });

  // SLIDER GALLERY PRODUCTS
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    prevArrow:
      "<button type='button' class='slick-prev pull-left !translate-x-0'><i class='text-3xl text-primary fal fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right !translate-x-0'><i class='text-3xl text-primary fal fa-chevron-right'></i></button>",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
      prevArrow:
        "<button type='button' class='absolute top-1/2 -translate-y-1/2 left-0 pull-left'><i class='text-lg text-primary fal fa-chevron-left'></i></button>",
      nextArrow:
        "<button type='button' class='absolute top-1/2 -translate-y-1/2 right-0 pull-right'><i class='text-lg text-primary fal fa-chevron-right'></i></button>",
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    let currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    let goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
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
  getEls(".js-toggle").forEach((button) => {
    const target = button.getAttribute("data-toggle-target");
    if (!target) {
      document.body.innerText = `Cần thêm data-toggle-target cho: ${button.outerHTML}`;
    }
    button.onclick = () => {
      if (!getEl(target)) {
        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
      }
      const isHidden = getEl(target).classList.contains("hide");

      requestAnimationFrame(() => {
        getEl(target).classList.toggle("hide", !isHidden);
        getEl(target).classList.toggle("show", isHidden);
      });
    };
  });
}

initJsToggle();

/**
 * Handle logic show/hide category menu
 */
const categoryNavbar = getEl("#category-navbar");

function handleScrollCategoryNavbar() {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/main-news/"
  ) {
    return;
  }

  if (window.innerWidth < 1200) {
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
 * Handle logic hover image products
 */
window.addEventListener("DOMContentLoaded", () => {
  const productItems = getEls(".product-item");

  if (!productItems) return;

  productItems.forEach((productItem) => {
    const smallImageElements = productItem.querySelectorAll(".small-image");

    const bigImageElement = productItem.querySelector(".big-image");

    smallImageElements.forEach((smallImage) => {
      smallImage.addEventListener("mouseover", function () {
        smallImageElements.forEach((smallImage) => {
          smallImage.classList.remove("border-primary");
          smallImage.classList.remove("border-greyLight");
        });

        smallImage.classList.add("border-primary");
        smallImage.classList.remove("border-greyLight");

        const imageUrl = smallImage.querySelector("img").src;
        bigImageElement.src = imageUrl;
      });
    });
  });
});

/**
 * Handle toggle blur content
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the button and content elements
  const toggleButtons = getEls(".toggleButton");

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
  const dialogButtons = getEls(".js-dialog-button");
  const dialogCloseButtons = getEls(".js-dialog-close");

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
      const dialog = getEl(`#${dialogId}`);
      if (dialog) {
        openDialog(dialog);
      }
    });
  });

  // Add click event listeners to close dialogs
  dialogCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      const dialogId = this.getAttribute("data-dialog-id");
      const dialog = getEl(`#${dialogId}`);
      if (dialog) {
        closeDialog(dialog);
      }
    });
  });

  // Close dialog when clicking outside of it
  window.addEventListener("click", function (event) {
    dialogButtons.forEach((button) => {
      const dialogId = button.getAttribute("data-dialog-id");
      const dialog = getEl(`#${dialogId}`);
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
  const storeButtons = document.querySelectorAll("#storeList button");

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
      button.classList.remove("text-white", "bg-gradient")
    );

    // Add the 'active' class to the clicked button
    selectedButton.classList.add("text-white", "bg-gradient");

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
  const headerPC = getEl("#header-pc");
  const searchBtnMobile = getEl("#search-btn-mobile");
  const searchInputMobile = getEl("#search-input-mobile");
  const clearSearchBtn = getEl("#clear-search-btn");

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
  const searchButton = getEl("#search-btn-on-dialog");
  const sidebar = getEl("#menuBar");
  const headerPC = getEl("#header-pc");
  const searchInputMobile = getEl("#search-input-mobile");

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

  let myPopover = tippy(popoverButton, {
    theme: "light",
    content: popover,
    placement: "left",
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