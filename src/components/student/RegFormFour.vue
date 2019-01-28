<template>
  <form>
    <h4><strong>Educational Background</strong></h4>
    <!-- 1st row -->
    <div class="form-group mb-3">
      <h5><i>Elementary</i></h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="elementary">Elementary</label>
          <input
            type="text"
            class="form-control"
            id="elementary"
            placeholder="School Name"
            v-model="fields.elementary"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="elemYearGraduated">Year Graduated</label>
          <input
            type="month"
            class="form-control"
            id="elemYearGraduated"
            placeholder="Year of Graduation"
            v-model="fields.elemYear"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="elemAwards">Awards and Honors</label>
          <input
            type="text"
            class="form-control"
            id="elemAwards"
            placeholder="Awards and Honors"
            v-model="fields.elemHonors"
          >
        </div>
      </div>
    </div>
    <!-- 2ndrow -->
    <div class="form-group mb-3">
      <h5><i>Junior High School</i></h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="JHS">Junior High School</label>
          <input
            type="text"
            class="form-control"
            id="JHS"
            placeholder="School Name"
            v-model="fields.juniorHighSchool"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="jhsYearGraduated">Year Graduated</label>
          <input
            type="month"
            class="form-control"
            id="jhsYearGraduated"
            placeholder="Year of Graduation"
            v-model="fields.jhsYear"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="jhsAwards">Awards and Honors</label>
          <input
            type="text"
            class="form-control"
            id="jhsAwards"
            placeholder="Awards and Honors"
            v-model="fields.jhsHonors"
          >
        </div>
      </div>
    </div>
    <!-- 3rd row -->
    <div class="form-group mb-3">
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="schoolType">School Type</label>
          <select
            id="schoolType"
            class="form-control"
          >
            <option
              selected
              disabled
            >Select School Type</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="schoolLocation">Province</label>
          <select
            class="form-control"
            v-model="province"
          >
            <option
              v-for="p in provinces"
              :key="p.provCode"
            >
              {{p.provDesc}}
            </option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="schoolLocation">City</label>
          <select
            class="form-control"
            v-model="city"
          >
            <option
              v-for="c in cities"
              :key="c.citymunCode"
            >
              {{c.citymunDesc}}
            </option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="schoolLocation">Barangay</label>
          <select class="form-control">
            <option></option>
          </select>
        </div>
      </div>
    </div>
    <!-- 4throw -->
    <div class="row">
      <div class="form-group col-md-6">
        <label for="voucher">Voucher</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="voucher"
            placeholder="Input Voucher Code"
          >
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="voucherType">Voucher Type</label>
        <div class="input-group">
          <select
            class="form-control"
            id="voucherType"
          >
            <option
              selected
              disabled
            >Select Voucher Type</option>
            <option value="ESC">ESC</option>
            <option value="QVA">QVA</option>
          </select>
        </div>
      </div>
    </div>
    <!-- 5th row -->
    <div class="form-group mb-3">
      <label><strong>Add Organization</strong></label>
          <button
            type="button"
            class="btn btn-success"
            @click="addRow()"
          >+</button>
        <!-- <div class="col"> -->
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteRow()"
          >-</button>
        <!-- </div> -->
    </div>  
      <div
        v-for="(org, index) in organizations"
        :key="org.orgName" :id="index"
      >
        <div class="row">
          <div class="col">
            <label>Organization</label>
            <input
              type="text"
              class="form-control"
              v-model="organizations[index].org"
            />
          </div>
          <div class="col">
            <label>Awards</label>
            <input type="text" class="form-control" v-model="organizations[index].orgAward"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 6th row -->
    <div class="form-group mb-3">
      <h5><i>Other Info.</i></h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="preferredCourse">Preferred Course in College</label>
          <input
            type="text"
            class="form-control"
            id="preferredCourse"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="preferredShift">Preferred Shift</label>
          <select
            class="custom-select"
            id="preferredShift"
          >
            <option
              selected
              disabled
            >Morning or Afternoon</option>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="referredBy">Referred By:</label>
          <input
            type="text"
            class="form-control"
            id="referredBy"
            placeholder="Whom did you hear about us?"
          >
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
          id: 1,
          org: '',
          orgAward: ''
        }
      ],
      organizations: [
        {
          orgName: '',
          orgAward: ''
        }
      ],
      cityList: null,
      provinces: [],
      cities: []
    };
  },

  mounted() {
    this.loadProvinces();

    this.loadCities();
  },


  methods: {
    addRow() {
      this.organizations.push({
        org: '',
        orgAward: ''
      });

    },

    deleteRow(index) {
    //   this.organizations.splice(index, 1);
    this.organizations.pop();

    },

    loadProvinces() {
      axios
        .get('/mock-data/province.json')
        .then(response => {
          this.provinces = response.data;
        });
    },

    loadCities() {
      axios
        .get('/mock-data/city.json')
        .then(response => {
          this.cities = response.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
