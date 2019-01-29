<template>
    <div class="container">
        <!-- profile pic -->
        <div class="row">
            <div class="col-3 mb-5">
                <img src="@/assets/deehwa-logo.jpeg" class="rounded float-left" alt="">
            </div>
            <div class="col">
                <p class="font-weight-bold text-left">Full name of student</p>
                <p class="font-weight-bold text-left">Grade level</p>
                <p class="font-weight-bold text-left">Strand</p>
                <p class="font-weight-bold text-left">LRN: 123456789012</p>
            </div>
        </div>
        <!-- information content -->
        <div class="row">
            <div class="col-3">
                <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="personal-info-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">info2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">info2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">info3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">info4</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content ">
                <label>New Password</label>
                <input type="password" class="input-xlarge">
                <div>
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
        <!-- end container -->
    </div>
</template>

<script>



export default {
  name: 'StudentProfile',
  components: {
  },
};
</script>

<style lang="scss" scoped>


</style>
