<template>

    <form>
        <h4 class="mb-3"><strong>Parent Information</strong></h4>

        <div class="form-group mb-3">
            <h5><i>Father Information</i></h5>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="fatherName">Father Name</label>
                    <input type="text" class="form-control" id="fatherName" placeholder="Name of your Father" v-model="fields.fatherName">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="fatherOccupation">Occupation</label>
                    <input type="text" class="form-control" id="fatherOccupation" placeholder="Job or Profession" v-model="fields.fatherOccupation">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherEmployer">Employer</label>
                    <input type="text" class="form-control" id="fatherEmployer" placeholder="Company Name" v-model="fields.fatherEmployer">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherEmployerAddress">Employer Address</label>
                    <input type="text" class="form-control" id="fatherEmployerAddress" placeholder="Company Address" v-model="fields.fatherEmployerAddress">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="fatherEducationalAttainment">Highest Educational Attainment</label>
                    <input type="text" class="form-control" id="fatherEducationalAttainment" v-model="fields.fatherEducationalAttainment">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherSchoolGraduated">School Graduated</label>
                    <input type="text" class="form-control" id="fatherSchoolGraduated" placeholder="Name of School" v-model="fields.fatherSchoolGraduated">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherReligion">Religion</label>
                    <input type="text" class="form-control" id="fatherReligion" v-model="fields.fatherReligion">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="fatherMobileNumber">Mobile Number</label>
                    <input type="number" class="form-control" id="fatherMobileNumber" placeholder="e.g. 09-00-000-0000" v-model="fields.fatherMobileNumber">
                </div>
                <div class="form-group col-md-6">
                    <label for="fatherLandlineNumber">Landline Number</label>
                    <input type="number" class="form-control" id="fatherLandlineNumber" placeholder="e.g. 000-0000" v-model="fields.fatherLandlineNumber">
                </div>
            </div>
        </div>
        <div class="form-group mb-3">
            <!-- mother -->
            <h5><i>Mother Information</i></h5>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="motherName">Mother Name</label>
                    <input type="text" class="form-control" id="motherName" placeholder="Name of your Mother" v-model="fields.motherName">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="motherOccupation">Occupation</label>
                    <input type="text" class="form-control" id="motherOccupation" placeholder="Job or Profession" v-model="fields.motherOccupation">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherEmployer">Employer</label>
                    <input type="text" class="form-control" id="motherEmployer" placeholder="Company Name" v-model="fields.motherEmployer">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherEmployerAddress">Employer Address</label>
                    <input type="text" class="form-control" id="motherEmployerAddress" placeholder="Company Address" v-model="fields.motherEmployerAddress">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="motherEducationalAttainment">Highest Educational Attainment</label>
                    <input type="text" class="form-control" id="motherEducationalAttainment" v-model="fields.motherEducationalAttainment">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherSchoolGraduated">School Graduated</label>
                    <input type="text" class="form-control" id="motherSchoolGraduated" placeholder="Name of School" v-model="fields.motherSchoolGraduated">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherReligion">Religion</label>
                    <input type="text" class="form-control" id="motherReligion" v-model="fields.motherReligion">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="motherMobileNumber">Mobile Number</label>
                    <input type="number" class="form-control" id="motherMobileNumber" placeholder="e.g. 09-00-000-0000" v-model="fields.motherMobileNumber">
                </div>
                <div class="form-group col-md-6">
                    <label for="motherLandlineNumber">Landline Number</label>
                    <input type="number" class="form-control" id="motherLandlineNumber" placeholder="e.g. 000-0000" v-model="fields.motherLandlineNumber">
                </div>
            </div>

        </div>
    </form>

</template>

<script>
const fields = {
  fatherName: '',
  fatherOccupation: '',
  fatherEmployer: '',
  fatherEmployerAddress: '',
  fatherEducationalAttainment: '',
  fatherSchoolGraduated: '',
  fatherReligion: '',
  fatherMobileNumber: '',
  fatherLandlineNumber: '',
  motherName: '',
  motherOccupation: '',
  motherEmployer: '',
  motherEmployerAddress: '',
  motherEducationalAttainment: '',
  motherSchoolGraduated: '',
  motherReligion: '',
  motherMobileNumber: '',
  motherLandlineNumber: '',
};
export default {
  name: 'RegFormThree',
  data() {
    return {
      fields,
    };
  },
  watch: {
    fields: {
      handler(val, oldVal) {
        console.log(val.password);
        this.$emit('formThreeData', val);
      },
      deep: true,
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
