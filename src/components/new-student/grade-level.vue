<template>
    <form>
        <h3>Register</h3>
            <!-- input name -->
        <div class="form-row">
            <div class="form-group col-12 col-md-4">
                <label>First Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="First name" v-model="student.firstName" autofocus>
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Middle Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Middle name" v-model="student.middleName">
            </div>
        
            <div class="form-group col-12 col-md-4">
                <label>Last Name</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Last name" v-model="student.lastName">
            </div>
        </div>
            <!-- input username/password -->
        <div class="form-row">
            <div class="form-group col-12 col-md-5">
                <label>Username</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Username" v-model="student.username" readonly>
            </div>
            <div class="form-group col-12 col-md-2">
                <label>&nbsp;</label>
                <button type="button" class="form-control btn-primary" @click="generateUser()">Generate</button>
            </div>
            <div class="form-group col-12 col-md-5">
                <label>Password</label>
                <input type="password" class="form-control shadow bg-white rounded" placeholder="Password" v-model="student.password">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-12 col-md-6">
                <label>Birthday</label>
                <input type="date" class="form-control shadow bg-white rounded" v-model="student.birthday">
            </div>
            <div class="form-group col-12 col-md-6">
                <label>Gender</label>
                <select  class="form-control shadow bg-white rounded" v-model="student.gender">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-12 col-md-4">
                <label>Mobile Number</label>
                <input type="text" class="form-control shadow bg-white rounded" v-model="student.mobileNumber">
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Landline Number</label>
                <input type="text" class="form-control shadow bg-white rounded" v-model="student.landlineNumber">
            </div>
            <div class="form-group col-12 col-md-4">
                <label>Email</label>
                <input type="email" class="form-control shadow bg-white rounded" v-model="student.email">
            </div>
        </div>

        <div class="form-row mb-3">
            <div class="form-group col-12 col-md-6">
                <label>Strand</label>
                <select  class="form-control shadow bg-white rounded" v-model="student.strand">
                    <!-- <option selected>Choose...</option> -->
                    <option v-for="item in strandLists" :key="item.strandId" v-bind:value="item.strandId">{{ item.strandName }}</option>
                </select>
            </div>
            <div class="form-group col-12 col-md-6">
                <label>Grade Level</label>
                <select  class="form-control shadow bg-white rounded" v-model="student.gradeLevel">
                    <option selected>Choose...</option>
                    <option value="grade11">Grade 11</option>
                    <option value="grade12">Grade 12</option>
                </select>
            </div>
        </div>

        <!-- voucher -->
        <div class="form-row">
            <div class="col-12 col-md-6">
                <label>Voucher</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="input voucher code">
            </div>
            <div class="col-12 col-md-6">
                <label>Referred By:</label>
                <input type="text" class="form-control shadow bg-white rounded" placeholder="Reffered by:">
            </div>
        </div>

        <!-- need to add competency(APT, PEPT, NC) -->

    </form>
</template>

<script>
export default {
    name: 'grade-level',
    props: ['strandLists'],
    data() {
        return {
            student: {
                firstName: '',
                middleName: '',
                lastName: '',
                username: '',
            }
        }
    },

    watch: {
        student: {
            handler(val) {
            const dataMap = val;
                this.$store.commit('studentStateChange', dataMap);
                this.$store.commit('studentFormErrorCount', this.errors.count());
            },
            deep: true,
        },
    },

    methods: {
        generateUser() {
        const firstName = this.student.firstName;
        const middleName = this.student.middleName;
        const lastName = this.student.lastName;
        
        if(typeof firstName !== 'undefined' && typeof middleName !== 'undefined' && typeof lastName !== 'undefined') {
            const username = `${lastName}${firstName}${middleName.charAt(0)}`;
            this.student.username = username.replace(/\s/g, '').toLowerCase();
        }
        },
    },

};
</script>

<style lang="scss" scoped>

</style>
