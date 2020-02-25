import "slick-carousel";
import jQuery from "jquery";

export const init = () => {
  jQuery(function($) {
    $(".main-slider").slick();
  });
};
