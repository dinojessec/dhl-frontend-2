<template>
    <form>
        <h5>Input your Address</h5>
            <!-- 1st row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">House Number</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="house number"
                    >
                    <div v-if="errors.first('house number')" class="alert alert-danger mt-1">
                        {{errors.first('house number')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Street Name</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="street name"
                    >
                    <div v-if="errors.first('street name')" class="alert alert-danger mt-1">
                        {{errors.first('street name')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Barangay</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="barangay"
                    >
                    <div v-if="errors.first('barangay')" class="alert alert-danger mt-1">
                        {{errors.first('barangay')}}
                    </div>
            </div>
        </div>

            <!-- 2nd row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">Town</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="town"
                    >
                    <div v-if="errors.first('town')" class="alert alert-danger mt-1">
                        {{errors.first('town')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">City</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="city"
                    >
                    <div v-if="errors.first('city')" class="alert alert-danger mt-1">
                        {{errors.first('city')}}
                    </div>
            </div>
        </div>

        <h5>Father's Address</h5>

            <!-- 3rd row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">House Number</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="father house number"
                    >
                    <div v-if="errors.first('father house number')" class="alert alert-danger mt-1">
                        {{errors.first('father house number')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Street Name</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="father street name"
                    >
                    <div v-if="errors.first('father street name')" class="alert alert-danger mt-1">
                        {{errors.first('father street name')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Barangay</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="father barangay"
                    >
                    <div v-if="errors.first('father barangay')" class="alert alert-danger mt-1">
                        {{errors.first('father barangay')}}
                    </div>
            </div>
        </div>

            <!-- 4th row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">Town</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="father town"
                    >
                    <div v-if="errors.first('father town')" class="alert alert-danger mt-1">
                        {{errors.first('father town')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">City</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="father city"
                    >
                    <div v-if="errors.first('father city')" class="alert alert-danger mt-1">
                        {{errors.first('father city')}}
                    </div>
            </div>
        </div>

        <h5>Mother's Address</h5>

            <!-- 5th row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">House Number</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="mother house number"
                    >
                    <div v-if="errors.first('mother house number')" class="alert alert-danger mt-1">
                        {{errors.first('mother house number')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Street Name</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="mother street name"
                    >
                    <div v-if="errors.first('mother street name')" class="alert alert-danger mt-1">
                        {{errors.first('mother street name')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-4">
                <label class="control-label">Barangay</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="mother barangay"
                    >
                    <div v-if="errors.first('mother barangay')" class="alert alert-danger mt-1">
                        {{errors.first('mother barangay')}}
                    </div>
            </div>
        </div>

            <!-- 6th row -->
        <div class="form-row">
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">Town</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="mother town"
                    >
                    <div v-if="errors.first('mother town')" class="alert alert-danger mt-1">
                        {{errors.first('mother town')}}
                    </div>
            </div>
            <div class="form-group required col-12 col-md-6">
                <label class="control-label">City</label>
                <input
                    class="form-control"
                    type="text"
                    v-validate="'required'"
                    name="mother city"
                    >
                    <div v-if="errors.first('mother city')" class="alert alert-danger mt-1">
                        {{errors.first('mother city')}}
                    </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'RegFormTwo',
};

</script>

<style lang="scss" scoped>

.control-label {
  font-weight: bold;
}

</style>
