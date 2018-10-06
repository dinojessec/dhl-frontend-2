<template>
    <form>
        <div class="form-group">
            <b-form-group label="Educational Background" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">

                <!-- 1st row -->
                <b-card class="mb-3">
                    <b-input-group>
                        <b-form-group row label="Elementary:" label-class="text-sm-right" label-for="elementary" class="col-md-4 xs-12">
                            <b-form-input id="elementary"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Year Graduated:" label-class="text-sm-right" label-for="elemYearGraduated" class="col-md-4 xs-12">
                            <b-form-input id="elemYearGraduated"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Elementary Honors and Awards:" label-class="text-sm-right" label-for="elemHonors" class="col-md-4 xs-12">
                            <b-form-input id="elemHonors"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                </b-card>
                <!-- 2ndrow -->
                <b-card class="mb-3">
                    <b-input-group>
                        <b-form-group row label="Junior High School:" label-class="text-sm-right" label-for="jhs" class="col-md-4 xs-12">
                            <b-form-input id="jhs"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Year Graduated:" label-class="text-sm-right" label-for="jhsYearGraduated" class="col-md-4 xs-12">
                            <b-form-input id="jhsYearGraduated"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Junior High School Honors and Awards:" label-class="text-sm-left" label-for="jhsHonors" class="col-md-4 sm-6 xs-12">
                            <b-form-input id="jhsHonors"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                    <!-- 3rdrow -->
                    <b-input-group>
                        <div class="form-group col-md-4 xs-12 mt-4">
                            <select class="custom-select" id="als">
                                <option selected disabled>School Type</option>
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </select>
                        </div>
                        <b-form-group row label="Former School Location:" label-class="text-sm-right" label-for="formerSchoolLocatioin" class="col-md-4 xs-12">
                            <b-form-input id="formerSchoolLocatioin"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Voucher:" label-class="text-sm-right" label-for="voucher" class="col-md-4 xs-12">
                            <b-form-input id="voucher"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                </b-card>
                <!-- 4throw -->
                <b-card class="mb-3">
                    <b-input-group>
                        <b-form-group row label="Organization" label-class="text-sm-right" label-for="organization" class="col-md-4 xs-12">
                            <b-form-input id="organization"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Organization Awards" label-class="text-sm-right" label-for="organizationAward" class="col-md-4 xs-12">
                            <b-form-input id="organizationAward"></b-form-input>
                        </b-form-group>
                        <b-form-group row label="Preferred Course in College:" label-class="text-sm-right" label-for="preferredCourse" class="col-md-4 xs-12">
                            <b-form-input id="preferredCourse"></b-form-input>
                        </b-form-group>
                    </b-input-group>
                </b-card>
                <!-- 5throw -->
                <b-card class="mb-3">
                    <div class="form-group col-md-4 xs-12">
                        <select class="custom-select" id="als">
                            <option selected disabled>Preferred Shift</option>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </div>
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
