<template>
    <form>
        <b-form-group label="Personal Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
            <!-- 1strow -->
            <b-card class="mb-3">
                <div class="form-row">
                    <div class="form-group col-md-4 xs-12">
                        <label for="inputFirstName">First Name</label>
                        <input v-model="fname" type="text" class="form-control" id="inputFirstName" name="first-name" placeholder="First Name">
                    </div>
                        <div class="form-group col-md-4 xs-12">
                            <label for="inputmiddleName">Middle Name</label>
                            <input type="text" class="form-control" id="inputmiddleName" name="middle-name" placeholder="Middle Name">
                    </div>
                            <div class="form-group col-md-4 xs-12">
                                <label for="inputLastName">Last Name</label>
                                <input v-model="lname" type="text" class="form-control" id="inputLastName" name="last-name" placeholder="Last Name">
                    </div>
                            </div>
            </b-card>
            <!-- 2ndrow -->
            <div class="row">
                <div class="col-md-6">
                    <b-card class="mb-3">
                        <h4 class="card-title">Log in Details</h4>
                        <div class="form-row mb-3">
                            <div class=" col-md-6 xs-12">
                                <p>Username: {{ lname}}{{fname }}</p>
                                <!-- <input id="userI/d" type="text" class="form-control" name="userID" value="{{fname}}"> -->
                            </div>
                            <div class=" col-md-6 xs-12">
                                <b-form-input type="password" name="password" placeholder="Password"></b-form-input>
                            </div>
                        </div>
                    </b-card>
                </div>
                <!-- 3rd -->
                <div class="col-md-6">
                    <b-card class="mb-3">
                        <h4 class="card-title">Competency</h4>
                        <div class="form-row">
                            <div class="form-group col-md-4 xs-12">
                                <select class="custom-select" id="als">
                                    <option selected disabled>Alternative Learning System passer?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4 xs-12">
                                <select class="custom-select" id="pept">
                                    <option selected disabled>PhilippineEducational Placement Test passer?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4 xs-12">
                                <select class="custom-select" id="nc">
                                    <option selected disabled>National Certificate holder?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
            <!-- 3rd row -->
            <b-card class="mb-3">
                <b-input-group class="mb">
                    <b-form-group row label="LRN:" label-class="text-sm-right" label-for="lrn" class="col-md-4 xs-12">
                        <b-form-input id="lrn"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Grade Level:" label-class="text-sm-right" label-for="gradeLevel" class="col-md-4 xs-12">
                        <b-form-select v-model="grade" :options="level" id="gradeLevel" class="mb-1 " />
                        <div>Selected:
                            <strong>{{ grade }}</strong>
                        </div>
                    </b-form-group>
                    <b-form-group row label="Strand:" label-class="text-sm-right" label-for="strand" class="col-md-4 xs-12">
                        <b-form-select v-model="strand" :options="track" class="mb-1" id="strand" />
                        <div>Selected:
                            <strong>{{ strand }}</strong>
                        </div>
                    </b-form-group>
                </b-input-group>
            </b-card>
            <!-- 4throw -->
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Date of Birth:" label-class="text-sm-right" label-for="birthday" class="col-md-4 xs-12">
                        <b-form-input id="birthday" type="date"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Place of Birth:" label-class="text-sm-right" label-for="placeOfBirth" class="col-md-4 xs-12">
                        <b-form-input id="placeOfBirth"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Sex:" label-class="text-sm-right" label-for="sex" class="col-md-4 xs-12">
                        <b-form-select :options="['Male', 'Female']" class="mb-3 " id="sex" />
                    </b-form-group>
                </b-input-group>
            </b-card>
            <!-- 6th row -->
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Mobile Number:" label-class="text-sm-right" label-for="mobileNumber" class="col-md-4 xs-12">
                        <b-form-input id="mobileNumber"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Landline Number:" label-class="text-sm-right" label-for="landlineNumber" class="col-md-4 xs-12">
                        <b-form-input id="landlineNumber"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Guardian:" label-class="text-sm-right" label-for="guardian" class="col-md-4 xs-12">
                        <b-form-input id="guardian"></b-form-input>
                    </b-form-group>
                </b-input-group>
            </b-card>
            <b-card class="mb-3">
                <b-input-group>
                    <b-form-group row label="Mother Tongue:" label-class="text-sm-right" label-for="motherTongue" class="col-md-4 xs-12">
                        <b-form-input id="motherTongue"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Religion:" label-class="text-sm-right" label-for="religion" class="col-md-4 xs-12">
                        <b-form-input id="religion"></b-form-input>
                    </b-form-group>
                    <b-form-group row label="Ethnic Group:" label-class="text-sm-right" label-for="ethnicGroup" class="col-md-4 xs-12">
                        <b-form-input id="ethnicGroup"></b-form-input>
                    </b-form-group>
                    <!-- <b-form-group row label="Ethnic Group:" label-class="text-sm-right" label-for="ethnicGroup" class="col-4">
                                <b-form-select v-model="ethnic" :options="na" class="mb-1" id="sex" />
                                <div>Selected:
                                    <strong>{{ ethnic }}</strong>
                                </div>
                            </b-form-group> -->
                </b-input-group>
            </b-card>
            <button type="submit" class="btn btn-primary float-right">Next</button>
        </b-form-group>
    </form>

</template>

<script>
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
      lname: '',
      fname: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid black;
}
</style>

