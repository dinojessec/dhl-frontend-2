<template>
  <form>
    <h4><strong>Teacher Registration</strong></h4>
    <div class="from-group mt-3">
      <div class="form-group row">
        <label
          for="username"
          class="col-sm-2 col-form-label"
        >Username</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          >
        </div>
      </div>
      <div class="form-group row mb-5">
        <label
          for="password"
          class="col-sm-2 col-form-label"
        >Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Passsword"
          >
        </div>
      </div>
      <div class="form-group row">
        <label
          for="firstName"
          class="col-sm-2 col-form-label"
        >First Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
          >
        </div>
      </div>
      <div class="form-group row mb-5">
        <label
          for="lastName"
          class="col-sm-2 col-form-label"
        >Last Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Last Name"
          >
        </div>
      </div>
      <div class="form-group row ">
        <label
          for="subject"
          class="col-sm-2 col-form-label"
        >Subject</label>
        <div class="col-sm-10">
          <select
            class="custom-select"
            id="subject"
          >
            <option selected>Select the Subject you teach</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="pe">PE</option>
          </select>
        </div>
      </div>
    </div>
    <button
      class="btn btn-primary float-right"
      type="submit"
    >Submit</button>
  </form>
</template>

<script>
export default {
  name: 'TeacherRegister',
};
</script>

<style lang="scss" scoped>
</style>
