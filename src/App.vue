<script >
import homepageVue from './view/homepage.vue';
import aboutVue from './view/about.vue';
import NavbarVue from './components/Navbar.vue';
import skillVue from './view/skill.vue';
import leftulVue from './components/leftul.vue';
import rightulVue from './components/rightul.vue';
import projectVue from './view/project.vue';
import ContactVue from './view/Contact.vue';
import MobileNav from './components/mobileNav.vue';

export default {

  components: {
    homepageVue,
    aboutVue,
    NavbarVue,
    skillVue,
    leftulVue,
    rightulVue,
    projectVue,
    ContactVue,
    MobileNav
  },

  data() {

    return {
      emitValue: '',
      emitMobile: ''
    }
  },
  watch: {
    emitValue() {
      let element = ''
      if (this.emitValue === 'about') {

        console.log('meowabout')
        element = document.getElementById('about')
        element.scrollIntoView();
        // element = ''
      }
      if (this.emitValue === 'skill') {

        console.log('meowskill')
        element = document.getElementById('skill')
        element.scrollIntoView();
        // element = ''

      }
      if (this.emitValue === 'project') {
        console.log('meowproject')
        element = document.getElementById('project')
        element.scrollIntoView();

      }
      if (this.emitValue === 'contact') {
        console.log('meowcontac=t')
        element = document.getElementById('contact')
        element.scrollIntoView();

      }
      if (this.emitValue !== '') {
        element = ''
        console.log('here')
      }
      this.emitValue = ''
      console.log('elentouside', element)

    },
    emitMobile() {
      let element2 = ''
      if (this.emitMobile === 'about') {

        console.log('meowabout')
        element2 = document.getElementById('about')
        element2.scrollIntoView();
        // element = ''
      }
      if (this.emitMobile === 'skill') {

        console.log('meowskill')
        element2 = document.getElementById('skill')
        element2.scrollIntoView();
        // element = ''

      }
      if (this.emitMobile === 'project') {
        console.log('meowproject')
        element2 = document.getElementById('project')
        element2.scrollIntoView();

      }
      if (this.emitMobile === 'contact') {
        console.log('meowcontac=t')
        element2 = document.getElementById('contact')
        element2.scrollIntoView();

      }
      if (this.emitMobile !== '') {
        element2 = ''
        console.log('here')
      }
      this.emitMobile = ''
    }




  },

  methods: {
    handleAbout(e) {
      console.log('handleemit', e)
      this.emitValue = e
    },
    handleMobileNav(e) {
      this.emitMobile = e
    }
  }

}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div class="p-0">
    <leftulVue />
    <rightulVue />
    <MobileNav @MobileNav='handleMobileNav' />
    <NavbarVue @about="handleAbout" />
    <homepageVue />
    <aboutVue id="about" />
    <skillVue id="skill" />
    <projectVue id="project" />
    <ContactVue id="contact" />
  </div>


</template>

<style scoped>
</style>
