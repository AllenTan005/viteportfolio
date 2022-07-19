<template>
    <div class="px-[10rem]  bg-[#f6fbff] pt-[6rem] h-[100vh] pb-6 flex">
        <div class="w-[50%] flex flex-col justify-center">

            <p class="text-4xl font-bold">About Me</p>

            <p class="text-2xl mt-5">Having an 6 months Internship in and 1 year full-time job on front-end web
                development </p>
            <button class="mt-5 w-[30%] py-3 bg-transparent
             rounded-md border-[#B5BBFF] border-2 text-xl text-[#B5BBFF] hover:bg-[#B5BBFF] hover:text-white "> contact
                me</button>
        </div>
        <div class="w-[50%] flex flex-col justify-end bg-contain mt-[10rem] bg-no-repeat relative"
            :style="{ 'background-image': 'url(' + bgimg + ')' }">
            <div class="flex justify-end">
                <img src="../assets/about-html.svg" alt="" class="w-[65%] right-0 top-[-4rem] absolute" />
            </div>

        </div>

    </div>


</template>

<script>

import spirkle from '../assets/Sprinkle.svg'
import { ref } from 'vue'
export default {


    setup() {

        const bgimg = ref(spirkle)



        return {
            bgimg,
            spirkle
        }
    }
}



</script>

<style scoped>
.email-li::after {
    content: "";
    display: block;
    width: 90px;
    height: 1px;
    margin: 0px auto;
    background-color: rgb(29, 29, 29);
}
</style>