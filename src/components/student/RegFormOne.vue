<template>
    <form>

        <div class="form-group">
            <b-form-group label="Personal Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
                <b-card bg-variant="light">
                    <!-- 1strow -->
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="First Name:" label-class="text-sm-right" label-for="firstName" class="col-4">
                                <b-form-input id="firstName"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Middle Name:" label-class="text-sm-right" label-for="middleName" class="col-4">
                                <b-form-input id="middleName"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Last Name:" label-class="text-sm-right" label-for="lastName" class="col-4">
                                <b-form-input id="lastName"></b-form-input>
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <!-- 2ndrow -->
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="Email:" label-class="text-sm-right" label-for="email" class="col-6">
                                <b-form-input id="email"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Password:" label-class="text-sm-right" label-for="password" class="col-6">
                                <b-form-input id="password"></b-form-input>
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <!-- 3rd -->
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="Alternative Learning System passer:" class="col-4">
                                <b-form-radio-group class="pt-2" :options="['Yes', 'No']" />
                            </b-form-group>
                            <b-form-group row label="PhilippineEducational Placement Test passer:" class="col-5">
                                <b-form-radio-group class="pt-2" :options="['Yes', 'No']" />
                            </b-form-group>
                            <b-form-group row label="National Certificate holder:" class="col-3">
                                <b-form-radio-group class="pt-2" :options="['Yes', 'No']" />
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <!-- 4th row -->
                    <b-col>
                        <b-input-group class="mb-2">
                            <b-form-group row label="LRN:" label-class="text-sm-right" label-for="lrn" class="col-4">
                                <b-form-input id="lrn"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Grade Level:" label-class="text-sm-right" label-for="gradeLevel" class="col-4">
                                <b-form-select v-model="grade" :options="level" id="gradeLevel" class="mb-1 " />
                                <div>Selected:
                                    <strong>{{ grade }}</strong>
                                </div>
                            </b-form-group>
                            <b-form-group row label="Strand:" label-class="text-sm-right" label-for="strand" class="col-4">
                                <b-form-select v-model="strand" :options="track" class="mb-1" id="strand" />
                                <div>Selected:
                                    <strong>{{ strand }}</strong>
                                </div>
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <!-- 5throw -->
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="Date of Birth:" label-class="text-sm-right" label-for="birthday" class="col-4">
                                <b-form-input id="birthday" type="date"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Place of Birth:" label-class="text-sm-right" label-for="placeOfBirth" class="col-4">
                                <b-form-input id="placeOfBirth"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Sex:" label-class="text-sm-right" label-for="sex" class="col-4">
                                <b-form-select :options="['Male', 'Female']" class="mb-3 " id="sex" />
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <!-- 6th row -->
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="Mobile Number:" label-class="text-sm-right" label-for="mobileNumber" class="col-4">
                                <b-form-input id="mobileNumber"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Landline Number:" label-class="text-sm-right" label-for="landlineNumber" class="col-4">
                                <b-form-input id="landlineNumber"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Guardian:" label-class="text-sm-right" label-for="guardian" class="col-4">
                                <b-form-input id="guardian"></b-form-input>
                            </b-form-group>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group>
                            <b-form-group row label="Mother Tongue:" label-class="text-sm-right" label-for="motherTongue" class="col-4">
                                <b-form-input id="motherTongue"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Religion:" label-class="text-sm-right" label-for="religion" class="col-4">
                                <b-form-input id="religion"></b-form-input>
                            </b-form-group>
                            <b-form-group row label="Ethnic Group:" label-class="text-sm-right" label-for="ethnicGroup" class="col-4">
                                <b-form-input id="ethnicGroup"></b-form-input>
                            </b-form-group>
                            <!-- <b-form-group row label="Ethnic Group:" label-class="text-sm-right" label-for="ethnicGroup" class="col-4">
                                <b-form-select v-model="ethnic" :options="na" class="mb-1" id="sex" />
                                <div>Selected:
                                    <strong>{{ ethnic }}</strong>
                                </div>
                            </b-form-group> -->
                        </b-input-group>
                    </b-col>

                    <button type="submit" class="btn btn-primary float-right">Next</button>

                </b-card>
            </b-form-group>
        </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

