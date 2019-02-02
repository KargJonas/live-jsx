import jsx from "../jsx-transform/jsx";

const factory = document.currentScript.getAttribute("factory");

if (typeof factory !== "string") {
  throw new Error('No "factory" attribute provided.');
}

window.addEventListener("load", () => {
  const scriptElements = Array.from(document.querySelectorAll("script[type='jsx']"))
    .filter(el => el.src || el.innerHTML.trim());

  function getScripts() {
    return Promise.all(scriptElements.map(el => {
      el.remove();

      if (el.src) {
        return fetch(el.src)
          .then(res => res.text());
      } else {
        return el.innerHTML;
      }
    }));
  }

  getScripts()
    .then(scripts => scripts.map(script => {
      const el = document.createElement("script");
      const compiled = jsx(script, { factory });

      el.innerHTML = compiled;
      document.body.appendChild(el);
    }));
});