<template>
    <form>
        <h4 class="mb-3"><strong>Home Address</strong></h4>
        <div class="form-group mb-3">
            <h5><i>Your Address</i></h5>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="houseNumber">House Number</label>
                    <input type="text" class="form-control" id="houseNumber" placeholder="1610" v-model="fields.houseNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="streetName">Street Name</label>
                    <input type="text" class="form-control" id="streetName" placeholder="Marcos Highway" v-model="fields.streetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="barangay">Barangay</label>
                    <input type="text" class="form-control" id="barangay" placeholder="Santolan" v-model="fields.barangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="town">Town</label>
                    <input type="text" class="form-control" id="town" placeholder="Sta. Maria Compound" v-model="fields.town">
                </div>
                <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" placeholder="Pasig City" v-model="fields.city">
                </div>
            </div>
        </div>
        <!-- fatheraddress -->
        <div class="form-group mb-3">
            <h5><i>Father Address</i></h5>
            <!-- checkbox -->
            <div class="custom-control custom-checkbox" @click="fatherSameAddress()">
                <input type="checkbox" class="custom-control-input" id="fatherSameAddress">
                <label class="custom-control-label" for="fatherSameAddress">Same Address Above</label>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="fatherHouseNumber">House Number</label>
                    <input type="text" class="form-control" id="fatherHouseNumber" placeholder="1610" v-model="fields.fatherHouseNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="fatherStreetName">Street Name</label>
                    <input type="text" class="form-control" id="fatherStreetName" placeholder="Marcos Highway" v-model="fields.fatherStreetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="fatherBarangay">Barangay</label>
                    <input type="text" class="form-control" id="fatherBarangay" placeholder="Santolan" v-model="fields.fatherBarangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="fatherTown">Town</label>
                    <input type="text" class="form-control" id="fatherTown" placeholder="Sta. Maria Compound" v-model="fields.fatherTown">
                </div>
                <div class="form-group col-md-6">
                    <label for="fatherCity">City</label>
                    <input type="text" class="form-control" id="fatherCity" placeholder="Pasig City" v-model="fields.fatherCity">
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
                    <input type="text" class="form-control" id="motherHouseNumber" placeholder="1610" v-model="fields.motherHouseNumber">
                </div>
                <div class="form-group col-md-5">
                    <label for="motherStreetName">Street Name</label>
                    <input type="text" class="form-control" id="motherStreetName" placeholder="Marcos Highway" v-model="fields.motherStreetName">
                </div>
                <div class="form-group col-md-4">
                    <label for="motherBarangay">Barangay</label>
                    <input type="text" class="form-control" id="motherBarangay" placeholder="Santolan" v-model="fields.motherBarangay">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="motherTown">Town</label>
                    <input type="text" class="form-control" id="motherTown" placeholder="Sta. Maria Compound" v-model="fields.motherTown">
                </div>
                <div class="form-group col-md-6">
                    <label for="motherCity">City</label>
                    <input type="text" class="form-control" id="motherCity" placeholder="Pasig City" v-model="fields.motherCity">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
const fields = {
  houseNumber: '',
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
    fatherSameAddress() {
      this.fields.fatherHouseNumber = fields.houseNumber;
      this.fields.fatherStreetName = fields.streetName;
      this.fields.fatherBarangay = fields.barangay;
      this.fields.fatherTown = fields.town;
      this.fields.fatherCity = fields.city;
    },
    motherSameAddress() {
      this.fields.motherHouseNumber = fields.houseNumber;
      this.fields.motherStreetName = fields.streetName;
      this.fields.motherBarangay = fields.barangay;
      this.fields.motherTown = fields.town;
      this.fields.motherCity = fields.city;
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
