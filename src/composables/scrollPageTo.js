// import gtm from "./../components/gtm.js";
export default function scrollPageTo(navEl) {
  if (navEl) {
    //     gtm.logPage(navEl);
    let element = document.querySelector(`${navEl}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
}
