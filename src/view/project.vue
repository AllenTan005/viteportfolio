<template>

    <div class="px-[10rem]  bg-[#f6fbff] pt-[6rem] pb-6 ">
        <div class="w-full flex justify-center">
            <p class="text-4xl font-bold mb-5">Something i've built</p><br>

        </div>
        <div class="flex mt-6 relative">
            <div class="w-[60%] ">
                <img src="../assets/1658133912212.jpg" alt="" class="absolute left-0 w-[60%] " />
            </div>
            <div class="w-[50%] z-10">
                <p class="text-end text-2xl font-bold">Featured Project</p>
                <p class="text-end text-xl">SSP BackStage</p>
                <div class="w-[100%] bg-[#F7F8F9] shadow h-auto p-5 mt-5">
                    <p class="text-xl">An admin dasboard that show user activity from using the SSP product
                        ,its also provide the function for custom SSP template as well
                    </p>
                </div>
                <div class="mt-2 flex justify-end">
                    <p class="text-end">VSCode &nbsp; Vue.js(composition API) &nbsp; Tailwind css &nbsp; Vue-Router</p>
                </div>
            </div>
        </div>
        <div class="flex mt-[30rem] relative">

            <div class="w-[50%] z-10">
                <p class="text-start text-2xl font-bold">Featured Project</p>
                <p class="text-start text-xl">SSP </p>
                <div class="w-[100%] bg-[#F7F8F9] shadow h-auto p-5 mt-5">
                    <p class="text-xl">A web app that help their fleid and facility<br>
                        ,its also have pre-purchase good's function too
                    </p>
                </div>
                <div class="mt-2 flex justify-start">
                    <p class="text-start">VSCode &nbsp; Vue.js(options API) &nbsp; Tailwind css &nbsp; Vue-Router</p>
                </div>
            </div>
            <div class="w-[60%] h-[40vh] overflow-hidden bg-contain bg-custom bg-no-repeat"
              >
                <!-- <img src="../assets/1658134018234.jpg" alt="" class=" right-0 " /> -->
                  <!-- :style="{ 'background-image': 'url(' + bgimg + bgimg2 + ')' }" -->
            </div>
        </div>

    </div>


</template>


<script>

import spirkle from '../assets/1658134018234.jpg'
import secondssp from '../assets/messageImage_1658133995502.jpg'
import mapssp from '../assets/1658134050832.jpg'
import { ref } from 'vue'
export default {


    setup() {

        const bgimg = ref(spirkle)
         const bgimg2 = ref(secondssp)


        return {
            bgimg2,
            bgimg,
            spirkle
        }
    }
}


</script>

<style scoped>
.bg-custom{
   
    background-image: url(../assets/1658134018234.jpg),url(../assets/messageImage_1658133995502.jpg),
     url(../assets/1658134050832.jpg);
     background-position: right center, left center,center center,center left;
}
</style>