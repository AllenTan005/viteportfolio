<template>

<leftulVue />
    <rightulVue />
    <MobileNav @MobileNav='handleMobileNav' />
    <NavbarVue @about="handleAbout" />
  <div
    class="first-section bg-[#F7F8F9] px-[10rem] 1032px-custom:px-8 pt-[6rem] pb-6 flex flex-col justify-between h-[100vh] 1032px-custom:h-auto  ">
    <div class="flex flex-row 1032px-custom:flex-col items-center justify-between   ">

      <div class=" w-[50%] 1032px-custom:w-full  flex justify-center bg-cover"
        :style="{ 'background-image': 'url(' + spirkle + ')' }">
        <img src="../assets/main-photo.png" class="w-[40%]" alt="" />
      </div>
      <div class="w-[50%] 1032px-custom:w-full 1032px-custom:mt10
       pl-8">
        <p class="text-4xl 500px-custom:text-xl">HI my <br> name is <span class="font-bold  ">Allen</span></p>
        <p class="mt-5 text-2xl 500px-custom:text-base">I'm a <span class="font-bold ">frontend web developer</span>
          from
          Malaysia living in
          Taiwan Taipei
     
        </p>
      </div>
    </div>
    <div class="flex 1032px-custom:hidden  justify-center relative mt-5">

      <img src="../assets/mouse.svg" />
      <img src="../assets/mouse-scroll.svg" class="absolute top-[40px] animate-bounce " />



    </div>


  </div>

  <aboutVue id="about" />
    <skillVue id="skill" />
    <projectVue id="project" />
    <ContactVue id="contact" />


</template>

<script >
import spirkle from '../assets/Sprinkle.svg'
import { ref } from 'vue'
import aboutVue from '../view/about.vue';
import NavbarVue from '../components/Navbar.vue';
import skillVue from '../view/skill.vue';
import leftulVue from '../components/leftul.vue';
import rightulVue from '../components/rightul.vue';
import projectVue from '../view/project.vue';
import ContactVue from '../view/Contact.vue';
import MobileNav from '../components/mobileNav.vue';
export default {

components:{
  aboutVue,
    NavbarVue,
    skillVue,
    leftulVue,
    rightulVue,
    projectVue,
    ContactVue,
    MobileNav
},


  setup() {

    const bgimg = ref(spirkle)



    return {
      spirkle
    }
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


</script>



<style scoped>
</style>