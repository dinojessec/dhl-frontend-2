<template>

    <form>
        <div class="form-group">
            <b-form-group label="Parents Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
                <!-- 1st line -->
                <b-card class="mb-3">
                    <b-form-group label="Father Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
                        <b-input-group>
                            <b-form-group row label="Father Name:" label-class="text-sm-right" label-for="fatherName" class="col-md-6 xs-12">
                                <b-form-input id="fatherName"></b-form-input>
                            </b-form-group>
                        </b-input-group>
                    </b-form-group>
                    <b-input-group>
                        <b-form-group row label="Occupation:" label-class="text-sm-right" label-for="fatherOccupation" class="col-md-4 xs-12">
                            <b-form-input id="fatherOccupation"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Employer:" label-class="text-sm-right" label-for="fatherEmployer" class="col-md-4 xs-12">
                            <b-form-input id="fatherEmployer"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Employer Address:" label-class="text-sm-right" label-for="fatherEmployerAddress" class="col-md-4 xs-12">
                            <b-form-input id="fatherEmployerAddress"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                    <b-input-group>
                        <b-form-group row label="Highest Educational Attainment:" label-class="text-sm-right" label-for="fatherEducAttainment" class="col-md-4 xs-12">
                            <b-form-input id="fatherEducAttainment"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="School Graduated:" label-class="text-sm-right" label-for="fatherSchoolGraduated" class="col-md-4 xs-12">
                            <b-form-input id="fatherSchoolGraduated"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Religion:" label-class="text-sm-right" label-for="fatherReligion" class="col-md-4 xs-12">
                            <b-form-input id="fatherReligion"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                    <b-input-group>
                        <b-form-group row label="Mobile Number:" label-class="text-sm-right" label-for="fatherMobileNumber" class="col-md-6 xs-12">
                            <b-form-input id="fatherMobileNumber"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Landline Number:" label-class="text-sm-right" label-for="fatherLandlineNumber" class="col-md-6 xs-12">
                            <b-form-input id="fatherLandlineNumber"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                </b-card>
                <!-- mother -->
                <b-card class="mb-3">
                    <b-form-group label="Mother Information" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
                        <b-input-group>
                            <b-form-group row label="Mother Name:" label-class="text-sm-right" label-for="motherName" class="col-md-6 xs-12">
                                <b-form-input id="motherName"></b-form-input>
                            </b-form-group>
                        </b-input-group>
                    </b-form-group>
                    <b-input-group>
                        <b-form-group row label="Occupation:" label-class="text-sm-right" label-for="motherOccupation" class="col-md-4 xs-12">
                            <b-form-input id="motherOccupation"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Employer:" label-class="text-sm-right" label-for="motherEmployer" class="col-md-4 xs-12">
                            <b-form-input id="motherEmployer"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Employer Address:" label-class="text-sm-right" label-for="motherEmployerAddress" class="col-md-4 xs-12">
                            <b-form-input id="motherEmployerAddress"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                    <b-input-group>
                        <b-form-group row label="Highest Educational Attainment:" label-class="text-sm-right" label-for="motherEducAttainment" class="col-md-4 xs-12">
                            <b-form-input id="motherEducAttainment"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="School Graduated:" label-class="text-sm-right" label-for="motherSchoolGraduated" class="col-md-4 xs-12">
                            <b-form-input id="motherSchoolGraduated"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Religion:" label-class="text-sm-right" label-for="motherReligion" class="col-md-4 xs-12">
                            <b-form-input id="motherReligion"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                    <b-input-group>
                        <b-form-group row label="Mobile Number:" label-class="text-sm-right" label-for="motherMobileNumber" class="col-md-6 xs-12">
                            <b-form-input id="motherMobileNumber"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Landline Number:" label-class="text-sm-right" label-for="motherLandlineNumber" class="col-md-6 xs-12">
                            <b-form-input id="motherLandlineNumber"></b-form-input>
                        </b-form-group>
                    </b-input-group>

                </b-card>
            </b-form-group>
        </div>
    </form>

</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
</style>
