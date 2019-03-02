<template>

  <form>
    <!-- 1st row -->
    <div class="form-row">
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          v-model="student.firstName"
          v-validate="'required|alpha_spaces'"
          name="First Name"
        >
        <div v-if="errors.first('First Name')" class="alert alert-danger mt-1">
          {{errors.first('First Name')}}
        </div>
      </div>
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="middleName">Middle Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Middle name"
          v-model="student.middleName"
          v-validate="'required|alpha_spaces'"
          name="Middle Name"
        >
        <div v-if="errors.first('Middle Name')" class="alert alert-danger mt-1">
          {{errors.first('Middle Name')}}
        </div>
      </div>
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          v-model="student.lastName"
          v-validate="'required|alpha_spaces'"
          name="Last Name"
        >
        <div v-if="errors.first('Last Name')" class="alert alert-danger mt-1">
          {{errors.first('Last Name')}}
        </div>
      </div>
    </div>

    <!-- 2nd row -->
    <div class="form-row">
      <div class="form-group required col-12 col-md-5">
        <label class="control-label" for="username">Username</label>
        <input
          type="text"
          class="form-control"
          readonly
          v-model="student.username"
        >
      </div>
      <div class="form-group col-12 col-md-2">
        <label>&nbsp;</label>
        <button
          type="button"
          class="form-control btn-primary"
          @click="generateUser()"
        >Generate</button>
      </div>
      <div class="form-group required col-12 col-md-5">
        <label class="control-label" for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Input password for your Username"
          v-validate="'required|min:6'"
          name="password"
          v-model="student.password"
        >
        <div v-if="errors.first('password')" class="alert alert-danger mt-1">
          {{errors.first('password')}}
        </div>
      </div>
    </div>

    <!-- 3nd row -->
    <div class="form-row">
      <div class="form-group col-12 col-md-4">
        <label
          class="col-form-label control-label"
          for="ALS"
        >ALS</label>
        <select
          id="ALS"
          class="form-control"
          v-model="student.ALS"
          v-validate="'required'"
          name="ALS"
        >
        <div v-if="errors.first('ALS')" class="alert alert-danger mt-1">
          {{errors.first('ALS')}}
        </div>
          <option
            value=""
            disabled
            selected
          >Are you an ALS passer?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div class="form-group col-12 col-md-4">
        <label
          class="col-form-label control-label"
          for="PEPT"
        >PEPT</label>
        <select
          id="PEPT"
          class="form-control"
          v-model="student.PEPT"
          v-validate="'required'"
          name="PEPT"
        >
        <div v-if="errors.first('PEPT')" class="alert alert-danger mt-1">
          {{errors.first('PEPT')}}
        </div>
          <option
            value=""
            disabled
            selected
          >Are you a PEPT passer?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div class="form-group col-12 col-md-4">
        <label
          class="col-form-label control-label"
          for="NC"
        >NC</label>
        <select
          id="NC"
          class="form-control"
          v-model="student.NC"
          v-validate="'required'"
          name="NC"
        >
        <div v-if="errors.first('NC')" class="alert alert-danger mt-1">
          {{errors.first('NC')}}
        </div>
          <option
            value=""
            disabled
            selected
          >Are you a NC holder?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>

    <!-- 4hd row -->
    <div class="form-row">
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputLRN">LRN</label>
        <input
          type="text"
          class="form-control"
          id="inputLRN"
          placeholder="e.g. 123456789012"
          v-model="student.LRN"
          v-validate="'required'"
          name="LRN"
        >
        <div v-if="errors.first('LRN')" class="alert alert-danger mt-1">
          {{errors.first('LRN')}}
        </div>
      </div>
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="gradeLevel">Grade Level</label>
        <select
          id="gradeLevel"
          class="form-control"
          v-model="student.gradeLevel"
          v-validate="'required'"
          name="Grade Level"
        >
        <div v-if="errors.first('Grade Level')" class="alert alert-danger mt-1">
          {{errors.first('Grade Level')}}
        </div>
          <option
            value=""
            disabled
            selected
          >Select grade level</option>
          <option value="Grade11">Grade 11</option>
          <option value="Grade12">Grade 12</option>
        </select>
      </div>
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="strand">Strand</label>
        <select
          id="strand"
          class="form-control"
          v-model="student.strand"
          v-validate="'required'"
          name="Strand"
        >
        <div v-if="errors.first('Strand')" class="alert alert-danger mt-1">
          {{errors.first('Strand')}}
        </div>
          <option
            v-for="strand of strandList" :key="strand.id"
          >{{ strand.name }}</option>
        </select>
      </div>
    </div>

    <!-- 5th row -->
    <div class="form-row">
      <div class="form-group required col-12 col-md-4">
        <label class="control-label" for="inputBirthday">Birthday</label>
        <input
          type="date"
          class="form-control"
          id="inputBirthday"
          v-model="student.birthday"
          v-validate="'required'"
          name="birthday"
        >
        <div v-if="errors.first('birthday')" class="alert alert-danger mt-1">
          {{errors.first('birthday')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputPlaceOfBirth">Place of Birth</label>
        <input
          type="text"
          class="form-control"
          id="inputPlaceOfBirth"
          v-model="student.placeOfBirth"
          v-validate="'required'"
          name="Place of Birth"
        >
        <div v-if="errors.first('Place of Birth')" class="alert alert-danger mt-1">
          {{errors.first('Place of Birth')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="sex">Sex</label>
        <select
          id="sex"
          class="form-control"
          v-model="student.sex"
          v-validate="'required'"
          name="Gender"
        >
        <div v-if="errors.first('Gender')" class="alert alert-danger mt-1">
          {{errors.first('Gender')}}
        </div>
          <option
            value=""
            disabled
            selected
          >Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>

    <!-- 6th row -->
    <div class="form-row">
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputMobileNumber">Mobile Number</label>
        <input
          type="text"
          class="form-control"
          id="inputMobileNumber"
          placeholder="e.g. 09-00-000-0000"
          v-validate="'digits:11'"
          name="mobile"
          v-model="student.mobileNumber"
        >
        <div v-if="errors.first('mobile')" class="alert alert-danger mt-1">
          {{errors.first('mobile')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputLandlineNumber">Landline Number</label>
        <input
          type="text"
          class="form-control"
          id="inputLandlineNumber"
          placeholder="e.g. 000-0000"
          v-validate="'digits:11'"
          name="landline"
          v-model="student.landlineNumber"
        >
        <div v-if="errors.first('landline')" class="alert alert-danger mt-1">
          {{errors.first('landline')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputGuardian">Guardian</label>
        <input
          type="text"
          class="form-control"
          id="inputGuardian"
          placeholder="Point of Contact"
          v-model="student.guardian"
        >
      </div>
    </div>

    <!-- 7th row -->
    <div class="form-row">
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="motherTongue">Mother Tongue</label>
        <select
          class="form-control"
          id="motherTongue"
          v-model="student.motherTongue"
          v-validate="'required'"
          name="mother tongue"
        >
        <div v-if="errors.first('mother tongue')" class="alert alert-danger mt-1">
          {{errors.first('mother tongue')}}
        </div>
          <option
            value=""
            selected
            disabled
          >Select Nationality</option>
          <option value="Filipino">Filipino</option>
          <option value="American">American</option>
        </select>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputReligion">Religion</label>
        <select
          class="form-control"
          id="religion"
          v-model="student.religion"
          v-validate="'required'"
          name="mother tongue"
        >
        <div v-if="errors.first('mother tongue')" class="alert alert-danger mt-1">
          {{errors.first('mother tongue')}}
        </div>
          <option
            value=""
            selected
            disabled
          >Select Religion</option>
          <option value="Catholic">Catholic</option>
          <option value="Iglesia ni cristo">Iglesia ni cristo</option>
        </select>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputEthnicGroup">Ethnic Group</label>
        <select
          class="form-control"
          id="ethnicGroup"
          v-model="student.ethnicGroup"
          v-validate="'required'"
          name="ethnic group"
        >
        <div v-if="errors.first('ethnic group')" class="alert alert-danger mt-1">
          {{errors.first('ethnic group')}}
        </div>
          <option
            value=""
            selected
            disabled
          >Select Ethnic Group</option>
          <option value="Manileno">Manileno</option>
        </select>
      </div>
    </div>

    <!-- 8th row -->
    <div class="form-row">
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputFacebook">Facebook</label>
        <input
          type="text"
          class="form-control"
          id="inputFacebook"
          v-model="student.facebook"
          v-validate="'required'"
          name="facebook"
        >
        <div v-if="errors.first('facebook')" class="alert alert-danger mt-1">
          {{errors.first('facebook')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputInstagram">Instagram</label>
        <input
          type="text"
          class="form-control"
          id="inputInstagram"
          v-model="student.instagram"
          v-validate="'required'"
          name="instagram"
        >
        <div v-if="errors.first('instagram')" class="alert alert-danger mt-1">
          {{errors.first('instagram')}}
        </div>
      </div>
      <div class="form-group col-12 col-md-4">
        <label class="control-label" for="inputEmail">Email</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail"
          v-validate="'required|email'"
          name="email"
          v-model="student.email"
        >
        <div v-if="errors.first('email')" class="alert alert-danger mt-1">
          {{errors.first('email')}}
        </div>
      </div>
    </div>

  </form>

</template>

<script>
import axios from 'axios';

export default {
  name: 'RegFormOne',
  data() {
    return {
      student: {
        username: null,
      },
      strandList: {},
    };
  },

  beforeCreate() {
    axios.get('http://localhost:3000/api/v1/students').then((res) => { this.strandList = res.data; });
  },

  watch: {
    student: {
      handler(val) {
        const dataMap = {
          form: 'formOne',
          data: val,
        };
        this.$store.commit('studentStateChange', dataMap);
        this.$store.commit('studentFormErrorCount', this.errors.count());
      },
      deep: true,
    },
  },

  methods: {
    generateUser() {
      const studentFirstName = this.student.firstName;
      const studentMiddleName = this.student.middleName;
      const studentLastName = this.student.lastName;
      if (typeof studentFirstName !== 'undefined' && typeof studentMiddleName !== 'undefined' && typeof studentLastName !== 'undefined') {
        const username = `${studentLastName}${studentFirstName}${studentMiddleName.charAt(0)}`;
        this.student.username = username.replace(/\s/g, '').toLowerCase();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.control-label {
  font-weight: bold;
}

.form-group {
  &.required {
    .control-label {
      &::after {
        content:"*";
        color: #ff0000;
      }
    }
  }
}
</style>
