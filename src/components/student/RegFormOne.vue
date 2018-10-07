<template>

    <form>
        <h4 class="mb-3"><strong>Personal Information</strong></h4>
        <!-- 1strow -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputFirstName">First Name</label>
                <input type="text" class="form-control" id="inputFirstName" placeholder="input First Name" v-model="fields.firstName">
            </div>
            <div class="form-group col-md-4">
                <label for="inputMiddleName">Middle Name</label>
                <input type="text" class="form-control" id="inputMiddleName" placeholder="Please input Complete Middle Name" v-model="fields.middleName">
            </div>
            <div class="form-group col-md-4">
                <label for="inputLastName">Last Name</label>
                <input type="text" class="form-control" id="inputLastName" placeholder="input Last Name" v-model="fields.lastName">
            </div>
        </div>
        <!-- 2ndrow -->
        <div class="card mb-2">
            <div class="card-header">Username will be the combination of your lastname and firstname</div>
            <div class="card-body">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputUsername">Username</label>
                        <input type="text" class="form-control" id="inputUsername" disabled v-model="fields.username">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" placeholder="Input password for your Username" v-model="fields.password">
                    </div>
                </div>
            </div>
        </div>
        <!-- 3rd -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="ALS">Alternative Learning System(ALS) passer</label>
                <select id="ALS" class="form-control" v-model="fields.ALS">
                    <option selected disabled>Indicate if you passed ALS test</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="form-group col-md-5">
                <label for="PEPT">Philippine Educational Placement Test(PEPT) passer</label>
                <select id="PEPT" class="form-control" v-model="fields.PEPT">
                    <option selected disabled>Indicate if you passed PEPT test</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="NC">National Certificate(NC) holder</label>
                <select id="NC" class="form-control" v-model="fields.NC">
                    <option selected disabled>Indicate if you passed NC test</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        <!-- 4th row -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputLRN">LRN</label>
                <input type="number" class="form-control" id="inputLRN" placeholder="e.g. 12345678901" v-model="fields.LRN">
            </div>
            <div class="form-group col-md-4">
                <label for="gradeLevel">Grade Level</label>
                <select id="gradeLevel" class="form-control" v-model="fields.gradeLevel">
                    <option selected disabled>Select grade level</option>
                    <option value="Grade11">Grade 11</option>
                    <option value="Grade12">Grade 12</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label for="strand">Strand</label>
                <select id="strand" class="form-control" v-model="fields.strand">
                    <option selected disabled>Select your strand</option>
                    <option value="STEM">STEM</option>
                    <option value="IT">Information Technology</option>
                </select>
            </div>
        </div>
        <!-- 5throw -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputBirthday">Birthday</label>
                <input type="date" class="form-control" id="inputBirthday" v-model="fields.birthday">

            </div>
            <div class="form-group col-md-4">
                <label for="inputPlaceOfBirth">Place of Birth</label>
                <input type="text" class="form-control" id="inputPlaceOfBirth" v-model="fields.placeOfBirth">

            </div>
            <div class="form-group col-md-4">
                <label for="sex">Sex</label>
                <select id="sex" class="form-control" v-model="fields.sex">
                    <option selected disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

            </div>
        </div>
        <!-- 6th row -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputMobileNumber">Mobile Number</label>
                <input type="number" class="form-control" id="inputMobileNumber" placeholder="e.g. 09-00-000-0000" v-model="fields.mobileNumber">
            </div>
            <div class="form-group col-md-4">
                <label for="inputLandlineNumber">Landline Number</label>
                <input type="number" class="form-control" id="inputLandlineNumber" placeholder="e.g. 000-0000" v-model="fields.landlineNumber">
            </div>
            <div class="form-group col-md-4">
                <label for="inputGuardian">Guardian</label>
                <input type="text" class="form-control" id="inputGuardian" placeholder="Point of Contact" v-model="fields.guardian">
            </div>
        </div>
        <!-- 7th row -->
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputMotherTongue">Mother Tongue</label>
                <input type="text" class="form-control" id="inputMotherTongue" v-model="fields.motherTongue">
            </div>
            <div class="form-group col-md-4">
                <label for="inputReligion">Religion</label>
                <input type="text" class="form-control" id="inputReligion" v-model="fields.religion">
            </div>
            <div class="form-group col-md-4">
                <label for="ethnicGroup">Ethnic Group</label>
                <select id="ethnicGroup" class="form-control" v-model="fields.ethnicGroup">
                    <option selected disabled>Select Ethnic group</option>
                    <option value="N.A.">N.A.</option>
                    <option value="Mangyan">Mangyan</option>
                </select>
            </div>
        </div>
        <!-- 8th row -->
        <label for="socialMedia">Social Media Accounts</label>
        <div class="form-row" id="socialMedia">
            <div class="input-group mb-3 col-md-4">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Facebook</span>
                </div>
                <input type="text" class="form-control" id="facebook" aria-describedby="basic-addon3" v-model="fields.facebook">
            </div>
            <div class="input-group mb-3 col-md-4">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Instagram</span>
                </div>
                <input type="text" class="form-control" id="instagram" aria-describedby="basic-addon3" v-model="fields.intagram">
            </div>
            <div class="input-group mb-3 col-md-4">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Email</span>
                </div>
                <input type="text" class="form-control" id="email" aria-describedby="basic-addon3" v-model="fields.email">
            </div>
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
  LRN: '',
  gradeLevel: '',
  strand: '',
  birthday: '',
  placeOfBirth: '',
  sex: '',
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
        console.log(val.password);
        this.$emit('formOneData', val);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid black;
}
</style>

