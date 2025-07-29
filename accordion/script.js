document.addEventListener("DOMContentLoaded", () => {
  const expand = document.getElementById("expand");
  const accordionBottom = document.getElementById("accordion-bottom");
  const topMsg = document.getElementById("top-msg");
  const bottomMsg = document.getElementById("bottom-msg");

  let isOpen = false;
  expand.addEventListener("click", () => {
    if (isOpen === false) {
      accordionBottom.className = "show-accordion";
      expand.innerText = "-";
      isOpen = true;
      topMsg.innerText = "Click on the - icon to close";
      bottomMsg.innerText = "Accordion is open";
    } else {
      accordionBottom.className = "accordion-bottom";
      expand.innerText = "+";
      isOpen = false;
      topMsg.innerText = "Click on the + icon to open";
    }
  });
});
