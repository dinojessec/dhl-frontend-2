<template>
    <form>
        <h4 class="mb-3"><strong>Home Address</strong></h4>
        <div class="form-group mb-3">
            <h5><i>Your Address</i></h5>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="homeNumber">House Number</label>
                    <input type="text" class="form-control" id="homeNumber" v-model="fields.homeNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="streetName">Street Name</label>
                    <input type="text" class="form-control" id="streetName" v-model="fields.streetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="barangay">Barangay</label>
                    <input type="text" class="form-control" id="barangay" v-model="fields.barangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="town">Town</label>
                    <input type="text" class="form-control" id="town" v-model="fields.town">
                </div>
                <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" v-model="fields.city">
                </div>
            </div>
        </div>
        <!-- fatheraddress -->
        <div class="form-group mb-3">
            <h5><i>Father Address</i></h5>
            <!-- checkbox -->
            <div class="custom-control custom-checkbox" @click="fatherSameAddress(check)">
                <input type="checkbox" class="custom-control-input" id="fatherSameAddress">
                <label class="custom-control-label" for="fatherSameAddress">Same Address Above</label>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="fatherHouseNumber">House Number</label>
                    <input type="text" class="form-control" id="item" v-model="fields.fatherHouseNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="fatherStreetName">Street Name</label>
                    <input type="text" class="form-control" id="fatherStreetName" v-model="fields.fatherStreetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherBarangay">Barangay</label>
                    <input type="text" class="form-control" id="fatherBarangay" v-model="fields.fatherBarangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="fatherTown">Town</label>
                    <input type="text" class="form-control" id="fatherTown" v-model="fields.fatherTown">
                </div>
                <div class="form-group col-md-6">
                    <label for="fatherCity">City</label>
                    <input type="text" class="form-control" id="fatherCity" v-model="fields.fatherCity">
                </div>
            </div>
        </div>
        <!-- motheraddress -->
        <div class="form-group mb-3">
            <h5><i>Mother Address</i></h5>
            <!-- checkbox -->
            <div class="custom-control custom-checkbox" @click="motherSameAddress()">
                <input type="checkbox" class="custom-control-input" id="motherSameAddress">
                <label class="custom-control-label" for="motherSameAddress">Same Address Above</label>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="motherHouseNumber">House Number</label>
                    <input type="text" class="form-control" id="motherHouseNumber" v-model="fields.motherHouseNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="motherStreetName">Street Name</label>
                    <input type="text" class="form-control" id="motherStreetName" v-model="fields.motherStreetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherBarangay">Barangay</label>
                    <input type="text" class="form-control" id="motherBarangay" v-model="fields.motherBarangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="motherTown">Town</label>
                    <input type="text" class="form-control" id="motherTown" v-model="fields.motherTown">
                </div>
                <div class="form-group col-md-6">
                    <label for="motherCity">City</label>
                    <input type="text" class="form-control" id="motherCity" v-model="fields.motherCity">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
const fields = {
  name: 'formTwo',
  homeNumber: '',
  streetName: '',
  barangay: '',
  town: '',
  city: '',
  fatherHouseNumber: '',
  fatherStreetName: '',
  fatherBarangay: '',
  fatherTown: '',
  fatherCity: '',
  motherHouseNumber: '',
  motherStreetName: '',
  motherBarangay: '',
  motherTown: '',
  motherCity: '',
};
export default {
  name: 'RegFormTwo',
  data() {
    return {
      fields,
    };
  },
  watch: {
    fields: {
      handler(val, oldVal) {
        this.$emit('formTwoData', val);
      },
      deep: true,
    },
  },
  methods: {
    fatherSameAddress(check) {
            this.fields.fatherHouseNumber = fields.homeNumber;
            this.fields.fatherStreetName = fields.streetName; 
            this.fields.fatherBarangay = fields.barangay;
            this.fields.fatherTown = fields.town;
            this.fields.fatherCity = fields.city;
    },
    
    motherSameAddress() {
      this.fields.motherHouseNumber = fields.homeNumber;
      this.fields.motherStreetName = fields.streetName;
      this.fields.motherBarangay = fields.barangay;
      this.fields.motherTown = fields.town;
      this.fields.motherCity = fields.city;
    },
  },

  mounted() {
    const localData = localStorage.getItem('studentData');
    const localObj = JSON.parse(localData);

    if (typeof localObj.formTwo !== 'undefined') {
      Object.keys(localObj.formTwo).forEach((key) => {
        if (typeof localObj.formTwo[key] !== 'undefined') {
          this.fields[key] = localObj.formTwo[key];
        }
      });
    }
  },

};


</script>


<style lang="scss" scoped>
</style>
