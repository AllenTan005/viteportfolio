<template>
    <div class="1032px-custom:hidden   flex justify-between items-center h-[10vh] p-3 w-full">
        <div class="w-[20%] pl-5">
            <img src="../assets/logo.svg" alt="" />
        </div>
        <div class="w-[50%] flex justify-end items-center pr-5">
            <div class="w-[15%]">
                <span class="text-lg" @click="clickAbout('about')">About</span>
            </div>
            <div class="w-[15%]">
                <span class="text-lg" @click="clickAbout('skill')">Skill</span>
            </div>
            <div class="w-[15%]">
                <span class="text-lg" @click="clickAbout('project')">Project</span>
            </div>
            <div class="w-[15%]">
                <span class="text-lg" @click="clickAbout('contact')">Contact</span>
            </div>

            <a href="https://drive.google.com/file/d/197t0M7IYXsTMH-0MuzzMN-mAx7J0iII5/view?usp=sharing" target="_blank"
                class=" w-[15%] h-auto py-3 bg-transparent
             rounded-md border-[#B5BBFF] border-2 text-xl text-center text-[#B5BBFF] hover:bg-[#B5BBFF] hover:text-white ">Resume
            </a>
        </div>

    </div>


</template>


<script>
import { ref } from 'vue'
export default {

    methods: {
        clickAbout(e) {
            this.$emit('about', e)
        },

    }


}

</script>



<style scoped>
</style>