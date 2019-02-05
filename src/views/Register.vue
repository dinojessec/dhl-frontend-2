<template>
  <div class="container">
    <div class="row">
      <div class="col">
        {{ step }}
        <reg-form-one v-if="step === 1"></reg-form-one>
        <!-- <reg-form-two  v-if="step === 2"></reg-form-two> -->
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-12 col-md-6 my-1">
            <div class="d-flex flex-column flex-md-row btn-options">
              <button
                class="btn btn-primary"
                @click="backStep()"
                v-bind:disabled="isBackDisabled()"
              >Back</button>
              <button
                class="btn btn-primary"
                @click="nextStep()"
                v-bind:disabled="isNextDisabled()"
              >Next</button>
              <button
                type="button"
                class="btn btn-link btn-block"
                @click="saveStudent()"
                v-bind:disabled="isSaveDisabled()"
              >Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

// import axios from 'axios';

import RegFormOne from '@/components/student/RegFormOne.vue';
// import RegFormTwo from '@/components/student/RegFormTwo.vue';

export default {
  name: 'Register',
  components: {
    RegFormOne,
    // RegFormTwo,
  },
  data() {
    return {
      step: 1,
    };
  },

  methods: {
    nextStep() {
      if (this.step <= 4) {
        this.step = this.step + 1;
      }
    },

    backStep() {
      if (this.step >= 2) {
        this.step = this.step - 1;
      }
    },

    isBackDisabled() {
      return this.step === 1;
    },

    isNextDisabled() {
      return this.step === 5;
    },

    isSaveDisabled() {
      const errorCount = this.$store.getters.getErrorCount;
      return errorCount > 0;
    },

    saveStudent() {
    }
  },

};
</script>

<style lang="scss" scoped>
.btn-options {
  .btn {
    margin-left: 5px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 5px;
      margin-left: 0px;
    }
  }
}
</style>
