<template>
  <div id="app">

    <!-- header -->
    <global-nav class="header"></global-nav>

    <!-- main content -->

      <div class="container-fluid mt-5">
        <!-- <div class="row">
          <div class="col mx-auto">

          </div>
        </div> -->
         <router-view />
      </div>

    <!-- footer -->

      <!-- <global-footer class="footer"></global-footer> -->

  </div>

</template>

<script>
import GlobalNav from '@/components/header/GlobalNav.vue';
// import GlobalFooter from '@/components/footer/GlobalFooter.vue';

import store from './store/store';

export default {
  name: 'app',
  store,
  components: {
    GlobalNav,
    // GlobalFooter,
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // background-color: #e0e0e0;
}

.header {
 background-color: #f8f8ff;
}
.container {
  position: relative;
  height: 100%;
  // background-color: #e0e0e0;
  // display: table;
  height: 100%;
  width: 100%;
  margin: 1;
}

.footer {
  // margin: 10px;
  background-color: #e0e0e0;
}

</style>
