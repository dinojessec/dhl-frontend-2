<template>

  <form>
    <div class="container">
        <!-- 1st row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputFirstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="inputFirstName"
            v-model="fields.firstName"
            v-validate="'alpha_spaces|required'"
            name="First Name"
          >
          <small class="alert">{{ errors.first('First Name')}}</small>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputMiddleName">Middle Name</label>
          <input
            type="text"
            class="form-control"
            id="inputMiddleName"
            v-model="fields.middleName"
            v-validate="'alpha_spaces|required'"
            name="Middle Name"
          >
          <small class="alert">{{ errors.first('Middle Name')}}</small>
        </div>
        <div class="col-sm-12 col-md-4">
           <label for="inputLastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="inputLastName"
            v-model="fields.lastName"
            v-validate="'alpha_spaces|required'"
            name="Last Name"
          >
          <small class="alert">{{ errors.first('Last Name')}}</small>
        </div>

      </div>
        
        <!-- 2nd row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-6">
          <label for="inputUsername">Username</label>
          <input
            readonly
            type="text"
            class="form-control mb-1"
            id="inputUsername"
            v-model="fields.username"
          >
          <button
            type="button"
            class="form-control btn-primary"
            @click="generateUser()"
          >Click to Generate Username</button>
        </div>
        <div class="col-sm-12 col-md-6">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Input password for your Username"
            v-model="fields.password"
            v-validate="'required|min:6'"
            name="password"
          >
          <span class="alert">{{ errors.first('password')}}</span>
        </div>

      </div>

        <!-- 3rd row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="ALS">Alternative Learning System(ALS) passer</label>
          <select id="ALS" class="form-control" v-model="fields.ALS" >
            <option value="" selected disabled>Indicate if you passed ALS test</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="PEPT">Phil Educational Placement Test(PEPT) passer</label>
          <select id="PEPT" class="form-control" v-model="fields.PEPT">
            <option value="" selected disabled>Indicate if you passed PEPT test</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="NC">National Certificate(NC) holder</label>
          <select id="NC" class="form-control" v-model="fields.NC">
            <option value="" selected disabled>Indicate if you passed NC test</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

        <!-- 4th row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputLRN">LRN</label>
          <input type="text" class="form-control" id="inputLRN" placeholder="e.g. 123456789012" v-model="fields.lrn">
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="gradeLevel">Grade Level</label>
          <select id="gradeLevel" class="form-control" v-model="fields.gradeLevel">
            <option value="" selected disabled>Select grade level</option>
            <option value="Grade11">Grade 11</option>
            <option value="Grade12">Grade 12</option>
          </select>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="strand">Strand</label>
          <select id="strand" class="form-control" v-model="fields.strand">
            <option value="" selected disabled>Select your strand</option>
            <option value="STEM">STEM</option>
            <option value="IT">Information Technology</option>
          </select>
        </div>
      </div>

        <!-- 5th row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputBirthday">Birthday</label>
          <input type="date" class="form-control" id="inputBirthday" v-model="fields.birthday">
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputPlaceOfBirth">Place of Birth</label>
          <input type="text" class="form-control" id="inputPlaceOfBirth" v-model="fields.placeOfBirth">
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="sex">Sex</label>
          <select id="sex" class="form-control" v-model="fields.gender">
            <option value="" selected disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

        <!-- 6th row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputMobileNumber">Mobile Number</label>
          <input type="text" class="form-control" id="inputMobileNumber" placeholder="e.g. 09-00-000-0000" v-model="fields.mobileNumber" v-validate="'digits:11'" name="mobile">
          <span> {{ errors.first('mobile')}}</span>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputLandlineNumber">Landline Number</label>
          <input type="text" class="form-control" id="inputLandlineNumber" placeholder="e.g. 000-0000" v-model="fields.landlineNumber" v-validate="'digits:11'" name="landline">
          <span>{{ errors.first('landline')}}</span>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputGuardian">Guardian</label>
          <input type="text" class="form-control" id="inputGuardian" placeholder="Point of Contact" v-model="fields.guardian">
        </div>
      </div>

        <!-- 7th row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputMotherTongue">Mother Tongue</label>
          <select id="motherTongue" class="form-control" v-model="fields.motherTongue">
            <option value="filipino">Filipino</option>
            <option value="english">English</option>
            <option v-bind:value="{ other: true }">Other</option>
          </select>
          <div v-if="fields.motherTongue.other">
            <span>Please specify below..</span>
            <input type="text" class="form-control" id="inputMotherTongue">
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputReligion">Religion</label>
          <select id="religion" class="form-control" v-model="fields.religion">
            <option value="Catholic">Catholic</option>
            <option v-bind:value="{ other: true }">Other</option>
          </select>
          <div v-if="fields.religion.other">
            <span>Please specify below..</span>
            <input type="text" class="form-control" id="inputReligion">
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputReligion">Ethnic Group</label>
          <select id="ethnicGroup" class="form-control" v-model="fields.ethnicGroup">
            <option value="Manileno">Manileno</option>
            <option v-bind:value="{ other: true }">Other</option>
          </select>
          <div v-if="fields.ethnicGroup.other">
            <span>Please specify below..</span>
            <input type="text" class="form-control" id="inputEthnicGroup">
          </div>
        </div>
      </div>

        <!-- 8th row -->
      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="inputFacebook">Facebook</label>
          <input type="text" class="form-control" id="inputFacebook" v-model="fields.facebook">
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputInstagram">Instagram</label>
          <input type="text" class="form-control" id="inputInstagram" v-model="fields.instagram">
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="inputEmail">Email</label>
          <input type="text" class="form-control" id="inputEmail" v-model="fields.email" v-validate="'required|email'" name="email">
          <small class="alert">{{ errors.first('email')}}</small>
        </div>
      </div>

        <!-- end container -->
    </div>
  </form>

</template>

<script>
const fields = {
  name: 'formOne',
  firstName: '',
  middleName: '',
  lastName: '',
  username: '',
  password: '',
  ALS: '',
  PEPT: '',
  NC: '',
  lrn: '',
  gradeLevel: '',
  strand: '',
  birthday: '',
  placeOfBirth: '',
  gender: '',
  mobileNumber: '',
  landlineNumber: '',
  guardian: '',
  motherTongue: '',
  religion: '',
  ethnicGroup: '',
  facebook: '',
  instagram: '',
  email: '',
};

export default {
  name: 'RegFormOne',
  data() {
    return {
      fields,
    };
  },
  watch: {
    fields: {
      handler(val, oldVal) {
        this.$emit('formOneData', val);
      },
      deep: true,
    },
  },

  methods: {
    generateUser() {
      const middle = `${this.fields.middleName.charAt(0)}`;
      const username = `${this.fields.lastName}${
        this.fields.firstName
        }${middle}`;
      this.fields.username = username.toLowerCase().replace(/ /g, '');
    },
  },
  mounted() {
    // @TODO: this can be a global function (mixins in vue js)
    const localData = localStorage.getItem('studentData');
    // console.log('localData');
    // console.log(localData);
    const localObj = JSON.parse(localData);

    Object.keys(localObj.formOne).forEach((key) => {
      if (typeof localObj.formOne[key] !== 'undefined') {
        this.fields[key] = localObj.formOne[key];
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  // display: flex;
}

.alert {
  color: red;
}
</style>
