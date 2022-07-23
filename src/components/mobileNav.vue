<template>
    <div class="header-nav hidden 1032px-custom:flex 1032px-custom:justify-center">
        <div class="w-[50%] flex justify-start">
            <div class="w-[70%] flex items-center justify-center ">
                <img src="../assets/logo.svg" alt="" />
            </div>
        </div>

        <div class="w-[50%] flex justify-end pr-8">

            <button class="hidden 1032px-custom:block " @click="menuToggle = !menuToggle"><img
                    src="../assets/menu-icon.svg" /></button>
            <div class="fixed hidden 1032px-custom:flex bg-[#B5BBFF] top-0 right-0 h-full overflow-y-scroll w-2/4  flex-col z-30"
                v-show="menuToggle">
                <span @click="menuToggle = false" class="m-3"><img src="../assets/closeMenu-icon.svg" /></span>

                <ul class="flex flex-col justify-center">
                    <li class="mb-6 p-5" @click="clickMobileNav('about')">
                        <p class="text-xl">about</p>
                    </li>
                    <li class="mb-6 p-5" @click="clickMobileNav('skill')">
                        <p class="text-xl">skill</p>
                    </li>
                    <li class="mb-6 p-5" @click="clickMobileNav('project')">
                        <p class="text-xl">project</p>
                    </li>
                    <li class="mb-6 p-5" @click="clickMobileNav('contact')">
                        <p class="text-xl">contact</p>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, watch, onMounted } from 'vue'

export default {
    setup() {
        const menuToggle = ref(false)
        let shop = reactive({ bolean: false })
        let event = reactive({ bolean: false })
        let course = reactive({ bolean: false })


        return {
            menuToggle,
            shop,
            event,
            course
        }
    },

    methods: {
        clickMobileNav(e) {
            this.$emit('MobileNav', e)
        }
    }


}



</script>


<style scoped>
::-webkit-scrollbar {
    width: 5px;

    margin-left: 3px;
}

::-webkit-scrollbar-track {
    background: #B5BBFF;
    border: solid 10px transparent;

}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;

    border-radius: 10px;

}

.header-nav {
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 7px 0px;
    /* border-bottom: 2px solid #E61E24; */


}
</style>