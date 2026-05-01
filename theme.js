// theme.js — persists dark/light across pages
(function () {
  const saved = localStorage.getItem('theme') || 'dark';
  document.body.className = saved;
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = saved === 'dark' ? '🌙' : '☀️';
})();

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  document.body.className = next;
  localStorage.setItem('theme', next);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = next === 'dark' ? '🌙' : '☀️';
}
