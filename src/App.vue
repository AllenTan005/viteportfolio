<script >
import homepageVue from './view/homepage.vue';
import aboutVue from './view/about.vue';

export default{

  components:{
  homepageVue,aboutVue
  }
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
<div class="p-0">
  <homepageVue />
    <aboutVue />
</div>


</template>

<style scoped>

</style>
