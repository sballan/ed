// ------- Font Awsome (start) -----------
import '@fortawesome/fontawesome-free/js/all'
// ------- Font Awsome (end) -----------


// ------- Bulma Burgers (start) -----------

// Get bulma burgers to work with built in examples, and with turbolinks
document.addEventListener("turbolinks:load", function() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});
// ------- Bulma Burgers (end) -----------

