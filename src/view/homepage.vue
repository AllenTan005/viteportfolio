<template>
  <div class="first-section bg-[#F7F8F9] px-[10rem] pt-[6rem] pb-6 flex flex-col justify-between h-[100vh]  ">
    <div class="flex flex-row items-center justify-between   ">

      <div class=" w-[50%]  flex justify-center bg-cover" :style="{ 'background-image': 'url(' + spirkle + ')' }">
        <img src="../assets/main-photo.png" class="w-[40%]" alt="" />
      </div>
      <div class="w-[50%] pl-8">
        <p class="text-4xl">HI my <br> name is <span class="font-bold  ">Allen</span></p>
        <p class="mt-5 text-2xl">I'm a <span class="font-bold ">frontend web developer</span> from Malaysia living in Taiwan </p>
      </div>
    </div>
    <div class="flex  justify-center relative mt-5">

      <img src="../assets/mouse.svg" />
      <img src="../assets/mouse-scroll.svg" class="absolute top-[40px] animate-bounce " />



    </div>


  </div>


</template>

<script >
import spirkle from '../assets/Sprinkle.svg'
import { ref } from 'vue'
export default {


  setup() {

    const bgimg = ref(spirkle)



    return {
      spirkle
    }
  }
}


</script>



<style scoped>
</style>