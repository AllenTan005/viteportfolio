<script >
import homepageVue from './view/homepage.vue';
import aboutVue from './view/about.vue';
import NavbarVue from './components/Navbar.vue';
import skillVue from './view/skill.vue';
import leftulVue from './components/leftul.vue';
import rightulVue from './components/rightul.vue';
import projectVue from './view/project.vue';
import ContactVue from './view/Contact.vue';

export default {

  components: {
    homepageVue, aboutVue, NavbarVue, skillVue, leftulVue, rightulVue, projectVue,ContactVue

  }
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div class="p-0">
    <leftulVue />
    <rightulVue />

    <NavbarVue />
    <homepageVue />
    <aboutVue />
    <skillVue />
    <projectVue />
    <ContactVue />
  </div>


</template>

<style scoped>
</style>
