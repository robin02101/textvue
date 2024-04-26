<script>
import vueLogo from '@/assets/images/logo.svg';

export default {
  data() {
    return {
      vueLogo,
      Array: [1,2,3,4],
      init: 100,
      num: 0,
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    add() {
      for (var i = 0; i < this.Array.length; i++){
        this.num = this.num + this.Array[i] * this.Array[i]; 
      }
      this.num = this.num + this.init;
      console.log(this.num);
    },
   
  },
};
</script>

<template>
  <div class="w-[700px] h-[50dvh]">
    <nav class="flex">
      <button type="button" class="nav-btn active">Vue</button>
      <button type="button" class="nav-btn">編號</button>
      <button type="button" class="nav-btn">姓名</button>
      <button type="button" class="nav-btn">喜歡的食物</button>
    </nav>
    <div class="flex items-center justify-center h-full border-2 border-white rounded-b rounded-tr">
      <img :src="vueLogo" alt="Vue Logo" class="w-1/2 h-1/2">
    </div>
  </div>
</template>

<style scoped>
.nav-btn {
  @apply border-x-2 border-t-2 border-white rounded-t px-10 py-1 font-bold;
}

.active {
  @apply bg-white text-black;
}
</style>
