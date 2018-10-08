<template>
  <div>

    <reg-form-one v-if="step === 1" @formOneData="handleData"></reg-form-one>
    <reg-form-two v-if="step === 2" @formTwoData="handleData"></reg-form-two>
    <reg-form-three v-if="step === 3" @formThreeData="handleData"></reg-form-three>
    <reg-form-four v-if="step === 4"></reg-form-four>
    <reg-form-five v-if="step === 5"></reg-form-five>

    <button type="button" class="btn btn-primary float-right" @click="nextStep()" :disabled="isLastStep()">Next</button>
    <button type="button" class="btn btn-primary float-left" @click="prevStep()" :disabled="isFirstStep()">Back</button>
    <button type="button" class="btn btn-success float-right mr-2" @click="saveStudent(data)">Save</button>
  </div>
</template>

<script>
import RegFormOne from '@/components/student/RegFormOne';
import RegFormTwo from '@/components/student/RegFormTwo';
import RegFormThree from '@/components/student/RegFormThree';
import RegFormFour from '@/components/student/RegFormFour';
import RegFormFive from '@/components/student/RegFormFive';

const FIRST_STEP = 1;
const LAST_STEP = 5;

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
      }
    },

    prevStep() {
      if (this.step >= 2) {
        this.step--;
      }
    },

    saveStudent(student) {
      console.log('student');
      console.log(JSON.stringify(student));
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
