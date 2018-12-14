<template>
    <form>
        <h4><strong>Educational Background</strong></h4>
        <!-- 1st row -->
        <div class="form-group mb-3">
            <h5><i>Elementary</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="elementary">Elementary</label>
                    <input type="text" class="form-control" id="elementary" placeholder="School Name" v-model="fields.elementary">
                </div>
                <div class="form-group col-md-4">
                    <label for="elemYearGraduated">Year Graduated</label>
                    <input type="text" class="form-control" id="elemYearGraduated" placeholder="Year of Graduation" v-model="fields.elemYear">
                </div>
                <div class="form-group col-md-4">
                    <label for="elemAwards">Awards and Honors</label>
                    <input type="text" class="form-control" id="elemAwards" placeholder="Awards and Honors" v-model="fields.elemHonors">
                </div>
            </div>
        </div>
        <!-- 2ndrow -->
        <div class="form-group mb-3">
            <h5><i>Junior High School</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="JHS">Junior High School</label>
                    <input type="text" class="form-control" id="JHS" placeholder="School Name" v-model="fields.juniorHighSchool">
                </div>
                <div class="form-group col-md-4">
                    <label for="jhsYearGraduated">Year Graduated</label>
                    <input type="text" class="form-control" id="jhsYearGraduated" placeholder="Year of Graduation" v-model="fields.jhsYear">
                </div>
                <div class="form-group col-md-4">
                    <label for="jhsAwards">Awards and Honors</label>
                    <input type="text" class="form-control" id="jhsAwards" placeholder="Awards and Honors" v-model="fields.jhsHonors">
                </div>
            </div>
        </div>
        <!-- 3rd row -->
        <div class="form-group mb-3">
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="schoolType">School Type</label>
                    <select id="schoolType" class="form-control">
                        <option selected disabled>Select School Type</option>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <!-- <label for="schoolLocation">School Location</label>
                    <select class="form-control" v-model="city">
                        <option v-for="data of cityList" :key="data">{{ data }}</option>
                    </select> -->
                    {{ cityList }}
                </div>
                <div class="form-group col-md-2">
                    <label for="schoolLocation">Town</label>
                    <select class="form-control" v-for="brgy of fields.city" :key="brgy.barangay">
                        <option v-for="brgys of brgy.barangay" :key="brgys" :value="brgys.barangay">{{ brgys.barangay }}</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="voucher">Voucher</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="voucher" placeholder="Input Voucher Code" >
                    </div>
                </div>
                <div class="form-group col-md-3">
                    <label for="voucherType">Voucher Type</label>
                    <div class="input-group">
                        <select class="form-control" id="voucherType">
                            <option selected disabled>Select Voucher Type</option>
                            <option value="ESC">ESC</option>
                            <option value="QVA">QVA</option>   
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!-- 4throw -->
        <div class="form-group mb-3">
            <div class="form-row">
                <h5><i>Organizations</i></h5>
                <button type="button" class="ml-2 btn btn-secondary btn-sm" @click="addRow()">Add</button>
            </div>
        </div>
        <div>
            <div class="form-row" v-for="(org, index) in organizationsList" :key="org.id">
                <h4>Org {{ index }}</h4>
                <button type="button" class="ml-2 btn btn-secondary btn-sm " @click="deleteRow(index)">X</button>
                <input type="text" class="form-control mb-2" placeholder="org" v-model="org.org">
                <input type="text" class="form-control mb-2" placeholder="awards" v-model="org.orgAward">
            </div>
        </div>
        <!-- 5th row -->
        <div class="form-group mb-3">
            <h5><i>Other Info.</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="preferredCourse">Preferred Course in College</label>
                    <input type="text" class="form-control" id="preferredCourse">
                </div>
                <div class="form-group col-md-4">
                    <label for="preferredShift">Preferred Shift</label>
                    <select class="custom-select" id="preferredShift">
                        <option selected disabled>Morning or Afternoon</option>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="referredBy">Referred By:</label>
                    <input type="text" class="form-control" id="referredBy" placeholder="Whom did you hear about us?">
                </div>
            </div>
        </div>

    </form>

</template>

<script>

import axios from 'axios';

const fields = {
    name: 'formFour',
    city: '',
    elementary: '',
    elemYear: '',
    elemHonors: '',
    juniorHighSchool: '',
    jhsYear: '',
    jhsHonors: '',

};

export default {
    name: 'RegFormFour',
    data() {
        return {
            fields,
            organizationsList: [
                {
                    org: '',
                    orgAward: '',
                },
            ],
            cityList: null
        };
    },

    mounted() {
            axios.get('json-data/province.json')
            .then(response => (this.cityList = response));
    },
   

    methods: {
        addRow() {
            this.organizationsList.push({
                org: '',
                orgAward: '',
            });
            // console.log(this.inputs);

        },

        deleteRow(index) {
            this.organizationsList.splice(index, 1);

        }
    }
};
</script>

<style lang="scss" scoped>
</style>
