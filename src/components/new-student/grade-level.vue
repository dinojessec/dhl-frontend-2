<template>
    <form>
        <h3>Register</h3>
            <!-- input grade level -->
        <div class="form-row mb-3">
            <div class="form-group col-12 col-md-6">
                <label>Strand</label>
                <select  class="form-control shadow bg-white rounded">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="form-group col-12 col-md-6">
                <label>Grade Level</label>
                <select  class="form-control shadow bg-white rounded">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
        </div>
            <!-- input name -->
        <div class="form-row">
            <div class="form-group col-12 col-md-4">
                <label>First Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="First name" v-model="firstName">
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Middle Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Middle name" v-model="middleName">
            </div>
        
            <div class="form-group col-12 col-md-4">
                <label>Last Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Last name" v-model="lastName">
            </div>
        </div>
            <!-- input username/password -->
        <div class="form-row">
            <div class="form-group col-12 col-md-5">
                <label>Username</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Username" v-model="username" readonly>
            </div>
            <div class="form-group col-12 col-md-2">
                <label>&nbsp;</label>
                <button type="button" class="form-control btn-primary" @click="generateUser()">Generate</button>
            </div>
            <div class="form-group col-12 col-md-5">
                <label>Password</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Password">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-12 col-md-6">
                <label>Birthday</label>
                <input type="date" class="form-control shadow bg-white rounded">
            </div>
            <div class="form-group col-12 col-md-6">
                <label>Gender</label>
                <select  class="form-control shadow bg-white rounded">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-12 col-md-4">
                <label>Mobile Number</label>
                <input type="text" class="form-control shadow bg-white rounded">
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Landline Number</label>
                <input type="text" class="form-control shadow bg-white rounded">
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Email</label>
                <input type="email" class="form-control shadow bg-white rounded">
            </div>
        </div>


    </form>
</template>

<script>
export default {
    name: 'grade-level',
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            username: ''
        }
    },


  methods: {
    generateUser() {
      const firstName = this.firstName;
      const middleName = this.middleName;
      const lastName = this.lastName;
      
      if(typeof firstName !== 'undefined' && typeof middleName !== 'undefined' && typeof lastName !== 'undefined') {
        const username = `${lastName}${firstName}${middleName.charAt(0)}`;
        this.username = username.replace(/\s/g, '').toLowerCase();
      }
    },
  }

}
</script>

<style lang="scss" scoped>

</style>
