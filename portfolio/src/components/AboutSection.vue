<script setup>
const skills = [
  { icon: '⚡', title: 'Frontend', tags: ['React', 'TypeScript', 'Next.js', 'Vue 3', 'Tailwind'] },
  { icon: '🛠', title: 'Backend', tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'] },
  { icon: '🚀', title: 'DevOps', tags: ['Docker', 'Git', 'CI/CD', 'Nginx'] }
]
</script>

<template>
  <section id="about">
    <div class="container">
      <div class="section-sub"><span class="num">01.</span>Кто я</div>
      <h2 class="section-title">Обо мне</h2>

      <div class="about-grid reveal">
        <div class="about-text">
          <p>
            Более <strong>2 лет</strong> разрабатываю веб-приложения — от лендингов до сложных платформ.
            Умею работать как в команде, так и самостоятельно, от идеи до продакшена.
          </p>
          <p>
            Люблю <strong>чистый код</strong>, продуманный UX и оптимизацию производительности.
            Внимательно отношусь к деталям и срокам.
          </p>
        </div>

        <div id="skills" class="skills">
          <div v-for="skill in skills" :key="skill.title" class="skill">
            <h3><span class="icon">{{ skill.icon }}</span> {{ skill.title }}</h3>
            <div class="tags">
              <span v-for="tag in skill.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.about-text p { color: var(--muted); margin-bottom: 18px; font-size: 1.02rem; }
.about-text strong { color: var(--text); }

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.skill {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  transition: all .3s;
}
.skill:hover {
  border-color: rgba(0,217,255,0.4);
  transform: translateY(-4px);
}
.skill h3 {
  font-size: 1.05rem;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon { font-size: 1.3rem; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>