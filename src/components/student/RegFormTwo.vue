<template>
    <form>
      <div class="container">

          <div class="row mb-3">
              <strong>Input Your Address</strong>
          </div>
            <!-- 1st row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-4">
                <label for="homeNumber">House Number</label>
                <input type="text" class="form-control" id="homeNumber" v-model="fields.homeNumber">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="streetName">Street Name</label>
                <input type="text" class="form-control" id="streetName" v-model="fields.streetName">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="barangay">Barangay</label>
                <input type="text" class="form-control" id="barangay" v-model="fields.barangay">    
              </div>
          </div>
            <!-- 2nd row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-6">
                <label for="town">Town</label>
                <input type="text" class="form-control" id="town" v-model="fields.town">
              </div>
              <div class="col-sm-12 col-md-6">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" v-model="fields.city">    
              </div>
          </div>

          <div class="row mb-3">
              <strong>Input Your Father's Address</strong>
          </div>

            <!-- 3rd row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-4">
                <label for="fatherHouseNumber">House Number</label>
                <input type="text" class="form-control" id="fatherHouseNumber" v-model="fields.fatherHouseNumber">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="fatherStreetName">Street Name</label>
                <input type="text" class="form-control" id="fatherStreetName" v-model="fields.fatherStreetName">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="fatherBarangay">Barangay</label>
                <input type="text" class="form-control" id="fatherBarangay" v-model="fields.fatherBarangay">    
              </div>
          </div>
            <!-- 4th row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-6">
                <label for="fatherTown">Town</label>
                <input type="text" class="form-control" id="fatherTown" v-model="fields.fatherTown">
              </div>
              <div class="col-sm-12 col-md-6">
                <label for="fatherCity">City</label>
                <input type="text" class="form-control" id="fatherCity" v-model="fields.fatherCity">    
              </div>
          </div>

          <div class="row mb-3">
              <strong>Input Your Mother's Address</strong>
          </div>

            <!-- 5th row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-4">
                <label for="motherHouseNumber">House Number</label>
                <input type="text" class="form-control" id="motherHouseNumber" v-model="fields.motherHouseNumber">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="motherStreetName">Street Name</label>
                <input type="text" class="form-control" id="motherStreetName" v-model="fields.motherStreetName">
              </div>
              <div class="col-sm-12 col-md-4">
                <label for="motherBarangay">Barangay</label>
                <input type="text" class="form-control" id="motherBarangay" v-model="fields.motherBarangay">    
              </div>
          </div>
            <!-- 6th row -->
          <div class="row mb-3">
              <div class="col-sm-12 col-md-6">
                <label for="motherTown">Town</label>
                <input type="text" class="form-control" id="motherTown" v-model="fields.motherTown">
              </div>
              <div class="col-sm-12 col-md-6">
                <label for="motherCity">City</label>
                <input type="text" class="form-control" id="motherCity" v-model="fields.motherCity">    
              </div>
          </div>


          <!-- end container -->
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
      sameAddress: false
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
        if(this.sameAddress) {
            this.fields.fatherHouseNumber = fields.homeNumber;
            this.fields.fatherStreetName = fields.streetName; 
            this.fields.fatherBarangay = fields.barangay;
            this.fields.fatherTown = fields.town;
            this.fields.fatherCity = fields.city;
        } else {
            this.fields.fatherHouseNumber = null;
            this.fields.fatherStreetName = null; 
            this.fields.fatherBarangay = null;
            this.fields.fatherTown = null;
            this.fields.fatherCity = null;
        }
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

.container {
    padding: 5px;
}
</style>
