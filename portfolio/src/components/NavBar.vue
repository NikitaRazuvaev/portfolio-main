<script setup>
const links = [
  { href: '#about',    label: 'Обо мне' },
  { href: '#skills',   label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#contact',  label: 'Контакты' }
]
</script>

<template>
  <nav>
    <div class="logo">dev<span>.razuvaev</span></div>
    <ul>
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0;
  padding: 18px 6%;
  display: flex; justify-content: space-between; align-items: center;
  backdrop-filter: blur(12px);
  background: rgba(10,14,23,0.7);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
.logo {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700; font-size: 1.15rem;
  color: var(--accent);
}
.logo span { color: var(--text); }
ul { display: flex; gap: 32px; list-style: none; }
a {
  color: var(--muted); text-decoration: none; font-size: 0.95rem;
  transition: color .25s;
  position: relative;
}
a:hover { color: var(--accent); }
a::after {
  content: ''; position: absolute; left: 0; bottom: -6px;
  width: 0; height: 2px; background: var(--accent);
  transition: width .3s;
}
a:hover::after { width: 100%; }

@media (max-width: 900px) {
  ul { display: none; }
}
</style>