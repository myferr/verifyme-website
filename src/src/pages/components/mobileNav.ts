export const showNavigation = () => {
  if (
    document.getElementById("mobile-navigator-container")!.style.display ==
      "none" ||
    document.getElementById("mobile-navigator-container")!.style.display == ""
  ) {
    document.getElementById("mobile-navigator-container")!.style.display =
      "block";
    document.getElementById("display")!.style.display = "none";
  } else {
    document.getElementById("mobile-navigator-container")!.style.display =
      "none";
    document.getElementById("display")!.style.display = "block";
  }
};
