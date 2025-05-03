// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
  
  // Toggle theme and save preference
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
  
  // Animate button on click
  const animateBtn = document.getElementById('animateBtn');
  animateBtn.addEventListener('click', () => {
    animateBtn.classList.add('animate');
    setTimeout(() => {
      animateBtn.classList.remove('animate');
    }, 600); // match animation duration
  });
  