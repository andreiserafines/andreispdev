// src/router/router.js

import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
