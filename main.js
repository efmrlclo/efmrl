// ── EFMRL Main JS ──

// Page routing
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  var navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('active');
  window.scrollTo(0, 0);
  return false;
}

// Filter buttons
function setFilter(el) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Mobile menu toggle
function toggleMenu() {
  var links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});
