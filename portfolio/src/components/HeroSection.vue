<script setup>
const codeLines = [
  { text: '// Немного обо мне', cls: 'cm' },
  { text: 'const developer = {', cls: 'kw', html: '<span class="kw">const</span> <span class="var">developer</span> = {' },
  // ...
]
</script>

<template>
  <div class="hero">
    <div>
      <div class="badge">
        <span class="dot"></span> Доступен для проектов
      </div>
      <h1>Привет, я <span class="grad">Разуваев Никита</span> — веб-разработчик</h1>
      <p class="lead">
        Создаю быстрые, современные и удобные веб-приложения.
        Специализируюсь на full-stack разработке с фокусом на React, Node.js и производительность.
      </p>
      <div class="btns">
        <a href="#contact" class="btn btn-primary">Обсудить проект →</a>
        <a href="#projects" class="btn btn-ghost">Смотреть работы</a>
      </div>
    </div>

    <div class="code-card">
      <div class="code-header">
        <span class="dot r"></span>
        <span class="dot y"></span>
        <span class="dot g"></span>
        <span class="file">developer.js</span>
      </div>
      <pre><span class="cm">// Немного обо мне</span>
<span class="kw">const</span> <span class="var">developer</span> = {
  <span class="str">name</span>: <span class="str">'Никита Разуваев'</span>,
  <span class="str">role</span>: <span class="str">'Full-Stack Developer'</span>,
  <span class="str">experience</span>: <span class="str">'2+ года'</span>,
  <span class="str">stack</span>: [<span class="str">'React'</span>, <span class="str">'Node.js'</span>, <span class="str">'TS'</span>],
  <span class="str">focus</span>: <span class="str">'чистый код и UX'</span>
};

<span class="kw">function</span> <span class="fn">createProject</span>(idea) {
  <span class="kw">return</span> idea
    .<span class="fn">design</span>()
    .<span class="fn">develop</span>()
    .<span class="fn">test</span>()
    .<span class="fn">deploy</span>();
}</pre>
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 6% 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}
.badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 100px;
  background: rgba(0,217,255,0.1);
  border: 1px solid rgba(0,217,255,0.3);
  color: var(--accent); font-size: 0.85rem;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 24px;
}
.badge .dot {
  width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
  box-shadow: 0 0 12px #22c55e;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
h1 {
  font-size: clamp(2.2rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}
.grad {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.lead {
  color: var(--muted); font-size: 1.15rem;
  max-width: 520px; margin-bottom: 36px;
}
.btns { display: flex; gap: 16px; flex-wrap: wrap; }

.code-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
  transform: rotate(2deg);
  transition: transform .5s;
}
.code-card:hover { transform: rotate(0deg) translateY(-5px); }
.code-header {
  padding: 12px 16px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--border);
  display: flex; gap: 8px; align-items: center;
}
.code-header .dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.r { background: #ff5f57; }
.dot.y { background: #febc2e; }
.dot.g { background: #28c840; }
.file {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--muted);
}
pre {
  padding: 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  line-height: 1.7;
  overflow-x: auto;
}
.kw  { color: #ff7b72; }
.fn  { color: #d2a8ff; }
.str { color: #a5d6ff; }
.cm  { color: #6b7280; font-style: italic; }
.var { color: #7ee787; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: 40px; padding-top: 100px; }
  .code-card { transform: none; }
}
</style>