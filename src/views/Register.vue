<template>
  <div class="container">
    <div class="row">
      <div class="col shadow p-3 mb-5 bg-white rounded-pill">
        <grade-level v-bind:strandLists="strandLists"></grade-level> 
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-12 col-md-6 my-1">
            <div class="d-flex flex-column flex-md-row btn-options">
              <button
                type="button"
                class="btn btn-link btn-block"
                @click="saveStudent()"
                v-bind:disabled="errors.any()"
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
    isSaveDisabled() {
      const errorCount = this.$store.getters.getErrorCount;
      return errorCount > 0;
    },

    saveStudent() {
      const studentData = this.$store.getters.getStudentData;
      console.log(studentData);
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
