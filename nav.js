toggleNav = () => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navLinks = document.getElementsByClassName('navbar-links')[0];

  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
};
