// Client side code
document
  .querySelector('h1')
  .addEventListener("click", ({target}) => {
    target.innerHTML = target.innerHTML.toLowerCase()
  });