<template>
    <div
        class="px-[10rem] 1032px-custom:px-[4rem] 500px-custom:px-10 bg-[#f6fbff] pt-[6rem] h-[100vh] 1032px-custom:h-auto 500px-custom:h-auto pb-6 flex">
        <div class="w-[50%] 1032px-custom:w-full flex flex-col justify-center">

            <p class="text-4xl font-bold  500px-custom:text-xl">About Me</p>
            <p class="text-2xl mt-5 leading-relaxed  500px-custom:text-base">Hi graduated with a bachelor degree in
                multimedia design at Ming
                Chuang University,
                my interest in web development started when i taking a class that teach about Html,css,JavaScript.After
                that i start my
                first internship as a web dev's and been taught me a lot about web development
            </p>
            <!-- <p class="text-2xl mt-5">Having an 6 months Internship in and 1 year full-time job on front-end web
                development </p> -->

            <div class="w-[100%] mt-[6rem] flex 1032px-custom:justify-center items-center  timeline-wrapper relative">

                <span
                    class="text-[#575757] text-2xl 500px-custom:text-lg font-bold absolute left-[0px]  1032px-custom:left-[10%]  top-[-3rem] z-20"
                    v-if="years === 2020"> 2020-2020</span>
                <span
                    class="text-[#575757] text-2xl 500px-custom:text-lg font-bold absolute left-[25%] 1032px-custom:left-[40%] top-[-3rem] z-20"
                    v-if="years === 2021"> 2020-2021</span>
                <span
                    class="text-[#575757] text-2xl 500px-custom:text-lg font-bold absolute left-[50%]  1032px-custom:left-[67%] top-[-3rem] z-20"
                    v-if="years === 2022"> 2021-2022</span>
                <div class="circle" :class="years === 2020 ? 'circle2  pointer-events-none' : ''" @click="click2020()">
                </div>
                <hr class="timeline">
                <div class="circle" :class="years === 2021 ? 'circle2  pointer-events-none' : ''" @click="click2021()">
                </div>
                <hr class="timeline">
                <div class="circle" :class="years === 2022 ? 'circle2  pointer-events-none' : ''" @click="click2022()">
                </div>

            </div>
            <div class="mt-5 " v-if="years === 2020">
                <div class="w-[65%] 1032px-custom:w-full  mt-5 flex flex-col justify-center">
                    <p class="text-xl 500px-custom:text-lg   text-center">DHY(德和月資訊有限公司)</p>
                    <p class="text-lg 500px-custom:text-md text-[#c4c4c4] text-center">Front-End web developer</p>
                    <p class="text-lg 500px-custom:text-md text-[#c4c4c4] text-center">html,css ,jquery</p>
                </div>
            </div>
            <div class="mt-5" v-if="years === 2021">
                <div class="w-[65%]  1032px-custom:w-full mt-5 flex flex-col justify-center">
                    <p class="text-xl text-center">Raise-up(展燿設計有限公司)</p>
                    <p class="text-lg text-[#c4c4c4] text-center">Front-End web developer</p>
                    <p class="text-lg text-[#c4c4c4] text-center">Wordpress,html,css ,js</p>
                </div>
            </div>
            <div class="mt-5" v-if="years === 2022">
                <div class="w-[65%]  1032px-custom:w-full mt-5 flex flex-col justify-center">
                    <p class="text-xl text-center">Retailing Data(聚典資訊科技股份有限公司)</p>
                    <p class="text-lg text-[#c4c4c4] text-center">Front-End web developer</p>
                    <p class="text-lg text-[#c4c4c4] text-center">Vue.js,html,css ,js</p>
                </div>
            </div>
        </div>

        <div class="w-[50%] 1032px-custom:hidden flex flex-col justify-end bg-contain mt-[15rem] bg-no-repeat relative"
            :style="{ 'background-image': 'url(' + bgimg + ')' }">
            <div class="flex justify-end">
                <img src="../assets/about-html.svg" alt="" class="w-[65%] right-0 top-[-4rem] absolute" />
            </div>

        </div>
        <!-- <div class="w-100">

        </div> -->

    </div>


</template>

<script>

import spirkle from '../assets/Sprinkle.svg'
import { ref } from 'vue'
export default {


    setup() {

        const bgimg = ref(spirkle)
        const years = ref(2020)

        const click2020 = () => {
            years.value = 2020
        }
        const click2021 = () => {
            years.value = 2021
        }
        const click2022 = () => {
            years.value = 2022
        }

        return {
            years,
            bgimg,
            spirkle,
            click2020,
            click2021,
            click2022
        }
    }
}



</script>

<style scoped>
.timeline-wrapper {
    position: relative;
    left: 0;
    transition: left 0.5s;
}

.email-li::after {
    content: "";
    display: block;
    width: 90px;
    height: 1px;
    margin: 0px auto;
    background-color: rgb(29, 29, 29);
}

.timeline {

    width: 25%;
    border-top: 4px solid #B5BBFF;

}

.timeline2 {

    width: 35%;
    border-top: 3px dashed #B5BBFF;

}

.circle {
    width: 20px;
    height: 20px;
    background: #B5BBFF;
    border-radius: 50px;
    top: -7px;
    border: 20px solid #B5BBFF;
    cursor: pointer;
}

.circle2 {
    width: 20px;
    height: 20px;
    background: #757dd1;
    border-radius: 50px;
    top: -7px;
    border: 20px solid #757dd1;
    cursor: pointer;
    outline-color: #757dd1;
    outline-style: solid;
    outline-offset: 5px;
}

@media screen and (max-width: 500px) {
    .circle {
        width: 12px;
        height: 12px;
        background: #B5BBFF;
        border-radius: 50px;
        top: -7px;
        border: 10px solid #B5BBFF;
        cursor: pointer;
    }

    .circle2 {
        width: 12px;
        height: 12px;
        background: #757dd1;
        border-radius: 50px;
        top: -7px;
        border: 10px solid #757dd1;
        cursor: pointer;
        outline-color: #757dd1;
        outline-style: solid;
        outline-offset: 5px;
    }
}
</style>