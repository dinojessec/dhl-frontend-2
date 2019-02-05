<template>

  <div class="container">
    <!-- profile pic -->
    <div class="row">
      <div class="col-3 mb-5">
        <img
          src="@/assets/deehwa-logo.jpeg"
          class="rounded float-left"
          alt=""
        >
      </div>
      <div class="col">
        <p class="font-weight-bold text-left">Full name of student</p>
        <p class="font-weight-bold text-left">Grade level</p>
        <p class="font-weight-bold text-left">Strand</p>
        <p class="font-weight-bold text-left">LRN: 123456789012</p>
      </div>
    </div>
    <!-- content -->
    <div class="row">
      <div class="col-3">
        <div
          class="list-group"
          id="list-tab"
          role="tablist"
        >
          <a
            class="list-group-item list-group-item-action active"
            id="start-tab"
            data-toggle="list"
            href="#start"
            role="tab"
            aria-controls="start"
          >start</a>
          <a
            class="list-group-item list-group-item-action"
            id="next-tab"
            data-toggle="list"
            href="#next"
            role="tab"
            aria-controls="next"
          >next</a>
        </div>
      </div>
      <div class="col-9">
        <div
          class="tab-content"
          id="nav-tabContent"
        >
          <!-- 1st tab -->
          <div
            class="tab-pane fade show active"
            id="start"
            role="tabpanel"
            aria-labelledby="start-tab"
          >
            <personal-information></personal-information>
          </div>
          <!-- 2nd tab -->
          <div
            class="tab-pane fade"
            id="next"
            role="tabpanel"
            aria-labelledby="next-tab"
          >
            <contact-information></contact-information>
          </div>
        </div>
      </div>
    </div>

    <!-- end container -->
  </div>
</template>

<script>


import PersonalInformation from '@/components/user/personal-information.vue';
import ContactInformation from '@/components/user/contact-information.vue';

export default {
  name: 'StudentProfile',
  components: {
    PersonalInformation,
    ContactInformation,
  },
};
</script>

<style lang="scss" scoped>
</style>
