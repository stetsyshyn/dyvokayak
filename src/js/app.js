import "slick-carousel";
import jQuery from "jquery";

const App = {
  // Make navbar sticky
  stickyMenu: () => {
    const navbar = document.querySelector(".navbar-wrap");
    if (window.pageYOffset >= 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }  
}

export const init = () => {
  window.onscroll = function () { App.stickyMenu(); };
  jQuery(function ($) {
    $(".main-slider").slick();    
  });
};
