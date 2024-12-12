import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Slick
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

// Initialize AOS
AOS.init({
  offset: 120,
  duration: 600,
  easing: 'ease-in-out',
  delay: 100,
  once: true,
});

// Create Vue App
createApp(App).mount('#app');
