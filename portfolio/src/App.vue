<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsCarousel from './components/ProjectsCarousel.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <a href="#main" class="skip-link">Перейти к содержимому</a>

  <NavBar />

  <header>
    <HeroSection />
  </header>

  <main id="main">
    <AboutSection />
    <ProjectsCarousel />
    <ContactSection />
  </main>

  <FooterBar />
</template>