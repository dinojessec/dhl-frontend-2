<template>

  <div class="container">
    <div class="row p-1">
      <div class="col-12">
        <div class="alert alert-danger" role="alert">
          This message will show if any of the required fields are empty
        </div>
      </div>
    </div>
    <div class="row p-2">
      <div class="p-2 col-md-3 col-12">
        <div class="profile-img">
          <img src="@/assets/deehwa-logo.jpeg" class="img-thumbnail rounded float-left" alt=""/>
        </div>
      </div>
      <div class="p-2 col-md-7 col-12">
        <div class="profile-head">
          <h1 class="display-4">Full Name</h1>
          <h4 class="">Strand</h4>
          <h4 class="">Grade Level</h4>
          <h4 class="">LRN</h4>
          <p>&nbsp;</p>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#Profile" role="tab" aria-controls="profiile" aria-selected="true">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="address-tab" data-toggle="tab" href="#Address" role="tab" aria-controls="address" aria-selected="false">Address</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="parent-tab" data-toggle="tab" href="#Parent" role="tab" aria-controls="parent" aria-selected="false">Parent</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="education-tab" data-toggle="tab" href="#Education" role="tab" aria-controls="education" aria-selected="false">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="grades-tab" data-toggle="tab" href="#Grades" role="tab" aria-controls="grades" aria-selected="false">Grades</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-2 col-md-2 col-12">
        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
      </div>
    </div>

  <div class="row">
    <div class="col-md-3 col-12">
      <div class="other-info">
        <h4 class="display-5">Personal info</h4>
          <h6 class="">Date of Birth</h6>
          <h6 class="">Age</h6>
          <h6 class="">Email</h6>
          <h6 class="">Mobile #</h6>
          <h6 class="">Landline #</h6>
        <h4 class="display-5">Account info</h4>
          <h6 class="">Username</h6>
          <a href="#" class="badge badge-primary">Change Password</a>
      </div>
    </div>
    <div class="col-12 col-md-9">
      <div class="tab-content profile-tab" id="myTabContent">
        <div class="tab-pane fade show active" id="Profile" role="tabpanel" aria-labelledby="profile-tab">
          
        </div>
        <div class="tab-pane fade" id="Address" role="tabpanel" aria-labelledby="address-tab">
          <address-information></address-information>
        </div>
        <div class="tab-pane fade" id="Parent" role="tabpanel" aria-labelledby="parent-tab">
          <parent-information></parent-information>
        </div>
        <div class="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="education-tab">
          <education-information></education-information>
        </div>
        <div class="tab-pane fade" id="Grades" role="tabpanel" aria-labelledby="grades-tab">
          grades
        </div>
      </div>
    </div>
  </div>


  </div>

</template>

<script>

import AddressInformation from '@/components/user/address-information.vue';
import ParentInformation from '@/components/user/parent-information.vue';
import EducationInformation from '@/components/user/education-information.vue';

export default {
  name: 'StudentProfile',
  components: {
    AddressInformation,
    ParentInformation,
    EducationInformation,
  },
};
</script>

<style lang="scss" scoped>

</style>
