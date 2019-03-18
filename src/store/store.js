import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    student: {

    },
    formErrorCount: [],
  },

  mutations: {
    studentStateChange(state, student) {
      const stateRef = state;
      stateRef.student = student;
    },

    studentFormErrorCount(state, errorCount) {
      const stateRef = state;
      stateRef.formErrorCount = errorCount;
    },
  },
  
  getters: {
    // eslint-disable-next-line
    getErrorCount: (state) => { return state.formErrorCount; },

    getFormPropCount: (state) => { // @TODO: this is temporary
      const formFields = state.student.formOne;
      return Object.keys(formFields).length;
    },

    getStudentData: state => state.student,
  },
});

export default store;
