<template>
  <div class="container">
    <div class="row">
      <div class="col shadow p-3 mb-5 bg-white rounded-pill">
        <grade-level v-bind:strandLists="strandLists"></grade-level>
        <!-- <reg-form-two  v-if="step === 2"></reg-form-two>
        <reg-form-three v-if="step === 3"></reg-form-three> -->
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-12 col-md-6 my-1">
            <div class="d-flex flex-column flex-md-row btn-options">
              <!-- <button
                class="btn btn-primary"
                @click="backStep()"
                v-bind:disabled="isBackDisabled()"
              >Back</button>
              <button
                class="btn btn-primary"
                @click="nextStep()"
                v-bind:disabled="isNextDisabled()"
              >Next</button> -->
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

import axios from 'axios';

import gradeLevel from '../components/new-student/grade-level';

export default {
  name: 'Register',
  components: {
    gradeLevel,
  },
  data() {
    return {
      strandLists: []
    };
  },

  // retrieve from database
  created() {
    axios.get('http://localhost:3000/api/v1/students')
      .then((response) => {
        this.strandLists = response.data.strandData;
        // console.log(response.data.strandData);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  methods: {
    // nextStep() {
    //   if (this.step <= 4) {
    //     this.step = this.step + 1;
    //   }
    // },

    // backStep() {
    //   if (this.step >= 2) {
    //     this.step = this.step - 1;
    //   }
    // },

    // isBackDisabled() {
    //   return this.step === 1;
    // },

    // isNextDisabled() {
    //   return this.step === 5;
    // },

    isSaveDisabled() {
      const errorCount = this.$store.getters.getErrorCount;
      return errorCount > 0;
    },

    saveStudent() {
      const studentData = this.$store.getters.getStudentData;
      console.log(studentData);
      // axios.post('http://localhost:3000/register',{})
      axios
        .post('http://localhost:3000/api/v1/students', studentData)
        .then((response) => {
          console.log(response.data.message);
          const submitResult = response.data.message;
          if (submitResult === 'success') {
            this.$router.replace({ path: '/register-success' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
