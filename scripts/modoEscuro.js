window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  if (savedTheme === 'dark') {
    html.classList.add('dark-mode');
    toggleBtn.textContent = 'Modo Claro';
  } else {
    toggleBtn.textContent = 'Modo Escuro';
  }
});

function toggleTheme() {
  const html = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  html.classList.toggle('dark-mode');
  const isDark = html.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
}