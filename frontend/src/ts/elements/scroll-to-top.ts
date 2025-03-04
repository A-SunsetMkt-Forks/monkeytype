import * as ActivePage from "../states/active-page";
import { prefersReducedMotion } from "../utils/misc";

let visible = false;

$(document).on("click", ".scrollToTopButton", () => {
  $(".scrollToTopButton").addClass("invisible");
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "instant" : "smooth",
  });
});

$(window).on("scroll", () => {
  const page = ActivePage.get();
  if (page === "test") return;

  const scroll = window.scrollY;
  if (!visible && scroll > 100) {
    $(".scrollToTopButton").removeClass("invisible");
    visible = true;
  } else if (visible && scroll < 100) {
    $(".scrollToTopButton").addClass("invisible");
    visible = false;
  }
});
