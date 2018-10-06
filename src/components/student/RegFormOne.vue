<template>

    <form>
        <b-form-group label="Personal Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
            <!-- 1strow -->
            <b-card class="mb-3">
                <b-row>
                    <b-form-group label="First Name" class="col-md-4 col-12">
                        <b-form-input type="text" id="inputFirstName" placeholder="First Name" v-model="fields.firstName"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Middle Name" class="col-md-4 col-12">
                        <b-form-input type="text" id="inputMiddleName" placeholder="Middle Name" v-model="fields.middleName"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Last Name" class="col-md-4 col-12">
                        <b-form-input type="text" id="inputLastName" placeholder="Last Name" v-model="fields.lastName"></b-form-input>
                    </b-form-group>
                </b-row>
            </b-card>
            <!-- 2ndrow -->
            <b-card class="mb-3">
                <b-form-group label="Log-in Details" label-size="lg">
                    <b-row>
                        <b-form-group label="Username" class="col-md-6 col-12">
                            <b-form-input type="text" id="inputUsername" placeholder="Username" v-model="fields.username"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" class="col-md-6 col-12">
                            <b-form-input type="password" id="inputPassword" placeholder="Password" v-model="fields.password"></b-form-input>
                        </b-form-group>
                    </b-row>
                </b-form-group>
            </b-card>
            <!-- 3rd -->
            <b-card class="mb-3">
                <b-form-group label="Competency" label-size="lg">
                    <div class="form-row">
                        <b-form-group label="Alternative Learning System(ALS) passer?" label-size="sm" class="col-md-4 col-12 mb-2" label-class="font-weight-bold pt-0" >
                            <b-form-select id="als" v-model="fields.ALS">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </b-form-select>
                        </b-form-group>
                        <b-form-group label="PhilippineEducational Placement Test(PEPT) passer?" label-size="sm" class="col-md-5 col-12" label-class="font-weight-bold pt-0">
                            <b-form-select id="pept" v-model="fields.PEPT">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </b-form-select>
                        </b-form-group>
                        <b-form-group label="National Certificate(NC) holder?" label-size="sm" class="col-md-3 col-12" label-class="font-weight-bold pt-0" >
                            <b-form-select id="nc" v-model="fields.NC">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </b-form-select>
                        </b-form-group>
                    </div>
                </b-form-group>
            </b-card>
            <!-- 3rd row -->
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group label="LRN:" label-class="text-sm-right" label-for="lrn" class="col-md-4 col-12">
                        <b-form-input id="lrn"  v-model="fields.LRN"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Grade Level:" label-class="text-sm-right" label-for="gradeLevel" class="col-md-4 col-12" >
                        <b-form-select  :options="level" id="gradeLevel" class="mb-1 " v-model="fields.gradeLevel"/>
                        <div>Selected:
                            <strong>{{ grade }}</strong>
                        </div>
                    </b-form-group>
                    <b-form-group label="Strand:" label-class="text-sm-right" label-for="strand" class="col-md-4 col-12" >
                        <b-form-select :options="track" class="mb-1" id="strand" v-model="fields.strand"/>
                        <div>Selected:
                            <strong>{{ strand }}</strong>
                        </div>
                    </b-form-group>
                </b-input-group>
            </b-card>
            <!-- 4throw -->
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Date of Birth:" label-class="text-sm-right" label-for="birthday" class="col-md-4 xs-12" >
                        <b-form-input id="birthday" type="date" v-model="fields.birthday"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Place of Birth:" label-class="text-sm-right" label-for="placeOfBirth" class="col-md-4 xs-12" >
                        <b-form-input id="placeOfBirth" v-model="fields.placeOfBirth"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Sex:" label-class="text-sm-right" label-for="sex" class="col-md-4 xs-12" >
                        <b-form-select :options="['Male', 'Female']" class="mb-3 " id="sex" v-model="fields.sex"/>
                    </b-form-group>
                </b-input-group>
            </b-card>
            <!-- 6th row -->
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Mobile Number:" label-class="text-sm-right" label-for="mobileNumber" class="col-md-4 xs-12" >
                        <b-form-input id="mobileNumber" v-model="fields.mobileNumber"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Landline Number:" label-class="text-sm-right" label-for="landlineNumber" class="col-md-4 xs-12" >
                        <b-form-input id="landlineNumber" v-model="fields.landlineNumber"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Guardian:" label-class="text-sm-right" label-for="guardian" class="col-md-4 xs-12" >
                        <b-form-input id="guardian" v-model="fields.guardian"></b-form-input>
                    </b-form-group>
                </b-input-group>
            </b-card>
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Mother Tongue:" label-class="text-sm-right" label-for="motherTongue" class="col-md-4 col-12" >
                        <b-form-input id="motherTongue" v-model="fields.motherTongue"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Religion:" label-class="text-sm-right" label-for="religion" class="col-md-4 col-12">
                        <b-form-input id="religion"  v-model="fields.religion"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Ethnic Group:" label-class="text-sm-right" label-for="ethnic" class="col-md-4 col-12" >
                        <b-form-select  :options="group" class="mb-1" id="ethnic" v-model="fields.ethnicGroup"/>
                    </b-form-group>
                </b-input-group>
            </b-card>
        </b-form-group>
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
};

export default {
  name: 'RegFormOne',
  data() {
    return {
      grade: null,
      level: [
        { value: null, text: 'Please select Grade Level' },
        { value: 'Grade 11', text: 'Grade 11' },
        { value: 'Grade 12', text: 'Grade 12' },
      ],
      strand: null,
      track: [
        { value: null, text: 'Please Choose your Strand' },
        { value: 'STEM', text: 'Stem' },
        { value: 'option2', text: 'option2' },
      ],
      ethnic: null,
      group: [
        { value: null, text: 'Please Choose your Ethnic Group' },
        { value: 'Negrito Groups', text: 'Negrito Groups' },
        { value: 'Mangyan', text: 'Mangyan' },
      ],
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

