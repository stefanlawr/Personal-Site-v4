// Navbar Hamburger Menu
toggleNav = () => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navLinks = document.getElementsByClassName('navbar-links')[0];

  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
};

let home = document.querySelector('#home');

window.onscroll = () => {
  let title = document.querySelector('#title');
  let subtitle = document.querySelector('#subtitle');

  let height = window.innerHeight;
  let scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  height = height / 2;

  title.style.opacity = (height - scrollTop) / height;
  subtitle.style.opacity = (height - scrollTop) / height;
};
