<template>
  <div id="app">

    <!-- header -->
    <global-nav></global-nav>

    <!-- main content -->
    <div class="container mt-5">
      <div class="row">
        <div class="col mx-auto">
          <router-view />
        </div>
      </div>
    </div>

    <!-- footer -->
  </div>

</template>

<script>
import GlobalNav from '@/components/header/GlobalNav';

export default {
  name: 'app',
  components: {
    GlobalNav,
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
