<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function onSubmit() {
  // Здесь подключи Formspree / EmailJS / свой backend
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.name = form.email = form.message = ''
  }, 2500)
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="section-sub"><span class="num">03.</span>Связь</div>
      <h2 class="section-title">Давайте работать вместе</h2>
      <p class="section-sub">Расскажите о задаче — отвечу в течение 24 часов.</p>

      <div class="contact-grid">
        <div class="contact-list">
          <a href="mailto:hello@petrov.dev" class="contact-item">
            <div class="ci-icon">✉️</div>
            <div>
              <div class="ci-label">Email</div>
              <div class="ci-value">hello@petrov.dev</div>
            </div>
          </a>
          <a href="https://t.me/petrov_dev" target="_blank" rel="noopener" class="contact-item">
            <div class="ci-icon">💬</div>
            <div>
              <div class="ci-label">Telegram</div>
              <div class="ci-value">@petrov_dev</div>
            </div>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener" class="contact-item">
            <div class="ci-icon">🐙</div>
            <div>
              <div class="ci-label">GitHub</div>
              <div class="ci-value">github.com/NikitaRazuvaev</div>
            </div>
          </a>
        </div>

        <form @submit.prevent="onSubmit">
          <input v-model="form.name" type="text" placeholder="Ваше имя" required>
          <input v-model="form.email" type="email" placeholder="Email" required>
          <textarea v-model="form.message" placeholder="Опишите проект..." required />

          <button
            type="submit"
            class="btn btn-primary"
            :class="{ sent }"
          >
            {{ sent ? '✓ Отправлено!' : 'Отправить сообщение' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}
.contact-list { display: flex; flex-direction: column; gap: 20px; }
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-decoration: none;
  color: var(--text);
  transition: all .3s;
}
.contact-item:hover {
  border-color: var(--accent);
  transform: translateX(6px);
}
.ci-icon {
  width: 44px; height: 44px;
  display: grid;
  place-items: center;
  background: rgba(0,217,255,0.1);
  border-radius: 10px;
  font-size: 1.2rem;
}
.ci-label { font-size: 0.8rem; color: var(--muted); }
.ci-value { font-weight: 600; }

form { display: flex; flex-direction: column; gap: 16px; }
input, textarea {
  padding: 14px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color .25s;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0,217,255,0.1);
}
textarea { resize: vertical; min-height: 120px; }

.btn.sent {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>