document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.topnav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path || (path===''&&href==='index.html')) a.classList.add('active');
  });
});
