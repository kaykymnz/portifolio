function toggleTheme() {
  const currentTheme = document.documentElement.classList.toggle('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  // Atualiza o estado do checkbox
  document.getElementById('themeToggle').checked = currentTheme === 'dark';
}

// Define o estado inicial do checkbox baseado no tema salvo
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  if (isDark) {
    document.documentElement.classList.add('dark-mode');
  }

  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.checked = isDark;
});