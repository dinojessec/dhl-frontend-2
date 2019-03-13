<template>
  <div class="container shadow p-3 mb-5 bg-white rounded">
      <carousel :per-page="1" :navigate-to="0" :mouse-drag="true">
        <slide>
          <img src="@/assets/deehwa-logo.jpeg" />
        </slide>
        <slide>
          Slide 2 Content
        </slide>
      </carousel>

  </div>
</template>

<script>
// @ is an alias to /src

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>


  // .example-slide {
  //   align-items: center;
  //   background-color: #666;
  //   color: #999;
  //   display: flex;
  //   font-size: 1.5rem;
  //   justify-content: center;
  //   min-height: 10rem;
  // }

.container {
  background-color: #e0e0e0;
}

</style>
