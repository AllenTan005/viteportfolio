<template>
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
          Taiwan </p>
      </div>
    </div>
    <div class="flex 1032px-custom:hidden  justify-center relative mt-5">

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