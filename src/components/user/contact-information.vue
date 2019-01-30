<template>
     <div class="container">
            <!-- 1st row -->
        <div class="row">
            <div class="col">
                 <label for="landlineNumber">Landline Number</label>
                <input class="form-control" type="text" id="landlineNumber" disabled>
            </div>  
        </div>
            <!-- 2nd row -->
        <div class="row">
            <div class="col">
                <label for="mobileNumber">Mobile Number</label>
                <input class="form-control" type="text" id="mobileNumber" disabled>
            </div>
        </div>
            <!-- 3rd row -->
        <div class="row">
            <div class="col">
                <label for="facebook">Facebook</label>
                <input class="form-control" type="text" id="facebook" disabled>
            </div>
        </div>
            <!-- 4th row -->
        <div class="row">
            <div class="col">
                <label for="instagram">Instagram</label>
                <input class="form-control" type="text" id="instagram" disabled>
            </div>
        </div>
            <!-- 5th row -->
        <div class="row">
            <div class="col">
                <label for="email">Email</label>
                <input class="form-control" type="text" id="email" disabled>
            </div>
        </div>
       <!-- end of container -->
    </div>
</template>

<script>
export default {
    name: 'ContactInformation'
    
}
</script>

<style lang="scss" scoped>

</style>
