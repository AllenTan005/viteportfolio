<template>
  <div class="left-line block 1032px-custom:hidden ">
    <ul class="flex flex-col items-center">
      <li class="email-li">
        <span class="m-0 p-0" style="writing-mode: vertical-rl;">allentkm9705@gmail.com</span>
      </li>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-wdith="2" stroke-linecap="round" stroke-linejoin="round" >
                <path d="9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg> -->

    </ul>
  </div>

</template>


<script>

export default {

  setup() {


    return {

    }
  }

}



</script>


<style scoped>
.left-line {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: rgb(29, 29, 29);
}

.email-li::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  /* background-color: rgb(29, 29, 29); */
  background-color: #B5BBFF;
}
</style>