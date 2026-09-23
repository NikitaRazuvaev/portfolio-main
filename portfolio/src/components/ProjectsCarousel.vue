<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects'
import { useCarousel } from '../composables/useCarousel'

const total = projects.length
const {
  current, progress, isFirst, isLast,
  next, prev, goTo, pause, resume
} = useCarousel(total, { autoDelay: 6000 })

const wrap = ref(null)

/* Свайпы */
let startX = 0
let dx = 0

function onTouchStart(e) {
  startX = e.touches[0].clientX
  dx = 0
}
function onTouchMove(e) {
  dx = e.touches[0].clientX - startX
}
function onTouchEnd() {
  if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
}

/* Клавиатура, когда секция в зоне видимости */
function onKey(e) {
  if (!wrap.value) return
  const rect = wrap.value.getBoundingClientRect()
  const visible = rect.top < window.innerHeight && rect.bottom > 0
  if (!visible) return
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

window.addEventListener?.('keydown', onKey)
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-sub"><span class="num">02.</span>Портфолио</div>
      <h2 class="section-title">Избранные проекты</h2>

      <div
        ref="wrap"
        class="carousel-wrap"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <button
          class="carousel-btn prev"
          :disabled="isFirst"
          aria-label="Назад"
          @click="prev"
        >‹</button>

        <button
          class="carousel-btn next"
          :disabled="isLast"
          aria-label="Вперёд"
          @click="next"
        >›</button>

        <div class="carousel">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${current * 100}%)` }"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend="onTouchEnd"
          >
            <div
              v-for="(project, i) in projects"
              :key="project.id"
              class="slide"
            >
              <article class="project">
                <div class="p-num">
                  <span>{{ String(i + 1).padStart(2, '0') }}</span>
                  / {{ String(total).padStart(2, '0') }}
                </div>

                <div class="p-head">
                  <h3>{{ project.title }}</h3>
                  <span class="p-icon">{{ project.icon }}</span>
                </div>

                <p class="p-desc">{{ project.desc }}</p>

                <div class="p-meta">
                  <div>Срок: <b>{{ project.duration }}</b></div>
                  <div>Роль: <b>{{ project.role }}</b></div>
                </div>

                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- Точки -->
        <div class="carousel-dots">
          <button
            v-for="(_, i) in projects"
            :key="i"
            class="dot-btn"
            :class="{ active: i === current }"
            :aria-label="`Слайд ${i + 1}`"
            @click="goTo(i)"
          />
        </div>

        <!-- Прогресс -->
        <div class="carousel-progress">
          <div class="bar" :style="{ width: progress + '%' }" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-wrap { position: relative; padding: 0 60px; }
.carousel { overflow: hidden; border-radius: 18px; }
.carousel-track {
  display: flex;
  transition: transform .6s cubic-bezier(.65,.05,.36,1);
  will-change: transform;
}
.slide {
  min-width: 100%;
  padding: 4px;
  box-sizing: border-box;
}
.project {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 36px;
  position: relative;
  overflow: hidden;
  transition: border-color .35s;
  min-height: 340px;
  display: flex;
  flex-direction: column;
}
.project::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s;
}
.project:hover { border-color: rgba(0,217,255,0.3); }
.project:hover::before { transform: scaleX(1); }

.p-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 16px;
}
.p-num span { color: var(--accent); }

.p-head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  margin-bottom: 16px;
}
.p-head h3 {
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.p-icon { font-size: 2.2rem; flex-shrink: 0; }

.p-desc {
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 20px;
  flex-grow: 1;
}
.p-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
  flex-wrap: wrap;
}
.p-meta b { color: var(--text); font-weight: 600; }

.project .tags .tag {
  background: rgba(124,58,237,0.1);
  color: #b794ff;
  border-color: rgba(124,58,237,0.25);
}

/* Кнопки */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px; height: 48px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 1.3rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all .25s;
  z-index: 5;
}
.carousel-btn:hover:not(:disabled) {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
  box-shadow: 0 10px 30px -8px rgba(0,217,255,0.6);
}
.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.carousel-btn.prev { left: 0; }
.carousel-btn.next { right: 0; }

/* Точки */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}
.dot-btn {
  width: 32px; height: 4px;
  border-radius: 2px;
  background: var(--border);
  border: none;
  cursor: pointer;
  transition: all .3s;
  padding: 0;
}
.dot-btn.active {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  width: 48px;
}
.dot-btn:hover:not(.active) { background: var(--muted); }

/* Прогресс */
.carousel-progress {
  height: 2px;
  background: var(--border);
  border-radius: 2px;
  margin-top: 16px;
  overflow: hidden;
}
.carousel-progress .bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width .1s linear;
}

@media (max-width: 700px) {
  .carousel-wrap { padding: 0 4px; }
  .carousel-btn {
    width: 40px; height: 40px;
    top: auto; bottom: -60px;
    transform: none;
  }
  .carousel-btn.prev { left: calc(50% - 100px); }
  .carousel-btn.next { right: calc(50% - 100px); }
  .carousel-dots { margin-top: 70px; }
  .project { padding: 24px; min-height: auto; }
}
</style>