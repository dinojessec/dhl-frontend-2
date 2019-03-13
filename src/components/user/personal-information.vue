<template>
    <div class="container">

        <div class="form-row p-2">
            <div class="col-1">
                <label>Birthday</label>
            </div>
            <div class="col-5">
                <input type="date" class="form-control">
            </div>
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Age">
            </div>
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Gender">
            </div>
        </div>

        <div class="form-row p-2">
            <div class="col">
                <input type="text" class="form-control" placeholder="Email">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Mobile Number">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Landline Number">
            </div>
        </div>
        
        <div class="form-row p-2">
            <div class="col">
                <input type="text" class="form-control" placeholder="Ethnic Group">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Mother Tongue">
            </div>
        </div>

        <div class="form-row p-2">
            <div class="col">
                <input type="text" class="form-control" placeholder="Religion">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PersonalInformation'
}
</script>

<style lang="scss" scoped>

</style>
