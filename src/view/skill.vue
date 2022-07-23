<template>
    <div class="bg-[#F7F8F9] px-[10rem] 1032px-custom:px-8 pt-[6rem] pb-6">
        <div class="w-full flex justify-center">
            <p class="text-4xl 500px-custom:text-xl font-bold">Skill</p><br>

        </div>
        <div class="w-full flex justify-center">
            <p class="text-2xl 500px-custom:text-lg 500px-custom:text-center mt-5"> Tool that I use for doing my project
            </p>

        </div>

        <div class="flex 1032px-custom:flex-col mt-5">
            <!-- <div class="border-2 rounded-md border-[#B5BBFF]">
           <p></p>
        </div> -->
            <div class="w-[50%] 1032px-custom:w-full">
                <Card>
                    <template #header>
                        <div class="flex justify-center pt-5">
                            <img src='../assets/html.png' alt="" class="w-[30%]" />
                        </div>
                    </template>
                    <template #title>
                        <p class="text-center">HTML</p>
                    </template>

                </Card>

            </div>
            <div class="pl-4 w-[50%] 1032px-custom:w-full 1032px-custom:p-0  1032px-custom:mt-5">
                <Card>
                    <template #header>
                        <div class="flex justify-center pt-5">
                            <img src='../assets/css.png' alt="" class="w-[30%]" />
                        </div>
                    </template>
                    <template #title>
                        <p class="text-center">CSS</p>
                    </template>

                </Card>

            </div>
        </div>
        <div class="flex 1032px-custom:flex-col mt-5">
            <div class=" w-[50%] 1032px-custom:w-full 1032px-custom:p-0  1032px-custom:mt-5">
                <Card>
                    <template #header>
                        <div class="flex justify-center pt-5">
                            <img src='../assets/js.png' alt="" class="w-[30%]" />
                        </div>
                    </template>
                    <template #title>
                        <p class="text-center">JS</p>
                    </template>

                </Card>

            </div>
            <div class="pl-4 w-[50%] 1032px-custom:w-full 1032px-custom:p-0  1032px-custom:mt-5">
                <Card>
                    <template #header>
                        <div class="flex justify-center pt-5">
                            <img src='../assets/vue-logo.png' alt="" class="w-[30%]" />
                        </div>
                    </template>
                    <template #title>
                        <p class="text-center">Vue</p>
                    </template>

                </Card>

            </div>

        </div>

    </div>

</template>


<script>
import Card from 'primevue/card';


export default {

    components: {
        Card
    },

    setup() {


        return {

        }
    }
}

</script>


<style scoped>
:deep(.p-card-header img) {
    width: 30%;
}

:deep(.p-card-content) {
    display: none;
}
</style>