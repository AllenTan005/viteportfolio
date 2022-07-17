<template>
    <div class="bg-[#F7F8F9] px-[10rem] pt-[6rem] pb-6">
        <div class="flex ">
            <!-- <div class="border-2 rounded-md border-[#B5BBFF]">
           <p></p>
        </div> -->
            <div class="w-[50%]">
                <Card>
                    <template #header>

                    </template>
                    <template #title>
                        Advanced Card
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                        repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                        cupiditate
                        neque quas!
                    </template>
                    <template #footer>
                        <Button icon="pi pi-check" label="Save" />
                        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary"
                            style="margin-left: .5em" />
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
</style>