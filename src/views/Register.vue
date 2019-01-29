<template>
  <div class="container">
      <reg-form-one v-if="step === 1" @formOneData="handleData"></reg-form-one>
      <reg-form-two v-if="step === 2" @formTwoData="handleData"></reg-form-two>
      <reg-form-three v-if="step === 3" @formThreeData="handleData"></reg-form-three>
      <reg-form-four v-if="step === 4"></reg-form-four>
      <reg-form-five v-if="step === 5"></reg-form-five>

      <div>
        <button type="button" class="btn btn-primary" @click="nextStep()" :disabled="isLastStep()">Next</button>
        <button type="button" class="btn btn-primary float-left mr-2" @click="prevStep()" :disabled="isFirstStep()">Back</button>
        <button type="button" class="btn btn-success float-right" @click="saveStudent(data)">Save</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

import RegFormOne from '@/components/student/RegFormOne';
import RegFormTwo from '@/components/student/RegFormTwo';
import RegFormThree from '@/components/student/RegFormThree';
import RegFormFour from '@/components/student/RegFormFour';
import RegFormFive from '@/components/student/RegFormFive';

const FIRST_STEP = 1;
const LAST_STEP = 5;

// @TODO: make this global
const apiUrl = 'http://localhost:3000/api/v1';

export default {
  name: 'Register',
  components: {
    RegFormOne,
    RegFormTwo,
    RegFormThree,
    RegFormFour,
    RegFormFive,
  },
  methods: {
    isFirstStep() {
      return this.step === FIRST_STEP;
    },

    isLastStep() {
      return this.step === LAST_STEP;
    },

    nextStep() {
      if (this.step <= 4) {
        this.step++;
        this.storeData(this.data);
      }
    },

    prevStep() {
      if (this.step >= 2) {
        this.step--;
      }
    },

    storeData(student) {
      localStorage.removeItem('studentData');
      localStorage.setItem('studentData', JSON.stringify(student));
    },

    saveStudent(student) {
      console.log('student');
      console.log(student);
      axios.post(`${apiUrl}/students`, {
        data: student,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleData(val) {
      this.data[val.name] = val;
    },
  },
  data() {
    return {
      step: 1,
      data: {},
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
